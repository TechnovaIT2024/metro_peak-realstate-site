"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import client1 from "../../../../public/review1.jpg";
import client2 from "../../../../public/review2.jpg";
import client3 from "../../../../public/review3.jpg";

import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// Review data
const reviews = [
  {
    id: 1,
    name: "Marshell Jack",
    role: "Property Owner",
    image: client1,
    rating: 5,
    review:
      "I felt at home here. Everything was comfortable and well-arranged, and the staff was incredibly helpful throughout my stay.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    image: client2,
    rating: 5,
    review:
      "Amazing experience! The environment was clean, peaceful, and perfectly maintained. I will definitely recommend this place to my colleagues.",
  },
  {
    id: 3,
    name: "David Smith",
    role: "Traveler",
    image: client3,
    rating: 5,
    review:
      "I felt at home here. Everything was comfortable and well-arranged, and the staff was incredibly helpful throughout my stay.",
  },
];

const Review = () => {
  return (
    <div>
      <div className="text-end mt-[50px] mb-[25px]">
        <h2 className="md:text-[35px] text-[28px] font-bold uppercase">
          Our Client's{" "}
          <span className="text-[#FF4136] border-b-2 pb-[0.5px]">Opinion</span>
        </h2>
      </div>

      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 1 }, // Small tablets
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 2 }, // Desktops
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((client) => (
            <SwiperSlide
              key={client.id}
              className="bg-[#f9f6f5] rounded-2xl p-6 flex flex-col justify-between group border border-[#bebebe] hover:border-[#FF4136]"
            >
              {/* Quote icon */}
              <RiDoubleQuotesR className="text-[#838383] group-hover:text-[#FF4136] text-4xl mb-2" />

              {/* Review text */}
              <p className="text-gray-700 italic mb-4">"{client.review}"</p>

              {/* Client info */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="font-bold text-lg">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.role}</p>
                  <div className="flex text-yellow-500 mt-1">
                    {Array.from({ length: client.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={100}
                  height={50}
                  className="rounded-full object-cover border-2 border-[#FF4136]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
