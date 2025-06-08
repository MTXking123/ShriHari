"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 }
  })
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
};

const servicesList = [
  {
    category: "Cataract Services",
    links: ["MICS Foldable ICL", "FLACS(ROBOTIC) Foldable ICL"]
  },
  {
    category: "Referactive Services",
    links: [
      "LASIK | EPI-LASIK | PRK",
      "CONTURA VISION",
      "SILK | SMILE",
      "ICL (Implantable Collamer Lens)"
    ]
  },
  {
    category: "CORNEA SERVICES",
    links: [
      "Collagen Cross Linking (C3R)",
      "Scleral Contact Lens",
      "Corneal Transplant (PK, DSEK, DALK)"
    ]
  },
  {
    category: "Retina Services",
    links: ["Diagnostic & Therapeutic"]
  },
  {
    category: "Glaucoma Services",
    links: []
  },
  {
    category: "Paldiatric Opthalmology",
    links: ["Myopia clinic", "Squint clinic"]
  },
  {
    category: "Oculoplasty Services",
    links: ["Ptosis", "Blepheroplasty", "Laerimal gland & Laerimal duet diseases"]
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.img
          src="../logo.png"
          alt="Logo"
          className="h-12 w-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        />

        <div className="hidden md:flex flex-grow justify-center space-x-10 items-center text-lg">
          {[{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }, { name: "Our Branches", href: "/OurBranches" }].map((link, i) => (
            <motion.div key={link.href} custom={i} variants={linkVariants} initial="hidden" animate="visible">
              <Link
                href={link.href}
                className="text-gray-700 hover:text-sky-700 transition duration-300 font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <Link
              href="/Services"
              onClick={() => setDropdownOpen(false)}
              className="text-gray-700 hover:text-sky-700 transition duration-300 font-medium"
            >
              Services
            </Link>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white border rounded-lg shadow-lg w-[300px] z-50 max-h-80 overflow-y-auto">
              {servicesList.map((service) => (
                <div key={service.category} className="border-b last:border-b-0 px-4 py-2">
                  <p className="font-semibold text-sky-700">{service.category}</p>
                  <ul className="pl-4 mt-1 space-y-1">
                    {service.links.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={`/Services/${sub.toLowerCase().replace(/\s|\|/g, "-")}`}
                          className="text-gray-600 hover:text-blue-600 text-sm"
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            {[{ name: "Home", href: "/" }, { name: "Services", href: "/Services" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" },{ name: "Our Branches", href: "/Our" }].map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={link.href}
                  className="block px-6 py-3 text-gray-600 hover:bg-blue-100 transition-colors text-lg font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
