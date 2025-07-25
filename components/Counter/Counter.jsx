"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 17, suffix: "+", label: "Years of Experience" },
  { number: 60000, suffix: "+", label: "Satisfied Patients" },
  { number: 53629, suffix: "+", label: "Surgeries Delivered" },
  { number: 5, suffix: "", label: "Number of Centre" },
];

function CounterItem({ number, suffix, label, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = number / (duration * 60);
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= number) {
          clearInterval(interval);
          return number;
        }
        return prev + increment;
      });
    }, 1000 / 60); // 60fps
    return () => clearInterval(interval);
  }, [number, duration]);

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-sky-800 to-sky-400  bg-clip-text text-transparent ">
      <motion.span
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Math.floor(count).toLocaleString()}
        {suffix}
      </motion.span>
      <span className="text-lg">{label}</span>
    </div>
  );
}

export default function AnimatedCounterGroup() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center py-30">
      {stats.map((stat, index) => (
        <CounterItem
          key={index}
          number={stat.number}
          suffix={stat.suffix}
          label={stat.label}
        />
      ))}
    </div>
  );
}
