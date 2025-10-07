
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { Agent, run, tool } from "@openai/agents";
import z from "zod";
import { getProductReviews } from "./reviews";

// Define a tool for reading product reviews
const readProductReviews = tool({
  name: "read_product_reviews",
  description: "Read product reviews for a given product ID.",
  parameters: z.object({
    productId: z.string().describe("The product ID to fetch reviews for")
  }),
  async execute(input: { productId: string }) {
    console.log(`Fetching reviews for product ID: ${input.productId}`);
    const reviews = getProductReviews(input.productId);
    if (!reviews.length) {
      return `No reviews found for product ID ${input.productId}.`;
    }
    return reviews.map(r => `Reviewer: ${r.reviewer}, Rating: ${r.rating}, Comment: ${r.comment}`).join("\n");
  }
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured" },
        { status: 500 }
      );
    }

    


    // Use OpenAI Agents to run with the tool
    const agent = new Agent({
      name: "Chatbot Assistant",
      tools: [readProductReviews],
      instructions: "You are a helpful assistant. Provide clear and concise responses.",
    });


    const result = await run(agent, [
      { role: "user", content: message }
    ]);
console.log("Agent result:", result);
    const response = result?.finalOutput || "No response generated";
    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
