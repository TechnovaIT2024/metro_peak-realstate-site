"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

import demo1 from "../../../../public/demo1.jpg";
import demo2 from "../../../../public/demo2.jpg";
import demo3 from "../../../../public/demo3.jpg";
import demo4 from "../../../../public/demo4.jpg";
import demo5 from "../../../../public/demo5.jpg";

const slides = [
  {
    image: demo1,
    title: "Luxury Apartment",
    location: "Downtown City",
    price: "$250,000",
  },
  {
    image: demo2,
    title: "Modern Villa",
    location: "Beachside",
    price: "$450,000",
  },
  {
    image: demo3,
    title: "Family House",
    location: "Suburbs",
    price: "$180,000",
  },
  {
    image: demo4,
    title: "Penthouse Suite",
    location: "Skyline View",
    price: "$600,000",
  },
  {
    image: demo5,
    title: "Cozy Studio",
    location: "City Center",
    price: "$120,000",
  },
];

const SoldProperties = () => {
  return (
    <div>
      <div className="text-center mt-[50px] mb-[40px] md:mx-[40px] mx-[25px]">
        <h2 className="md:text-[35px] text-[28px] font-bold uppercase">
          Sold{" "}
          <span className="text-[#FF4136] border-b-2 pb-[0.5px]">
            Property's
          </span>
        </h2>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[400px] w-full rounded-xl overflow-hidden group"
              style={{
                backgroundImage: `url(${slide.image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Content */}
              <div
                className={`
                absolute bottom-0 p-4 z-10 transition-all duration-500
                bg-transparent text-white
                group-hover:bg-[#FF4136] 
                swiper-slide-active:bg-[#FF4136] swiper-slide-active:text-white
              `}
              >
                <h3 className="text-xl font-bold">{slide.title}</h3>
                <p className="text-sm">{slide.location}</p>
                <p className="text-lg font-semibold">{slide.price}</p>
              </div>

              {/* Zoom effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 swiper-slide-active:scale-110"
                style={{
                  backgroundImage: `url(${slide.image.src})`,
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SoldProperties;
