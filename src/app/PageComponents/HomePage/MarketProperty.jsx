import React from "react";
import thumbnail from "../../../../public/video thumbnail.jpg";
import Image from "next/image";

import { MdBusinessCenter } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdReviews } from "react-icons/md";

const MarketProperty = () => {
  return (
    <div
      className="md:flex items-center w-full md:gap-[15px] gap-[5px] bg-cover bg-center bg-no-repeat md:h-[700px] relative bg-fixed"
      style={{
        backgroundImage: "url('/bg image 2.jpg')",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", // inner shadow
      }}
    >
      <div className="w-full md:h-[600px] flex justify-center items-center">
        {/* Circular thumbnail */}
        <div className="relative w-full h-[600px] overflow-hidden shadow-2xl -ms-[15px] rounded-tr-full rounded-br-full">
          <Image
            src={thumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover"
            priority
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex justify-center items-center group">
            <div className="w-[80px] h-[80px] bg-[#FF4136] rounded-full flex justify-center items-center z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-[60px] h-[60px] rounded-[5px]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="w-[100px] h-[100px] bg-[#FF4136] opacity-50 rounded-full flex justify-center items-center absolute animate-ping"></div>
          </div>
        </div>
      </div>

      <div className="w-full px-[30px] md:py-0 py-[30px]">
        {/* title div with cards */}
        <div>
          <h3 className="md:text-[45px] text-[30px] font-bold uppercase text-[#000000]">
            Market Your Property <br />
            with Metro <span className="text-[#FF4136]">Peak</span>
          </h3>
        </div>

        <div className="mt-[25px] grid md:grid-cols-2 gap-[20px]">
          <div className="group border border-[#e4e4e4] py-[30px] -space-y-[5px] flex flex-col justify-center items-center bg-[#F6F2F1] rounded-[8px] shadow-md">
            <div className="p-[8px] bg-[#ffe3e2] rounded-full transform transition-transform duration-500 group-hover:rotate-y-180">
              <MdBusinessCenter className="text-[40px] text-[#FF4136]" />
            </div>
            <div>
              <h3 className="text-[45px] font-bold text-[#272727]">10+</h3>
            </div>
            <div>
              <p className="text-[20px] text-[#272727]">Years of Business</p>
            </div>
          </div>

          <div className="group border border-[#e4e4e4] py-[30px] -space-y-[5px] flex flex-col justify-center items-center bg-[#F6F2F1] rounded-[8px] shadow-md">
            <div className="p-[8px] bg-[#ffe3e2] rounded-full transform transition-transform duration-500 group-hover:rotate-y-180">
              <IoHome className="text-[40px] text-[#FF4136]" />
            </div>
            <div>
              <h3 className="text-[45px] font-bold text-[#272727]">70+</h3>
            </div>
            <div>
              <p className="text-[20px] text-[#272727]">Sold Properties</p>
            </div>
          </div>

          <div className="group border border-[#e4e4e4] py-[30px] -space-y-[5px] flex flex-col justify-center items-center bg-[#F6F2F1] rounded-[8px] shadow-md">
            <div className="p-[8px] bg-[#ffe3e2] rounded-full transform transition-transform duration-500 group-hover:rotate-y-180">
              <MdReviews className="text-[40px] text-[#FF4136]" />
            </div>
            <div>
              <h3 className="text-[45px] font-bold text-[#272727]">20k+</h3>
            </div>
            <div>
              <p className="text-[20px] text-[#272727]">5 Stars Reviews</p>
            </div>
          </div>

          <div className="group border border-[#e4e4e4] py-[30px] -space-y-[5px] flex flex-col justify-center items-center bg-[#F6F2F1] rounded-[8px] shadow-md">
            <div className="p-[8px] bg-[#ffe3e2] rounded-full transform transition-transform duration-500 group-hover:rotate-y-180">
              <MdReviews className="text-[40px] text-[#FF4136]" />
            </div>
            <div>
              <h3 className="text-[45px] font-bold text-[#272727]">98%</h3>
            </div>
            <div>
              <p className="text-[20px] text-[#272727]">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketProperty;
