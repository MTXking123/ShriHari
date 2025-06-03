'use client';
import { motion } from 'framer-motion';

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

export default function About() {
  return (
    <section className="py-16 relative overflow-hidden">
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
          {[
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
          ].map((item, index) => (
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
