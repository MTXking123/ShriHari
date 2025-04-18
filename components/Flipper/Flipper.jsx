"use client";

import React from "react";
import Image from "next/image";

const FlipCard = ({ title, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-xl rounded-2xl overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default FlipCard;
