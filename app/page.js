'use client'
import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Animated Light Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-200 via-white to-pink-100 opacity-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.6)_0%,rgba(173,216,230,0.2)_70%)]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative w-full">
        <Header />
        <Slider />
        <Hero />
        <Services />
        <About />
        <Footer />
      </div>
    </div>
  );
}
