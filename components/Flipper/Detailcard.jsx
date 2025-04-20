"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

const DetailCard = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl sm:max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col sm:flex-row relative p-4 sm:p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 z-10"
        >
          <X size={24} />
        </button>

        {/* Image side */}
        <div className="w-full sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0 sm:pr-4">
          <div className="rounded-xl shadow-lg overflow-hidden w-full max-w-[300px]">
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
          <h3 className="text-2xl font-bold text-sky-700 mb-4">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;


