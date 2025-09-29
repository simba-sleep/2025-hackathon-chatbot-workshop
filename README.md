# AI Chatbot Workshop

A simple, modern chatbot browser application built with React, TypeScript, and Tailwind CSS, powered by OpenAI's GPT API.

## Features

- 🤖 Real-time chat with OpenAI GPT-3.5-turbo
- 💬 Beautiful, responsive chat interface
- ⚡ Built with modern React hooks and TypeScript
- 🎨 Styled with Tailwind CSS for a sleek design
- 📱 Mobile-friendly responsive design
- ⏰ Message timestamps
- 🔄 Loading states and error handling

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- An OpenAI API key

## Getting Started

### 1. Clone and Install Dependencies

```bash
# Navigate to the project directory
cd hackathon-chatbot-workshop

# Install dependencies
npm install
```

### 2. Set up Environment Variables

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Edit the `.env` file and add your OpenAI API key:

```env
REACT_APP_OPENAI_API_KEY=your_actual_openai_api_key_here
```

**⚠️ Important:** Never commit your actual API key to version control. The `.env` file is already included in `.gitignore`.

### 3. Get Your OpenAI API Key

1. Visit [OpenAI's website](https://openai.com/)
2. Sign up or log in to your account
3. Navigate to the API section
4. Generate a new API key
5. Copy the key and paste it in your `.env` file

### 4. Run the Application

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── Chatbot.tsx          # Main chatbot component
│   ├── MessageBubble.tsx    # Individual message display
│   └── ChatInput.tsx        # Message input component
├── services/
│   └── openai.ts           # OpenAI API integration
├── types/
│   └── chat.ts             # TypeScript type definitions
├── App.tsx                 # Main App component
├── index.tsx              # Application entry point
└── index.css              # Global styles with Tailwind
```

## Key Components

### Chatbot Component

- Manages chat state and message history
- Handles API calls to OpenAI
- Implements error handling and loading states

### MessageBubble Component

- Displays individual messages with timestamps
- Differentiates between user and AI messages
- Responsive design for different screen sizes

### ChatInput Component

- Text input with send functionality
- Keyboard shortcuts (Enter to send, Shift+Enter for new line)
- Loading state during API calls

## Customization

### Changing the AI Model

Edit `src/services/openai.ts` to use different models:

```typescript
model: 'gpt-4', // or 'gpt-3.5-turbo-16k', etc.
```

### Styling

The app uses Tailwind CSS. You can customize the appearance by modifying the classes in the component files or extending the Tailwind configuration in `tailwind.config.js`.

### System Prompt

Modify the system message in `src/components/Chatbot.tsx`:

```typescript
{ role: 'system', content: 'Your custom system prompt here.' }
```

## Security Notes

⚠️ **Important Security Information:**

This implementation uses the OpenAI API directly from the browser with `dangerouslyAllowBrowser: true`. This is suitable for development and demos but **NOT recommended for production** because:

1. Your API key is exposed in the client-side code
2. Users can see and potentially abuse your API key
3. You have no control over API usage and costs

### Production Recommendations:

1. **Create a backend API** that handles OpenAI requests
2. **Implement authentication** to control access
3. **Use environment variables** on the server side
4. **Implement rate limiting** to prevent abuse
5. **Monitor API usage** and set spending limits

## Available Scripts

- `npm start` - Run the development server
- `npm build` - Build the app for production
- `npm test` - Run the test suite
- `npm eject` - Eject from Create React App (one-way operation)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Troubleshooting

### Common Issues

1. **API Key Error**: Make sure your OpenAI API key is correctly set in the `.env` file
2. **Network Errors**: Check your internet connection and API key validity
3. **Build Errors**: Try deleting `node_modules` and running `npm install` again

### Getting Help

- Check the [OpenAI API documentation](https://platform.openai.com/docs)
- Review the browser console for error messages
- Ensure your API key has sufficient credits

---

Built with ❤️ for the Hackathon Chatbot Workshop
