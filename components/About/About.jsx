'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutDoctor = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center cardColor px-6 py-12">
      {/* Doctor Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/3 flex justify-center"
      >
        <img 
          src="/doctorvivek.jpg" 
          alt="Dr. John Doe" 
          className="rounded-lg shadow-lg w-72 h-72 object-cover border-4 oklch(78.5% 0.115 274.713)"
        />
      </motion.div>

      {/* Doctor's Information */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-2/3 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left"
      >
        <h2 className="text-3xl font-bold text-violet-500">Dr. John Doe, MD</h2>
        <p className="text-lg text-gray-600 mt-2">Renowned Cardiologist | 20+ Years of Experience</p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Dr. John Doe is a highly accomplished **cardiologist** known for his groundbreaking work in **heart disease research**. 
          With over **20 years of experience**, he has dedicated his career to providing **exceptional patient care** 
          and pioneering new treatments in the field of cardiology.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-violet-500">🏆 Achievements & Career Highlights:</h3>
        <ul className="mt-3 text-gray-700 list-disc list-inside space-y-2">
          <li>📖 Published over **50+ research papers** in leading medical journals</li>
          <li>🏥 Performed **10,000+ successful heart surgeries**</li>
          <li>🎓 Professor at **Harvard Medical School**</li>
          <li>🏅 Awarded **"Best Cardiologist of the Year"** (2022)</li>
          <li>📡 Featured on **CNN, BBC, and Forbes Health**</li>
        </ul>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Dr. Doe believes in a **patient-first approach**, combining advanced medical techniques with **compassionate care**.
          His mission is to **save lives** and improve heart health for people worldwide.
        </p>
        <Link href="/contact">
        <button className="mt-6 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 transition duration-300 cursor-pointer">
          Book an Appointment
        </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutDoctor;

