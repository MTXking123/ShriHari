"use client";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import AnimatedCounter from "../components/Counter/Counter";
import Slider from "../components/Slider/Slider";
import { motion } from "framer-motion";
import AppointmentPopup from "../components/PopUp/PopUp";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import WhatsAppButton from "@/components/WhatsappButton/WhatsappButton";

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [showElement,setShowElement] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
      setShowElement(window.scrollY >= 180)
    }

    window.addEventListener("scroll",handleScroll)
  },[])

  console.log("showElement",showElement)
  return (
    <div className=" relative">
                      {/* ✅ WhatsApp Button positioned absolutely in bottom-right of carousel */}
          <div className={showElement?"sticky top-6 right-0 z-50":"fixed top-[`82px`] right-0 z-50"}>
            <WhatsAppButton />
          </div>
          
    <div className=" relative overflow-hidden bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Background Animations */}
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

      <div className="relative w-full min-h-[100vh]:">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          className="relative"
          viewport={{ once: true, amount: 0.2 }}
        >


          <Slider />
        </motion.div>

        <AnimatedCounter />
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ChooseUs />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Footer />
        </motion.div>
      </div>
      </div>
    </div>
  );
}
