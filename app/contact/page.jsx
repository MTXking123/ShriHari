"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import WhatsAppButton from "@/components/WhatsappButton/WhatsappButton";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <AnimatePresence>
      <motion.div
        key="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-sky-100 to-purple-100"
      >
        {/* ✅ WhatsApp Button positioned absolutely in bottom-right of carousel */}
        <div className="absolute  right-6 z-50">
          <WhatsAppButton />
        </div>
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-xl">
          {/* Left Side Info */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-sky-800">Contact Us</h2>
            <p className="text-gray-700">
              Feel free to reach out with any questions, concerns, or to book
              your appointment.
            </p>

            <div className="space-y-2">
              <p className="text-gray-800">
                <strong>Email:</strong> shriharieyecentre@gmail.com
              </p>
              <p className="text-gray-800">
                <strong>Phone 1:</strong> 7428377997
              </p>
              <p className="text-gray-800">
                <strong>Phone 2:</strong> 7428383099
              </p>
            </div>

            <div className="pt-6 border-t">
              <h4 className="text-lg font-semibold">Customer Support</h4>
              <p className="text-gray-600">
                Available 24/7 for your assistance.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-white p-6 rounded-xl shadow-md space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-1/2 p-3 rounded-lg border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-1/2 p-3 rounded-lg border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-sky-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-sky-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              maxLength="120"
              className="w-full p-3 rounded-lg border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              By contacting us, you agree to our{" "}
              <a href="#" className="underline text-sky-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-sky-600">
                Privacy Policy
              </a>
              .
            </p>
          </motion.form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
