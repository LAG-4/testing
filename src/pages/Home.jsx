import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import logo from "../assets/daily-wellness-logo.jpg"; // Ensure this path is correct
import Footer from "./footer";
import Timer from "./Timer";
import Content from "./Content";
import Socials from "./Socials";

export default function Home() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div className="flex flex-col bg-white">
      {/* Logo Section */}
      <section className="min-h-screen flex flex-col items-center justify-center gap-8">
        {/* Logo Section */}
        <div className="w-full max-w-[1200px] max-h-[80vh] px-4">
          <img
            src={logo}
            alt="Daily Wellness Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 px-4">
          {/* Button 1: Navigate to AI Wellness Guru */}
          <button
            className="bg-gradient-to-b from-pink-500 via-pink-600 to-purple-700 text-white font-medium py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            onClick={() => navigate("/wellness")}
          >
            AI Wellness Guru
          </button>

          {/* Button 2: Navigate to Sign In */}
          <button
            className="bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600 text-white font-medium py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>

          {/* Button 3: Navigate to Sign Up */}
          <button
            className="bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-700 text-white font-medium py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="min-h-screen flex items-center justify-center text-center">
        <div className="w-full max-w-4xl px-4">
          <Content />
        </div>
      </section>

      {/* Timer Section */}
      <section className="min-h-screen w-full bg-gray-50 flex items-center justify-center text-center px-4">
        <div className="w-full max-w-6xl">
          <Timer />
        </div>
      </section>

      {/* Socials Section */}
      <section className="min-h-screen flex items-center justify-center text-center">
        <div className="w-full max-w-4xl px-4">
          <Socials />
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
