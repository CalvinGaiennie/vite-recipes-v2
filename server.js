const express = require("express");
const cors = require("cors");
const app = express();

// CORS configuration
app.use(
  cors({
    origin: [
      "https://vite-recipes-v2.netlify.app",
      "http://localhost:5173", // Add this for local development
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ... rest of your server code
