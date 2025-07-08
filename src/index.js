// Import core React libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Import the root App component
import App from "./App.js";

// Create a root container using React 18+ API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped with React.StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
