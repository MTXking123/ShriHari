import React from "react";
import FlipCard from "../Flipper/Flipper"; // Import the FlipCard component

const services = [
  {
    title: "General Checkup",
    description: "Routine health checkups to keep you in good shape.",
    image: "/cornea.jpg", // Add your image path here
  },
  {
    title: "Pediatrics",
    description: "Specialized care for infants and children.",
    image: "/cataract.jpg",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency care with advanced facilities.",
    image: "/glaucoma.jpg",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency care with advanced facilities.",
    image: "/laser.jpg",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency care with advanced facilities.",
    image: "/retina.jpg",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency care with advanced facilities.",
    image: "/squint.jpg",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency care with advanced facilities.",
    image: "/glaucoma.jpg",
  },
  {
    title: "Emergency Services",
    description: "24/7 emergency care with advanced facilities.",
    image: "/glaucoma.jpg",
  },

];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <FlipCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

