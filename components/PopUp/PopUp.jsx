"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "../Contact/Contact"; // adjust path if needed

export default function ContactPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show immediately on page load
    setShow(true);

    // Show every 15 seconds

    return () => clearInterval();
  }, []);

  const handleClose = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-[2.5%] left-[50%] translate-x-[-50%]  z-50 flex items-center justify-center w-full"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white p-6 rounded-2xl shadow-2xl max-w-xl w-full"
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <Contact />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
