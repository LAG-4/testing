import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/daily-wellness-logo.jpg"; // Ensure this path is correct

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API payload
    const payload = {
      username,
      password,
    };

    try {
      const response = await fetch("https://dailywellness-backend.onrender.com/api/v1/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Sign-in successful!");
        setError("");
        setUsername("");
        setPassword("");
        // Redirect to /wellness after successful sign-in
        navigate("/wellness");
      } else {
        setError(data.message || "Failed to sign in. Please try again.");
        setSuccess("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#2D3748] flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-10 rounded-xl shadow-lg relative overflow-hidden">
        {/* Background Circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#FF1B6B] rounded-full opacity-10"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#FFA726] rounded-full opacity-10"></div>

        {/* Logo Section */}
        <div className="relative text-center">
          <img
            src={logo}
            alt="Daily Wellness Logo"
            className="w-24 h-24 mx-auto mb-4 object-contain sm:w-32 sm:h-32"
          />
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <a
              href="/signup"
              className="font-medium text-[#4267B2] hover:text-[#365899]"
            >
              create a new account
            </a>
          </p>
        </div>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}

        {/* Form Section */}
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-md block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4267B2] focus:border-[#4267B2] sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4267B2] focus:border-[#4267B2] sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#4267B2] focus:ring-[#4267B2] border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#4267B2] hover:text-[#365899]"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-full text-white bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
