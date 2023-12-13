# Design Documentation for Dorm Connect

## Overview

Name: Dorm Connect
Description: A chat application tailored for Yale residential students to foster connections, discuss various topics, and resolve conflicts within a secure and real-time environment.

## Frontend Design

### Technologies Used

- **HTML**: Structured the content and layout of the web application.
- **CSS**: Provided styling to make the interface visually appealing and ensure a seamless user experience. The design leverages clean, minimalist aesthetics, with a focus on readability and ease of navigation.
- **JavaScript**: Enabled dynamic interactions on the frontend, such as form validation, real-time chat updates, and user feedback.

### Layout and Style

- **Fonts and Colors**: The design emphasizes simplicity and elegance. Fonts are chosen for readability and professionalism. Color schemes were generated using "https://htmlcolorcodes.com" to ensure visual harmony and user focus.
- **Responsive Design**: CSS Flexbox and media queries are utilized to make the application adaptable to various screen sizes and devices.

## Backend Architecture

### Server

- **Node.js with Express**: Forms the backbone of the server architecture, handling HTTP requests efficiently and providing a robust framework for web application development.

### Database

- **MongoDB with Mongoose**: Serves as the database system, with Mongoose providing schema-based modeling to manage user data and chat history.

### Session Management

- **express-session with connect-mongo**: Manages user sessions with persistent storage, ensuring users remain authenticated as they interact with the application.

### Authentication

- **bcryptjs**: Handles password security through hashing, providing a secure authentication mechanism.

## Real-Time Communication

- **Socket.IO**: Integrated with Express to facilitate real-time bidirectional event-based communication for the chat functionality.

## Security Measures

- **cookie-parser**: Utilized middleware for the secure handling of cookies, essential for maintaining session integrity.
- **express-session**: Further enhances session security, keeping user data protected across requests.

## User Interface

- **Login/Register Modals**: Interactive and user-friendly, these forms facilitate the authentication process.
- **Chat Interface**: Designed for real-time messaging, with features such as auto-scrolling to display the latest messages.

## Design Principles

- **DRY Principle**: The codebase is designed to minimize repetition by modularizing components, promoting reusability and maintainability.
- **Error Handling**: Implemented comprehensive error handling to ensure reliability during user interactions.

## Challenges and Solutions

- **Design Familiarity**: To refine our understanding of CSS properties and HTML elements, resources like "https://www.w3schools.com/" were invaluable.
- **Color Scheme Development**: The color palette was carefully curated using "https://htmlcolorcodes.com" to align with our design vision.


Dorm Connect is built with a focus on creating a streamlined user experience that is both aesthetically pleasing and functionally robust. Through thoughtful design choices and careful implementation, the platform aims to enhance the social dynamics among Yale students.
