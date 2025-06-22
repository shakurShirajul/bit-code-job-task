# Full Stack ROADMAP WEB App

This is a web application built a for assessment task. The platform allows user to view a proudct roadmap, engage with roadmap items by upvoting and commenting.

# Core Technologies:

- Frontend: React, Tailwind CSS, Redux.
- Backend: Node.js, Express.js, MongoDB with Mongoose, JWT for authentication.

# Table of Contents

- Getting Started
- Frontend Documentation
- Backend Documentation

# Getting Started

To run this project locally, you will need Node.js and MongoDB installed on your machine.

1. ### Clone the Repository

   ```
   git clone https://github.com/shakurShirajul/bit-code-job-task.git
   cd bit-code-job-task
   ```

2. ### Frontend Setup
   In a new terminal, navigate to the frontend directory, install dependencies and start the React app.
   ```
    cd frontend
    npm install
   ```
   Start the frontend development server:
   ```
   npm run dev
   ```
   The application will be accessible at http://localhost:5173
3. ### Backend Setup

   In a new terminal, navigate to the frontend directory, install dependencies and set up enviroment variables.

   ```
    cd backend
    npm install
   ```

   Create a .env file in the /api directory and add the following variables:

   ```
    ACCESS_TOKEN_SECRET=your_jwt_secret
    DB_USER=your_mongoDB_user_name
    DB_PASS=your_monogDB_password

   ```

   Start the frontend development server:

   ```
   npm run dev
   ```

   The application will be accessible at http://localhost:5000

# Frontend Documentation

### Architecture & Technology Decisions

- **React**: React was choosen for its component-based architecture, which make easy to maintain UI elements. It ensures smooth user experience.
- **React Router**: It is used for client-side routing to create seamless SPA (Single Page Application) experience.
- **Redux**: Redux is choosen because of it offers various benefits such as state management and efficient data flow.
- **RTK Query**: It's simplifying data fetching and sate management.
- **Tailwind CSS**: Tailwind CSS is choosen because it provides several benefits such as rapid development, customization and maitainability. It makes code more readable.

### Code Style & Project Structure

This frontend codebase is organized to promote readability and reusability.

```
/src
| -- /app           # Redux store configuration
| -- /assets        # Static assets
| -- /components    # Reuseable UI components
| -- /features      # API setup and Redux Slice
| -- /layout        # Root layout components
| -- /pages         # Full page components
| -- /routes        # Route Definitations
| -- /utils         # Loader Function
| -- index.css
| -- main.jsx
```

### Feature Design & Implementation

- **UI/UX**: The UI follows modern **glassmorphysm** style which offers a visually appealing and interactive experience. Try to followthe best practices for user experience.
- **Nested Comments**: The comment section renders itself and then maps over its replies. To improve readability, visual identation is applie in the for each level. The nesting depth is limited to 3 levels.
- **Filtering & Sorting**: When a user changes a filter the component re-fetchs the roadmap data from the API with the appropriate query parameters and update the UI automatically.

# Backend Documentation

The backend is a RESTful API built with Node.js and Express.js, it is scalabe and secure.

### Architecture & Technology Decisions

- **Node.js & Express.js**: Express is choosen for its minimalistic nature. It provides the flexibility and light weight API server.
- **MongoDB & Mongoose**: MongoDB is selected because it is ideal for its flexible schema and store data in JSON-like format. It is easy to scale. Mongoose is used because it define schemas and enforce rules and validations.
- **RESTful API Design**: The API is structured according to REST principles, with separate routes for different resources such as `users`, `roadmap`, and `comments`. Each route handles standard HTTP methods to perform CRUD operations in a clean and consistent manner.

### Code Style & Project Structure

This backend codebase is organized to promote readability and reusability.

```
/src
| -- /config        # Database connection setup
| -- /middleware    # Authentication function
| -- /models        # Mongoose models for MongoDB
| -- /routes        # API route definitions
| -- /utils         # Utility functions
/index.js           # Main server entry poin
```

### Feature Design & Implementation

1. **User Authenticaiton(JWT)**

- Authentication is handled using JWT. It is choosen because it eliminates the need for sever-side session storage. When user login it generates a signed JWT containing the user's ID and email. This token is sent to the client stored in cookies.

  `bcryptjs` library is used to hash user passwords before storing them in the database, ensuring security.
  `verifyToken` middleware is used to check every incoming request is comming from the authorized user or not.

2.  **Database Schema**

- The database is structured around three models: `User`, `RoadmapItem`, and `Comment`.
  - User: Stores user credentials (email, password)
  - Roadmap: Defines the roadmap items.
  - Comment: This is the most complex model, designed to support nesting comment.
