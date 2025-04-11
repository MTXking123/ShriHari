'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const images = [
  './slide1.png',
  './slide2.png',
  './slide3.png',
  './slide4.png',
  './slide5.png'
];

const FuturisticCarousel = () => {
  return (
    <div className="relative flex justify-center items-center w-full bg-black px-0 pt-16"> 
      {/* pt-16 assumes your navbar is fixed and is h-16 (4rem) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <Swiper
          effect={'fade'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          fadeEffect={{ crossFade: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{ clickable: true }}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          className="w-full mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="relative w-full h-[calc(100vh-4rem)]"> {/* Adjusts for fixed navbar */}
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next h-9 w-9"></div>
          <div className="swiper-button-prev h-9 w-9"></div>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default FuturisticCarousel;

  