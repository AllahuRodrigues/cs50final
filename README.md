# Dorm Connect

## Introduction
"Dorm Connect" - is a real-time social media platform designed and built by Yale students Alla-u-abha Rodrigues, Carmen Mitchell, and Joselyn Galicia. The project aims to enhance social interactions among college students, functioning similarly to Omegle but with a focus on the college community. The website allows users to register, log in, and engage in chat conversations. The frontend is developed using HTML, CSS, and JavaScript, while the backend is powered by Node.js with Socket.io for real-time communication and MongoDB for data persistence.

## Installation and Running the Program

### Prerequisites

- Node.js
- MongoDB

### Installing Dependencies

1. Clone the repository or download the ZIP file and extract it.
2. Open the project in Visual Studio Code or your preferred IDE.
3. In the project directory, run the following command to install necessary Node.js packages:

   ```bash
   npm install```

Running the Application
Start MongoDB in your local environment.
In the project's root directory, start the Node.js server by running:
bashCopy code
node server.js 
Open a web browser and navigate to http://localhost:3000 for local testing or https://dormconnectomegle.onrender.com/ for the live version.


Features---------------------------------------------------------------------------------------
Registration:
- Visit http://localhost:3000/register to sign up.
- Complete the registration form with your details.

Login:
- After registration, log in with the credentials you set up.
- Access the chat feature upon logging in.

Chatting:
- Engage in conversations with other logged-in users in real-time.
- The platform also supports anonymous chatting, allowing you to set your username as 'anonymous'.

Logout:
- Click the "Log Out" button to log out and be redirected to the homepage.
- Note: Logging out will erase chat conversations.

Developers---------------------------------------------------------------------------------------
Alla-u-abha Rodrigues, Carmen Mitchell, and Joselyn Galicia have collaboratively developed "Dorm Connect," leveraging their skills in web development and real-time communication technologies.

Deployment Process---------------------------------------------------------------------------------------
"Dorm Connect" is deployed using Render.com, leveraging the continuous deployment feature from our GitHub repository (AllahuRodrigues/cs50final) on the main branch. The deployment process involves:
1- Pushing Updates to GitHub: All code updates are pushed to the main branch of our GitHub repository.
2- Automatic Deployment on Render.com: Render.com is configured to automatically detect changes in the GitHub repository and deploy the latest version of the application.
3- Live Application: The live application is accessible at” https://dormconnectomegle.onrender.com/”  hosted via Render.com.

Developers---------------------------------------------------------------------------------------
Developed by Allah-u-abha Rodrigues, Carmen Mitchell, and Joselyn Galicia, "Dorm Connect" is a testament to the innovative use of web technologies for enhancing student interactions.

Our Video---------------------------------------------------------------------------------------
For more insights and a walkthrough of "Dorm Connect," check out our YouTube video: https://youtu.be/eKMEdAJa7So.

To start run the command “node server.js” – test mode.

---------------------------------------------------------------------------------------
This README now includes a section on the deployment process using Render.com, along with the GitHub repository details. It provides a comprehensive overview of your project, from concept to deployment. Feel free to adjust any part of it to better fit your project's specifics.
