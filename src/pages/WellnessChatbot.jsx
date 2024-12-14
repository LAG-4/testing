import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WellnessChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showMoodPopup, setShowMoodPopup] = useState(true);
  const [promptCount, setPromptCount] = useState(0);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const chatContainerRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "" || (promptCount >= 5 && !showSignUpPopup)) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      // API Call
      const response = await fetch("https://dailywellness-backend.onrender.com/api/v1/user/dwAiGuru", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }), // Sending user's input as "question"
      });

      // Handle API Response
      const data = await response.json();

      if (data.status === "success" && data.details) {
        const botResponse = { role: "bot", content: data.details };
        setMessages((prev) => [...prev, botResponse]); // Display API response in chat
        console.log("API Response:", data.details); // Print response in terminal
      } else {
        const errorResponse = {
          role: "bot",
          content: "I'm sorry, I couldn't fetch a response. Please try again later.",
        };
        setMessages((prev) => [...prev, errorResponse]);
        console.error("API Error:", data.message || "Unknown error"); // Print error in terminal
      }
    } catch (error) {
      const errorResponse = {
        role: "bot",
        content: "An error occurred while connecting to the server. Please try again later.",
      };
      setMessages((prev) => [...prev, errorResponse]);
      console.error("Error while fetching the API:", error); // Print error in terminal
    }

    setPromptCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 5) {
        setShowSignUpPopup(true);
      }
      return newCount;
    });

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF1F8E] to-[#FF8642] py-4 px-4 sm:px-8 flex items-center justify-between shadow-lg">
        <Link
          to="/"
          className="text-white text-sm sm:text-lg font-semibold hover:text-orange-400 transition-colors duration-300"
        >
          Home
        </Link>
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white">AI Wellness Guru</h1>
        <Link
          to="/auth"
          className="text-white text-sm sm:text-lg font-semibold hover:text-purple-400 transition-colors duration-300"
        >
          Signup/Signin
        </Link>
      </header>

      {/* Chat Area */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-end gap-2 sm:gap-3 ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                  message.role === "user" ? "bg-[#FF8642]" : "bg-[#FF1F8E]"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                ) : (
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                )}
              </div>
              <div
                className={`max-w-[70%] p-3 sm:p-4 rounded-2xl ${
                  message.role === "user"
                    ? "bg-[#FF8642] text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                } shadow-md`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 sm:p-6 bg-white border-t border-gray-200 rounded-t-2xl shadow-lg">
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me anything about wellness..."
            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 rounded-full pr-16 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF1F8E] shadow-inner"
            disabled={promptCount >= 5 && !showSignUpPopup}
          />
          <button
            onClick={handleSendMessage}
            className={`absolute right-2 sm:right-4 top-2 sm:top-3 bg-gradient-to-r from-[#FF1F8E] to-[#FF8642] text-white p-2 sm:p-3 rounded-full transition-all duration-300 shadow-md ${
              promptCount >= 5 && !showSignUpPopup
                ? "opacity-50 cursor-not-allowed"
                : "hover:from-[#FF1F8E]/90 hover:to-[#FF8642]/90"
            }`}
            disabled={promptCount >= 5 && !showSignUpPopup}
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WellnessChatbot;
