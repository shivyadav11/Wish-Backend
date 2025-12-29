import dotenv from "dotenv";
dotenv.config(); // 👈 VERY IMPORTANT

import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY not found in environment variables");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateWishFromAI = async ({
  name,
  relationship,
  tone,
  language,
}) => {
  const prompt = `
Generate a New Year wish.

Name: ${name}
Relationship: ${relationship}
Tone: ${tone}
Language: ${language}

Rules:
- Max 5 lines
- Natural & human
- Emojis only if friendly/funny
- No markdown
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.8,
  });

  return response.choices[0].message.content;
};
