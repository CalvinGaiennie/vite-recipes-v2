import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://vite-recipes-v2.netlify.app",
    ], // Allow both localhost and IP
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error details:", err);
    process.exit(1);
  });

// Recipe Schema
const recipeSchema = new mongoose.Schema({
  author: { type: String, required: true },
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  amounts: { type: [String], default: [] },
  steps: { type: [String], required: true },
  units: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add this to ensure the schema includes amounts in the response
recipeSchema.set("toJSON", {
  transform: function (doc, ret) {
    return {
      ...ret,
      amounts: ret.amounts || [],
      units: ret.units || [],
    };
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

// Routes
app.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/recipes", async (req, res) => {
  console.log("1. Received request body:", req.body);

  const recipe = new Recipe({
    author: req.body.author,
    name: req.body.name,
    ingredients: req.body.ingredients,
    amounts: req.body.amounts,

    steps: req.body.steps,
    units: req.body.units,
  });

  console.log("2. Created recipe model:", recipe);

  try {
    const newRecipe = await recipe.save();
    console.log("3. Saved recipe:", newRecipe);
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error("Save error:", error);
    res.status(400).json({ message: error.message });
  }
});

// Add this after your routes
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Add the port configuration and server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
