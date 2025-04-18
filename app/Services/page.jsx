"use client";

import React, { useState } from "react";
import FlipCard from "@/components/Flipper/Flipper";
import DetailCard from "@/components/Flipper/detailcard"; // This is the popup component

const services = [
  { title: "General Checkup", description: "Routine health checkups to keep you in good shape.", image: "/cornea.jpg" },
  { title: "Pediatrics", description: "Specialized care for infants and children.", image: "/cataract.jpg" },
  { title: "Emergency Services", description: "24/7 emergency care with advanced facilities.", image: "/glaucoma.jpg" },
  { title: "Laser Treatment", description: "Advanced laser eye treatments.", image: "/laser.jpg" },
  { title: "Retina Care", description: "Expert retina disease management.", image: "/retina.jpg" },
  { title: "Squint Correction", description: "Specialized care for squint-related issues.", image: "/squint.jpg" },
  { title: "Glaucoma Treatment", description: "Advanced treatment for glaucoma.", image: "/glaucoma.jpg" },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-16 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-sky-700">
          Our Services
        </h2>

        <div className="flex space-x-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:overflow-visible no-scrollbar">
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0 w-64 sm:w-auto px-2">
              <FlipCard
                title={service.title}
                image={service.image}
                onClick={() => setSelectedService(service)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <DetailCard
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;
