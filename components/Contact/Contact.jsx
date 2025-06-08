'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment submitted:', formData);
    alert('Appointment booked successfully!');
  };

  return (
    <AnimatePresence>



        {/* Contact Form */}
        <motion.div
          className="relative z-10 max-w-lg w-full bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/60"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">
            Book an Appointment
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 outline-none shadow-md"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.01 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 outline-none shadow-md"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.01 }}
            />
            <motion.input
              type="date"
              name="date"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 outline-none shadow-md"
              value={formData.date}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.01 }}
            />
            <motion.input
              type="text"
              name="location"
              placeholder="Preferred Location"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-400 outline-none shadow-md"
              value={formData.location}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.01 }}
            />
            <motion.button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 rounded-lg shadow-lg transition duration-200 hover:shadow-xl"
              whileTap={{ scale: 0.97 }}
            >
              Book Now
            </motion.button>
          </form>
        </motion.div>
      
    </AnimatePresence>
  );
}



