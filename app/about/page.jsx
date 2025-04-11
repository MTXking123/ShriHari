'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const cards = [
  { title: 'About Me', info: 'A passionate developer who loves building amazing applications.' },
  { title: 'Skills', info: 'Proficient in JavaScript, React, Tailwind, and more.' },
  { title: 'Experience', info: '3+ years in web development, working with startups and enterprises.' },
  { title: 'Projects', info: 'Developed multiple web applications with modern tech stacks.' },
  { title: 'Contact', info: 'Feel free to reach out via email or social media.' },
];

export default function AboutCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Optional: Add mouse tracking logic here
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative overflow-hidden bg-white min-h-screen flex flex-col items-center justify-center p-10 font-inter"
      >
        {/* Animated Backgrounds */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sky-300 via-purple-200 to-pink-200 opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_70%)]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating Cards */}
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              layout
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative w-64 bg-white/80 text-gray-900 rounded-2xl shadow-xl cursor-pointer overflow-hidden border border-gray-300 backdrop-blur-lg"
              animate={{ height: hoveredIndex === index ? 'auto' : '10rem' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <AnimatePresence initial={false} mode="wait">
                {hoveredIndex !== index ? (
                  <motion.div
                    key="title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center h-40 text-xl font-semibold p-4 text-center"
                  >
                    {card.title}
                  </motion.div>
                ) : (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 text-sm text-center"
                  >
                    {card.info}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


