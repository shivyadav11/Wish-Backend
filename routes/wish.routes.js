import express from "express";
import { generateWish } from "../controllers/wish.controller.js";

const router = express.Router();

router.post("/generate", generateWish);

export default router;
