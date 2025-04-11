'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutDoctor = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 overflow-hidden bg-white">

      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-300 via-purple-200 to-pink-200 opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_70%)]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Doctor Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 w-full lg:w-1/3 flex justify-center"
      >
        <img 
          src="/doctorvivek.jpg" 
          alt="Dr. John Doe" 
          className="rounded-lg shadow-lg w-72 h-72 object-cover border-4 border-sky-200"
        />
      </motion.div>

      {/* Doctor Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 w-full lg:w-2/3 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-white/60 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-sky-700">Dr. Vivek Sharma</h2>
        <p className="text-lg text-gray-600 mt-2">Ophthalmologist | 15+ Years of Experience</p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Dr. John Doe is a highly accomplished <strong>cardiologist</strong> known for his groundbreaking work in <strong>heart disease research</strong>. 
          With over <strong>20 years of experience</strong>, he has dedicated his career to providing <strong>exceptional patient care</strong> 
          and pioneering new treatments in the field of cardiology.
        </p>

        

        <p className="mt-6 text-gray-700 leading-relaxed">
          Dr. Doe believes in a <strong>patient-first approach</strong>, combining advanced medical techniques with <strong>compassionate care</strong>.
          His mission is to <strong>save lives</strong> and improve heart health for people worldwide.
        </p>
        
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition duration-300">
            Book an Appointment
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutDoctor;
