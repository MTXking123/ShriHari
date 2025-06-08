"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import WhatsAppButton from "../WhatsappButton/WhatsappButton";
import AppointmentPopup from "../../components/PopUp/PopUp";

const images = ["./slide1.png", "./slide2.png", "./slide3.png"];

const FuturisticCarousel = () => {
  return (
    <div className="relative flex justify-center items-center w-full bg-black px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <Swiper
          effect="fade"
          grabCursor
          centeredSlides
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          fadeEffect={{ crossFade: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          className="w-full mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="relative w-full h-[60vh] md:h-[75vh]">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next h-9 w-9 text-white"></div>
          <div className="swiper-button-prev h-9 w-9 text-white"></div>
        </Swiper>
      </motion.div>

      {/* ✅ WhatsApp Button positioned absolutely in bottom-right of carousel */}
      <div className="absolute bottom-6 right-6 z-50">
        <WhatsAppButton />
      </div>
      <AppointmentPopup />
    </div>
  );
};

export default FuturisticCarousel;
