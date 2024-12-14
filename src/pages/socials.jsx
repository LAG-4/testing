import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Socials = () => {
  useEffect(() => {
    // Load Instagram embed script
    const instagramScript = document.createElement('script');
    instagramScript.src = '//www.instagram.com/embed.js';
    instagramScript.async = true;
    instagramScript.defer = true;
    document.body.appendChild(instagramScript);

    instagramScript.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    // Load YouTube Subscribe script
    const youtubeScript = document.createElement('script');
    youtubeScript.src = 'https://apis.google.com/js/platform.js';
    youtubeScript.async = true;
    youtubeScript.defer = true;
    document.body.appendChild(youtubeScript);

    return () => {
      // Cleanup scripts
      document.body.removeChild(instagramScript);
      document.body.removeChild(youtubeScript);
    };
  }, []);

  return (
    <div className="w-full min-h-screen py-20 bg-white px-6">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold text-black text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          hidden: { opacity: 0 },
        }}
      >
        <motion.span
          className="block"
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          Join Our Team To Enjoy DAILYWELLNESS AI Videos
        </motion.span>
        <motion.span
          className="block"
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          & Connect With Our Supportive Community
        </motion.span>
      </motion.h1>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10">
        {/* Instagram Card */}
        <motion.div
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl shadow-lg w-full max-w-md lg:max-w-lg p-6 text-white flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Instagram Header */}
          <h2 className="text-3xl font-bold mb-4 text-center">Follow Us on Instagram</h2>
          <p className="text-lg mb-6 text-center">
            Stay updated with our latest reels, tips, and wellness inspiration!
          </p>

          {/* Instagram Button */}
          <div className="text-center mb-6">
            <button
              onClick={() => window.open('https://www.instagram.com/dailywellnessai/', '_blank')}
              className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Visit @dailywellnessai
            </button>
          </div>

          {/* Embedded Instagram Reel */}
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DDh4ZC4BbO_/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '100%',
              }}
            ></blockquote>
          </div>
        </motion.div>

        {/* YouTube Card */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl shadow-lg w-full max-w-md lg:max-w-lg p-6 text-white flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* YouTube Header */}
          <h2 className="text-3xl font-bold mb-4 text-center">Subscribe to Us on YouTube</h2>
          <p className="text-lg mb-6 text-center">
            Stay connected and explore our latest videos and tutorials!
          </p>

          {/* Embedded YouTube Subscribe Button */}
          <div className="flex justify-center mb-6">
            <div
              className="g-ytsubscribe"
              data-channelid="UCX6OQ3DkcsbYNE6H8uQQuVA" // Replace with your desired channel ID
              data-layout="full"
              data-theme="dark"
              data-count="default"
            ></div>
          </div>

          {/* Embedded YouTube Video */}
          <div className="flex justify-center">
            <iframe
              className="w-full rounded-lg shadow-md"
              style={{ height: '350px' }}
              src="https://www.youtube.com/embed/a3ICNMQW7Ok"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Socials;
