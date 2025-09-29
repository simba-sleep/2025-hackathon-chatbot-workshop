import OpenAI from "openai";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    "OpenAI API key is not configured. Please set REACT_APP_OPENAI_API_KEY in your .env file."
  );
}

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true, // Note: In production, you should use a backend proxy
});

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export const sendMessage = async (messages: ChatMessage[]): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    return (
      completion.choices[0]?.message?.content ||
      "Sorry, I could not generate a response."
    );
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error(
      "Failed to get response from AI. Please check your API key and try again."
    );
  }
};
