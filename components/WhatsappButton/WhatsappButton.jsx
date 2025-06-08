// components/WhatsAppButton.js
import Image from "next/image";
import { FiPhone, FiMapPin } from "react-icons/fi";

const WhatsAppButton = () => {
  const phoneNumber = "7428377997";
  const googleMapsUrl = "https://maps.app.goo.gl/XcG65tqzWr2G8Bgr6"; // Replace with your actual location

  return (
    <div className="flex flex-col items-end gap-3">
      {/* Location Button */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <FiMapPin size={24} />
      </a>

      {/* Phone Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <FiPhone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/whatsapp-icon.webp"
          alt="WhatsApp"
          width={50}
          height={50}
          className="rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
