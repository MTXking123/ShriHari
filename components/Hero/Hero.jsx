import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const ParallaxHero = () => {
  return (
    <Parallax
      bgImage="/slide5.png"
      strength={500} // higher = more parallax depth
      bgImageAlt="Hero background"
    >
      <section className="h-[80vh] flex items-center justify-center text-white text-center px-4">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-opacity-50 p-8 rounded-xl inline-block"
        >
          <h1 className="text-5xl font-bold">Your Health, Our Priority</h1>
          <p className="mt-4 text-lg">Providing quality healthcare with compassion and care.</p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-white text-sky-700 px-6 py-3 rounded-lg shadow hover:bg-gray-200"
          >
            Get Appointment
          </a>
        </motion.div>
      </section>
    </Parallax>
  );
};

export default ParallaxHero;

