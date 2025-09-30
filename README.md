# AI Chatbot with GPT-3.5

A simple chatbot built with Next.js, TypeScript, and Tailwind CSS that integrates with OpenAI's GPT-3.5 API.

## Features

- Modern chat interface with message bubbles
- Real-time messaging with typing indicators
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Next.js API routes for secure API calls
- Environment variable configuration

## Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   - Copy `env.example` to `.env.local`
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_openai_api_key_here
     ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── api/chat/
│   │   └── route.ts          # API endpoint for OpenAI integration
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page component
├── components/
│   ├── Chatbot.tsx           # Main chatbot component
│   ├── ChatInput.tsx         # Message input component
│   └── MessageBubble.tsx     # Individual message component
└── types/
    └── chat.ts               # TypeScript type definitions
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **OpenAI API** - GPT-3.5 integration for AI responses

## Getting Your OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and add it to your `.env.local` file

## Customization

- Modify the system prompt in `src/app/api/chat/route.ts`
- Adjust styling in the component files
- Change the GPT model or parameters in the API route
- Add more features like conversation history, user authentication, etc.

## Deployment

This project can be deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications. Make sure to set your environment variables in your deployment platform.
