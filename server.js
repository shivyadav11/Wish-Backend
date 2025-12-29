import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import wishRoutes from "./routes/wish.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/wish", wishRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
