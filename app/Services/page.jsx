"use client";

import React, { useState } from "react";
import FlipCard from "@/components/Flipper/Flipper";
import DetailCard from "@/components/Flipper/Detailcard";

const services = [
  {
    title: "Cataract Services",
    description: "Advanced cataract surgeries including robotic options.",
    image: "/cataract.jpg",
    details: ["MICS Foldable ICL", "FLACS (ROBOTIC) Foldable ICL"],
  },
  {
    title: "Refractive Services",
    description: "Vision correction procedures with cutting-edge technology.",
    image: "/laser.jpg",
    details: [
      "LASIK", "EPI-LASIK", "PRK", "CONTURA VISION",
      "SILK", "SMILE", "ICL (Implantable Collamer Lens)",
    ],
  },
  {
    title: "Cornea Services",
    description: "Specialized treatments for corneal conditions.",
    image: "/cornea.jpg",
    details: [
      "Collagen Cross Linking (C3R)",
      "Scleral Contact Lens",
      "Corneal Transplant (PK, DSEK, DALK)",
    ],
  },
  {
    title: "Retina Services",
    description: "Comprehensive diagnostic and therapeutic retina care.",
    image: "/retina.jpg",
    details: ["Diagnostic & Therapeutic Retina Services"],
  },
  {
    title: "Glaucoma Services",
    description: "Management and treatment for glaucoma.",
    image: "/glaucoma.jpg",
    details: [],
  },
  {
    title: "Pediatric Ophthalmology",
    description: "Eye care for children and infants.",
    image: "/pediatric.jpg",
    details: ["Myopia Clinic", "Squint Clinic"],
  },
  {
    title: "Oculoplasty Services",
    description: "Cosmetic and functional eye plastic surgeries.",
    image: "/oculoplasty.jpg",
    details: [
      "Ptosis",
      "Blepharoplasty",
      "Lacrimal Gland & Lacrimal Duct Diseases",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-16 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-sky-700">
          Our Specialities
        </h2>

        <div className="flex space-x-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:overflow-visible no-scrollbar">
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
