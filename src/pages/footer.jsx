import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/500x500.png'; // Update with the actual path to your logo

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full">
      {/* Top Section */}
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <img src={logo} alt="Footer Logo" className="w-16 h-16" />
          <p className="text-sm max-w-xs">
            We offer products and services related to well-being and fitness with a touch of AI.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center">
          <a href="/wellness" className="hover:text-gray-400 whitespace-nowrap">
            Chat with AI Guru
          </a>
          <a href="/signin" className="hover:text-gray-400 whitespace-nowrap">
            Login
          </a>
          <a href="/signup" className="hover:text-gray-400 whitespace-nowrap">
            Signup
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm font-bold">Contact us</p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/dailywellnessai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="https://x.com/aidailywellness"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <h2 lassName="text-gray-400"
>
          © 2024 DailyWellnessAI | Privacy Policy | Terms of Service | Contact@dailywellness.ai
        </h2>
        <div className="flex flex-wrap justify-center space-x-4 mt-2">
          <a href="/terms" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/cookie-policy" className="hover:text-white">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
