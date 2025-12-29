import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import wishRoutes from "./routes/wish.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Root route (for Render / browser check)
app.get("/", (req, res) => {
  res.send("🎉 Wish Backend API is running");
});

// Health check route (optional but best)
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is healthy 🚀" });
});

// API routes
app.use("/api/wish", wishRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
