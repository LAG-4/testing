import React from 'react';
import { motion } from 'framer-motion';

const Content = () => {
  const wellnessPoints = [
    {
      title: "Yoga & Ayurveda",
      description: "Experience the ancient practices for holistic wellness.",
      image: "https://images.unsplash.com/photo-1597106647727-7ceaffd1abf7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
    },
    {
      title: "Gym Exercises",
      description: "Stay fit and active with tailored fitness plans.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
    },
    {
      title: "Breathing Practices",
      description: "Enhance your lung capacity and mental clarity.",
      image: "https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
    },
    {
      title: "Meditation & Mental Health",
      description: "Find inner peace and improve your emotional well-being.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", // Placeholder image
    },
  ];

  return (
    <div className="border-neutral-900 pt-40 min-h-screen lg:mb-35 flex items-center justify-center px-4">
      <div className="max-w-6xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6"
          >
            Set Up To Wellness
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight"
          >
            We offer products and services related to fitness and wellness, including yoga, Ayurveda, gym exercises, breathing practices, meditation, and mental health programs.
          </motion.p>
        </div>

        {/* Points Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wellnessPoints.map((point, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center"
            >
              <img
                src={point.image}
                alt={point.title}
                className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                {point.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
