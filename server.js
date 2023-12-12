require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const User = require('./userModel');
const path = require('path');
const bcrypt = require('bcryptjs');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const fetch = require('node-fetch');

// Database Connection
const mongoDB_URI = process.env.MONGODB_URI;
mongoose.connect(mongoDB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session Configuration
const sessionSecret = process.env.SESSION_SECRET;
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongoDB_URI })
}));

const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }
  res.redirect('/login');
};

const sessionMiddleware = session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: mongoDB_URI })
});

app.use(sessionMiddleware);
// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});





app.get('/default-message', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'default-message.html'));
});


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
      return res.status(400).send('All fields are required');
  }

  try {
      // Check if user already exists
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
          return res.status(400).send('Email already in use');
      }

      // If user doesn't exist, create a new one
      const user = new User({ name, email, password });
      await user.save();
      res.redirect('/login');
  } catch (error) {
      console.error(error);
      res.status(500).send('Error registering new user');
  }
});



app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      res.redirect('/default-message');
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during login');
  }
});



app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

// Create an HTTP server and attach the Express app
const server = http.createServer(app);

// Initialize Socket.IO and attach it to the HTTP server
const io = new Server(server);

// Socket.IO Connection Handler
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    if (socket.request.session && socket.request.session.user) {
      const user = socket.request.session.user;
      io.emit('chat message', { name: user.name, message: msg });
    } else {
      console.log('User data not found in session');
    }
  });
  

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.use((socket, next) => {
  sessionMiddleware(socket.request, {}, next);
});

app.get('/autocomplete', async (req, res) => {
  try {
    const response = await fetch('https://yalies.io/api/people', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: req.query.name })
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/search', async (req, res) => {
  try {
    const response = await fetch('https://yalies.io/api/people', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: req.query.query })
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});


// Change app.listen to server.listen
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});