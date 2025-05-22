'use client';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: 'Dr Rohini Grover',
    qualification: 'Eye specialist',
    image: '/doctor1.jpg', // Replace with actual image paths
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
    <section className="py-16 bg-gradient-to-r from-sky-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
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
                className="w-50 h-50 object-cover rounded-full mx-auto mb-4 border-4 border-sky-100"
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


