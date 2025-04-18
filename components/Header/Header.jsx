'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Header changes when scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
    initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}  
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <img src="../logo.png" alt="Logo" className="h-12 w-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link href="/Services" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <Link href="/" className="block px-6 py-3 text-gray-600 hover:bg-blue-100">Home</Link>
          <Link href="/#services" className="block px-6 py-3 text-gray-600 hover:bg-blue-100">Services</Link>
          <Link href="/about" className="block px-6 py-3 text-gray-600 hover:bg-blue-100">About</Link>
          <Link href="/contact" className="block px-6 py-3 text-gray-600 hover:bg-blue-100">Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Header;
