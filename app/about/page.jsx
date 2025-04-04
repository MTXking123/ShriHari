'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const cards = [
  { title: "About Me", info: "A passionate developer who loves building amazing applications." },
  { title: "Skills", info: "Proficient in JavaScript, React, Tailwind, and more." },
  { title: "Experience", info: "3+ years in web development, working with startups and enterprises." },
  { title: "Projects", info: "Developed multiple web applications with modern tech stacks." },
  { title: "Contact", info: "Feel free to reach out via email or social media." },
];

export default function AboutCards() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX / window.innerWidth - 0.5);
      setMouseY(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black min-h-screen flex flex-col items-center justify-center p-10">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0)_70%)]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating Cards */}
      <div className="flex flex-wrap justify-center gap-6 relative">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative w-64 h-40 bg-gray-900 rounded-2xl shadow-xl cursor-pointer overflow-hidden border border-gray-700 backdrop-blur-md flex items-center justify-center"
            whileHover={{ width: 300, height: 200 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gray-700 text-white text-xl font-semibold"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0, display: "none" }}
            >
              {card.title}
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-4 text-white text-center text-sm opacity-0"
              initial={{ opacity: 0, display: "none" }}
              whileHover={{ opacity: 1, display: "flex" }}
            >
              {card.info}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
