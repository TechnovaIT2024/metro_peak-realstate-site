"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaPlay } from "react-icons/fa";

const HeroSectionBackground = () => {
  return (
    <div className="relative w-full md:h-screen h-[380px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/demo video for xyz realstate.mp4" // video placed in public folder
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for dark effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

      {/* Content on top of video */}
      <div className="relative z-10 flex md:items-center justify-start h-full">
        <div className="text-white text-2xl lg:px-[40px] md:px-[30px] px-[20px] lg:translate-y-[50px] translate-y-[50px]">
          <p className="md:text-[70px] text-[45px] font-semibold">
            Find Your Perfect <br /> Place To{" "}
            <span className="text-[#FF4136] font-bold md:text-[70px]">
              <Typewriter
                words={[
                  "Call Home",
                  "Call Apartment",
                  "Call Villa",
                  "Call Property",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </p>

          {/* Button placed right under the text */}
          <button
            className="
  relative font-medium text-lg tracking-wide rounded-xl cursor-pointer border-0
  bg-gradient-to-r from-[#FF4136] to-[#ff4a41] text-[#000] hover:text-[#fff] overflow-hidden
  transition active:scale-95
  before:content-[''] before:absolute before:top-0  before:w-[120%] before:h-full
  before:bg-white before:-left-[10%] before:skew-x-[30deg] 
  before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.3,1,0.8,1)]
  hover:before:translate-x-full
 mt-[10px]"
          >
            <span className="relative z-10 inline-flex items-center px-5 py-3 transition-colors duration-400">
              Explore More
            </span>
          </button>
        </div>
      </div>

      {/* Play button at bottom-right */}
      <div className="absolute bottom-[40px] right-[40px] z-10 md:flex items-center justify-center w-[150px] h-[150px] hidden">
        {/* Circle Text */}
        <svg
          viewBox="0 0 300 300"
          className="absolute w-full h-full animate-spin-slow"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
            />
          </defs>
          <text fill="white" fontSize="18" fontWeight="500">
            <textPath href="#circlePath" startOffset="0%">
              * REAL ESTATE HOME • METRO PEAK • REAL ESTATE HOME • METRO PEAK
            </textPath>
          </text>
        </svg>

        {/* Center Button */}
        <button className="flex items-center justify-center w-[60px] h-[60px] border border-white rounded-full shadow-lg hover:bg-[#fc665e] transition">
          <FaPlay className="text-[#fc665e] hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default HeroSectionBackground;
