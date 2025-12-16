import { GoogleGenAI } from "@google/genai";
import { Mood } from "../types";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in your environment
const ai = new GoogleGenAI({ apiKey });

export const getSupportiveMessage = async (mood: Mood): Promise<string> => {
  if (!apiKey) return "Remember to take deep breaths today.";

  try {
    const prompt = `
      The user is feeling "${mood}". 
      Provide a very short, warm, non-judgmental, and supportive 1-sentence thought for their fitness journey.
      Do not be preachy. Keep it under 20 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Every small step is a victory.";
  }
};

export const analyzeFoodSentiment = async (foodName: string): Promise<string> => {
   if (!apiKey) return "Sounds delicious!";
   
   try {
     const prompt = `
       The user ate "${foodName}". 
       Give a short (5-10 words) positive, non-judgmental comment about this choice. 
       Focus on nourishment or enjoyment. No calorie shaming.
     `;
     
     const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
     });
     
     return response.text.trim();
   } catch (error) {
     return "Good choice!";
   }
}