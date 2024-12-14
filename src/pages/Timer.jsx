import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Timer() {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date("January 1, 2025 00:00:00").getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown-container bg-white text-center w-full flex flex-col justify-center items-center py-16 px-6 space-y-16">
      {/* Launching In Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-black text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
      >
        Launching In...
      </motion.h1>

      {/* Timer Section */}
      <div className="countdown-grid flex flex-wrap justify-center gap-12">
        {countdown && (
          <>
            <div className="countdown-item text-center space-y-2">
              <span className="text-black text-5xl sm:text-6xl lg:text-7xl font-bold">{countdown.days}</span>
              <div className="text-gray-600 text-md sm:text-lg">Days</div>
            </div>
            <span className="text-black text-3xl sm:text-4xl md:text-5xl font-bold flex items-center">:</span>
            <div className="countdown-item text-center space-y-2">
              <span className="text-black text-5xl sm:text-6xl lg:text-7xl font-bold">{countdown.hours}</span>
              <div className="text-gray-600 text-md sm:text-lg">Hours</div>
            </div>
            <span className="text-black text-3xl sm:text-4xl md:text-5xl font-bold flex items-center">:</span>
            <div className="countdown-item text-center space-y-2">
              <span className="text-black text-5xl sm:text-6xl lg:text-7xl font-bold">{countdown.minutes}</span>
              <div className="text-gray-600 text-md sm:text-lg">Minutes</div>
            </div>
            <span className="text-black text-3xl sm:text-4xl md:text-5xl font-bold flex items-center">:</span>
            <div className="countdown-item text-center space-y-2">
              <span className="text-black text-5xl sm:text-6xl lg:text-7xl font-bold">{countdown.seconds}</span>
              <div className="text-gray-600 text-md sm:text-lg">Seconds</div>
            </div>
          </>
        )}
      </div>

      {/* Newsletter Signup Form */}
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Sign Up to Our Newsletter</h2>
        <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl">
          Receive updates, tips, and exclusive offers straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 w-full px-4 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 w-full px-4 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Timer;
