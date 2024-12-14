import React, { useState } from "react";
import logo from "../assets/daily-wellness-logo.jpg"; // Ensure this path is correct

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailLetterSubscription, setEmailLetterSubscription] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // API payload
    const payload = {
      username,
      email,
      phone,
      password,
      emailLetterSubscription, // Updated field
    };

    try {
      const response = await fetch("https://dailywellness-backend.onrender.com/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Account created successfully!");
        setError("");
        setUsername("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        setEmailLetterSubscription(false); // Reset after successful sign-up
      } else {
        setError(data.message || "Failed to sign up. Please try again.");
        setSuccess("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#2D3748] flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-6 sm:p-10 rounded-xl shadow-lg relative overflow-hidden">
        {/* Background Circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#FF1B6B] rounded-full opacity-10"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#FFA726] rounded-full opacity-10"></div>

        {/* Logo Section */}
        <div className="relative text-center">
          <img
            src={logo}
            alt="Daily Wellness Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 object-contain"
          />
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <a
              href="/signin"
              className="font-medium text-[#4267B2] hover:text-[#365899]"
            >
              sign in to your account
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
                autoComplete="username"
                required
                className="appearance-none rounded-md block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4267B2] focus:border-[#4267B2] sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4267B2] focus:border-[#4267B2] sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none rounded-md block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4267B2] focus:border-[#4267B2] sm:text-sm"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                autoComplete="new-password"
                required
                className="appearance-none rounded-md block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4267B2] focus:border-[#4267B2] sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-md block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#4267B2] focus:border-[#4267B2] sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-center mt-4">
            <input
              id="subscribe"
              name="subscribe"
              type="checkbox"
              className="h-4 w-4 text-[#4267B2] focus:ring-[#4267B2] border-gray-300 rounded"
              checked={emailLetterSubscription}
              onChange={(e) => setEmailLetterSubscription(e.target.checked)}
            />
            <label
              htmlFor="subscribe"
              className="ml-2 block text-sm text-gray-900"
            >
              Subscribe to our Daily Wellness newsletter to stay updated
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-full text-white bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
