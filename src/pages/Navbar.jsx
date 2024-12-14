import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Brand Name */}
        <div
          className="text-2xl font-bold text-gray-800 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Daily Wellness
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          {/* Sign In Button */}
          <button
            className="bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600 text-white font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>

          {/* Sign Up Button */}
          <button
            className="bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-700 text-white font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
