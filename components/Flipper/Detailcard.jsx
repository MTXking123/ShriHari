"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

const DetailCard = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col sm:flex-row overflow-hidden relative p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>

        {/* Image side with margin and shadow */}
        <div className="sm:w-1/2 flex justify-center items-center p-4">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="object-cover"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="p-6 sm:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-sky-700 mb-4">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

