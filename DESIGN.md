Name: Dorm Connect
Description: A chat application designed for Yale residential students to connect, discuss, and resolve conflicts.

Design Decisions - Frontend Design

Technologies: HTML, CSS, JavaScript
Back-End: EJS, Node.js, Socket.io

Backend Architecture
Server: Node.js with Express framework for efficient handling of HTTP requests.
Database: MongoDB with Mongoose for user data storage, including chat history.

Session Management: express-session with connect-mongo for secure and persistent user sessions.
Authentication: bcryptjs for password hashing, ensuring user password security.

Implementation: Custom Socket.IO server integrated with Express for handling real-time chat messages.
Security

Session Security: Used cookie-parser middleware for secure handling of cookies.

Login/Register Modals: Interactive forms for user authentication.
Chat Interface: Real-time messaging with auto-scrolling to the latest messages.

DRY Principle: Aimed to minimize code repetition by modularizing reusable components.
Error Handling: Structured error handling for robustness in user interactions.
Challenges and Solutions

When we were starting to design this website, we knew we were going to use html and css to add and create the designs. So we first started with finding what fonts and color we wanted to add to the css page. As there are many techincal terms, we had to websites like "https://www.w3schools.com/" to become familar with terms like padding, flex, positions, etc.

We remembered in one of the past psets that we used a certain website to manually create colors. We used "https://htmlcolorcodes.com" to create and pick the colors I wanted to add into the css style page. This is where we become familiar with using hexideciamls to get the exact color we wanted to add to our website.

In terms of the website itself, we went for a more plain aesthetic look. This made it also simplier to work with in terms of code and the work. We also wanted it to look sleek and clean for the user interaction. It'll be easier for the user to understand the website.



