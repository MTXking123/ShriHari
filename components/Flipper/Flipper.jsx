'use client';

import { motion } from "framer-motion";
import { useState } from "react";

const FlipCard = ({ image, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full sm:w-64 h-80 perspective-1000"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side with Image & Title */}
        <div className="absolute w-full h-full  text-black flex flex-col items-center justify-center rounded-xl backface-hidden shadow-lg">
          <img src={image} alt={title} className="w-full h-full object-fill rounded-t-xl" />
          <h3 className="text-lg font-semibold p-4">{title}</h3>
        </div>

        {/* Back Side with Description */}
        <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-xl rotate-y-180 backface-hidden p-4">
          <p className="text-center">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
