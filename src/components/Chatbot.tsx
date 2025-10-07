"use client";

import {useState, useRef, useEffect} from "react";
import {Message, ChatResponse} from "@/types/chat";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            content: "Hello! I'm your AI assistant. How can I help you today?",
            role: "assistant",
            timestamp: new Date(),
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (content: string) => {
        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            content,
            role: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({message: content}),
            });

            const data: ChatResponse = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to get response");
            }

            // Add assistant message
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: data.response || "Sorry, I couldn't generate a response.",
                role: "assistant",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Error sending message:", error);

            // Add error message
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: "Sorry, I encountered an error. Please try again.",
                role: "assistant",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col max-w-2xl md:mx-auto bg-white shadow-lg m-6">
            {/* Header */}
            <div className="bg-sky-500/75 text-white p-4 text-center">
                <h1 className="text-xl font-semibold">Ask me anything about product reviews!</h1>
                <p className="text-blue-100 text-sm">Powered by GPT-3.5</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <MessageBubble key={message.id} message={message}/>
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-gray-200 text-gray-800 rounded-lg rounded-bl-none px-4 py-2">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{animationDelay: "0.1s"}}
                                ></div>
                                <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{animationDelay: "0.2s"}}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef}/>
            </div>

            {/* Input */}
            <ChatInput onSendMessage={sendMessage} isLoading={isLoading}/>
        </div>
    );
}
