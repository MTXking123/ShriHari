'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const doctors = [
  {
    name: 'Dr Rohini Grover',
    qualification: 'Eye specialist',
    image: '/doctor1.jpg',
  },
  {
    name: 'Dr Shilpa Taneja Mittel',
    qualification: 'Eye specialist',
    image: '/doctor2.jpg',
  },
  {
    name: 'Dr. Vivek Sharma',
    qualification: 'Eye specialist',
    image: '/doctor3.jpg',
  },
];

const features = [
  {
    title: 'Tailored to Your Vision',
    desc: 'Fully customizable design, giving you complete control over how your app looks and functions.',
  },
  {
    title: 'Drag-and-Drop Interface',
    desc: 'Simple, intuitive drag-and-drop components to create and design your app without any coding knowledge.',
  },
  {
    title: 'No Code Required',
    desc: 'Build and automate your app easily without the need for programming, making app creation accessible to everyone.',
  },
  {
    title: 'Scalable Solutions',
    desc: 'Designed to scale with your business, ensuring that your app grows and adapts as your needs evolve.',
  },
  {
    title: 'Seamless Integrations',
    desc: 'Easily integrate with third-party apps and services to enhance functionality without complications.',
  },
];

export default function About() {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      {/* 👨‍⚕️ Dr. Vivek Sharma Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-24 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-md mx-auto">
            <Image
              src="/doctorvivek.jpg"
              alt="Dr. Vivek Sharma"
              width={500}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
            About Dr. Vivek Sharma
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Dr. Vivek Sharma, the founder and CEO of Shrihari Eye Care & Laser Centre, is a visionary leader and expert eye specialist. With a mission to restore vision and improve lives, he has successfully treated over <strong>40,000+</strong> patients through cutting-edge eye care solutions.
          </p>
          <div className="bg-sky-50 p-4 rounded-lg shadow text-sm italic text-gray-700 mb-4">
            “We believe that everyone deserves to see the world clearly. My goal is to make that possible with compassion and the latest in eye care technology.” — <strong>Dr. Vivek Sharma</strong>
          </div>
        </motion.div>
      </div>

      {/* 🌈 Background Animations */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-50 via-white to-pink-50 opacity-50 z-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.5)_0%,rgba(173,216,230,0.2)_70%)] z-0"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* 🌟 Our Vision */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-24 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We aim to revolutionize healthcare with accessible and personalized services,
          empowering every individual to lead a healthier and better life.
        </motion.p>
      </div>

      {/* 🎯 Why Choose Us */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-24 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why{' '}
          <span className="bg-gradient-to-r from-sky-700  bg-clip-text text-transparent">
            Choose
          </span>{' '}
          Us?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Unlock the Future of App Building
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-sky-700 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 👨‍⚕️ Meet Our Specialists */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-sky-700 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Specialists
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4 border-4 border-sky-100"
              />
              <h3 className="text-xl font-semibold text-sky-800">{doc.name}</h3>
              <p className="text-gray-600 mt-1">{doc.qualification}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
