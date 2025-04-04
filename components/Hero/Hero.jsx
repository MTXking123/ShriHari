import React from 'react';

const Hero = () => {
  return (
    <section className="bg-violet-600 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Your Health, Our Priority</h1>
      <p className="mt-4">Providing quality healthcare with compassion and care.</p>
      <a href="#contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-200">
        Get Appointment
      </a>
    </section>
  );
};

export default Hero;
