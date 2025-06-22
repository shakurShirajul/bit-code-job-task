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
   Start the frontend development server:
   ```
   npm run dev
   ```
   The application will be accessible at http://localhost:5000

# Frontend Documentation

### Architecture & Technology Decisions

- React: React was choosen for its component-based architecture, which make easy to maintain UI elements. It ensures smooth user experience.
- React Router: It is used for client-side routing to create seamless SPA (Single Page Application) experience.
- Redux: Redux is choosen because of it offers various benefits such as state management and efficient data flow.
- RTK Query: It's simplifying data fetching and sate management.
- Tailwind CSS: Tailwind CSS is choosen because it provides several benefits such as rapid development, customization and maitainability. It makes code more readable.

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

- UI/UX: The UI follows modern **glassmorphysm** style which offers a visually appealing and interactive experience. Try to followthe best practices for user experience.
- Nested Comments: The comment section renders itself and then maps over its replies. To improve readability, visual identation is applie in the for each level. The nesting depth is limited to 3 levels.
- Filtering & Sorting: When a user changes a filter the component re-fetchs the roadmap data from the API with the appropriate query parameters and update the UI automatically.
