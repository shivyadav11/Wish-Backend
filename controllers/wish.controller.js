import { generateWishFromAI } from "../services/openai.service.js";

export const generateWish = async (req, res) => {
  try {
    const { name, relationship, tone, language } = req.body;

    if (!name || !relationship || !tone || !language) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const wish = await generateWishFromAI({
      name,
      relationship,
      tone,
      language,
    });

    res.status(200).json({
      success: true,
      wish,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Failed to generate wish",
    });
  }
};
