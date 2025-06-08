"use client"; // if you're using App Router

import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsappButton/WhatsappButton";

export default function OurBranches() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        {/* ✅ WhatsApp Button positioned absolutely in bottom-right of carousel */}
        <div className="absolute  right-6 z-50">
          <WhatsAppButton />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Branches</h1>
        <p className="text-gray-600 text-lg mb-6">
          Thank you for visiting{" "}
          <span className="font-semibold">
            Shri Hari Eye Care and Laser Centre
          </span>
          . Our "Our Branches" page is currently under construction as we work
          to provide you with the most accurate and up-to-date information.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          In the meantime, if you would like to know more about our various
          centres or need assistance locating the nearest branch, please feel
          free to contact us directly.
        </p>
        <p className="text-gray-700 font-medium mb-8">
          We’re here to help you with all your eye care needs.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition text-sm font-medium">
              <FiPhone className="text-white" />
              Contact Us
            </button>
          </Link>
          <a
            href="https://maps.app.goo.gl/XcG65tqzWr2G8Bgr6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 border border-gray-400 text-gray-800 rounded-full hover:bg-gray-100 transition text-sm font-medium"
          >
            <FiMapPin />
            View on Map
          </a>
        </div>
      </motion.div>
    </main>
  );
}
