"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutDrVivekMinimal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white text-gray-900 px-6 md:px-20 py-16 flex flex-col lg:flex-row items-center justify-between"
    >
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <p className="uppercase tracking-widest text-sm text-gray-400">
          — We Are
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Shrihari Eye Care & Laser Centre
        </h1>
        <p className="text-lg text-gray-600">
          Led by <strong>Dr. Vivek Sharma</strong>, a pioneering eye specialist
          delivering advanced eye surgeries, compassionate consultations, and
          trusted vision care to over <strong>40,000+ patients</strong>.
        </p>

        <div className="flex items-center gap-3 mt-6">
          <Link href="/about#doctor-vivek">
            <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition font-medium text-sm">
              Read More <ArrowRight size={16} />
            </button>
          </Link>
          <p className="text-sm text-gray-500">
            We proudly serve with care and trust.
          </p>
        </div>
      </div>

      {/* Right Image and Details */}
      <div className="relative mt-12 lg:mt-0 w-full max-w-sm lg:max-w-md">
        {/* Geometric Background Shapes */}
        <div className="absolute -left-6 -top-6 w-24 h-24 bg-purple-200 rounded-full z-0" />
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-teal-100 rounded-full z-0" />
        <div className="absolute left-12 top-16 w-24 h-24 bg-yellow-100 rounded-full z-0" />

        {/* Doctor Image */}
        <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/doctorvivek.jpg"
            alt="Dr. Vivek Sharma"
            width={400}
            height={500}
            className="object-cover"
          />
        </div>

        {/* OUR EXPERTISE */}
        <div className="absolute bottom-4 right-4 bg-white px-4 py-3 rounded-lg shadow z-20 text-sm text-right">
          <p className="text-xs text-gray-400">OUR EXPERTISE</p>
          <p className="font-medium">LASIK / Cataract / Cornea</p>
        </div>
      </div>
    </motion.div>
  );
}
