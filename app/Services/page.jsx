"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cataract Services",
    description: "Advanced cataract surgeries including robotic options.",
    image: "/cataract.png",
    details: ["MICS Foldable ICL", "FLACS (ROBOTIC) Foldable ICL"],
  },
  {
    title: "Refractive Services",
    description: "Vision correction procedures with cutting-edge technology.",
    image: "/laser.png",
    details: [
      "LASIK", "EPI-LASIK", "PRK", "CONTURA VISION",
      "SILK", "SMILE", "ICL (Implantable Collamer Lens)",
    ],
  },
  {
    title: "Cornea Services",
    description: "Specialized treatments for corneal conditions.",
    image: "/cornea.png",
    details: [
      "Collagen Cross Linking (C3R)",
      "Scleral Contact Lens",
      "Corneal Transplant (PK, DSEK, DALK)",
    ],
  },
  {
    title: "Retina Services",
    description: "Comprehensive diagnostic and therapeutic retina care.",
    image: "/retina.png",
    details: ["Diagnostic & Therapeutic Retina Services"],
  },
  {
    title: "Glaucoma Services",
    description: "Management and treatment for glaucoma.",
    image: "/glaucoma.png",
    details: [],
  },
  {
    title: "Pediatric Ophthalmology",
    description: "Eye care for children and infants.",
    image: "/pediatric.png",
    details: ["Myopia Clinic", "Squint Clinic"],
  },
  {
    title: "Oculoplasty Services",
    description: "Cosmetic and functional eye plastic surgeries.",
    image: "/oculoplasty.png",
    details: [
      "Ptosis",
      "Blepharoplasty",
      "Lacrimal Gland & Lacrimal Duct Diseases",
    ],
  },
];

const Services = () => {
const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);


  return (
 <section id="services" className="py-16 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* 🌈 Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-200 via-white to-pink-100 opacity-50 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.6)_0%,rgba(173,216,230,0.2)_70%)] z-0"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* 🌟 Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-sky-700 mb-12">Our Specialities</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isActive = selectedServiceIndex === index;
            const isBlurred = selectedServiceIndex !== null && !isActive;

            return (
              <div
                key={index}
                className={`relative transition-all duration-300 transform bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center
                  ${isActive ? "row-span-2 z-10" : ""}
                  ${isBlurred ? "blur-sm opacity-50 pointer-events-none" : ""}
                `}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-sky-700 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {isActive && (
                  <div className="text-left w-full mt-2">
                    {service.details.length > 0 ? (
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {service.details.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">No additional details.</p>
                    )}
                  </div>
                )}

                <button
                  className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-full text-sm hover:bg-sky-700 transition"
                  onClick={() =>
                    isActive ? setSelectedServiceIndex(null) : setSelectedServiceIndex(index)
                  }
                >
                  {isActive ? "Close" : "More"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
