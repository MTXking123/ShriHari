import React from 'react';
import './Parallax.css'; // Import custom CSS for parallax if needed

const ParallaxHero = () => {
  return (
    <section className="parallax-hero text-white text-center py-40 px-4">
      <div className=" bg-opacity-50 p-8 rounded-xl inline-block">
        <h1 className="text-5xl font-bold">Your Health, Our Priority</h1>
        <p className="mt-4 text-lg">Providing quality healthcare with compassion and care.</p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-sky-700 px-6 py-3 rounded-lg shadow hover:bg-gray-200"
        >
          Get Appointment
        </a>
      </div>
    </section>
  );
};

export default ParallaxHero;

