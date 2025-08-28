import React from "react";
import { FaSearchLocation } from "react-icons/fa";

const SearchField = () => {
  return (
    <div className="relative w-full">
      <div
        className="h-[25px] bg-[#FF4136] w-[90%] mx-auto relative z-10 -mt-[25px]"
        style={{ clipPath: "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)" }}
      ></div>

      <div className="rounded-[5px] shadow-xl shadow-[#FFEFEE] bg-[#ffffff] border border-[#d8d8d8] w-[86%] mx-auto -mt-[16px] px-[20px] pt-[15px] pb-[35px] relative z-20">

        <div className="text-center pb-[30px]">
            <h2 className="text-[24px] font-bold uppercase">Find Your <span className="text-[#FF4136] border-b-2 pb-[0.5px]">Property</span></h2>
        </div>
        
        <div className="md:flex gap-[15px] md:space-y-0 space-y-[10px]">
          <div className="flex flex-col w-full">
            <label
              htmlFor="Search home"
              className="text-[18px] font-semibold text-[#525252]"
            >
              Property location
            </label>
            <input
              type="text"
              className="bg-[#e4e4e4] mt-[5px] px-[10px] py-[5px] rounded-[4px] hover:outline-none focus:outline-none"
              placeholder="Input Property Location"
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="Search home"
              className="text-[18px] font-semibold text-[#525252]"
            >
              Property Type
            </label>
            <input
              type="text"
              className="bg-[#e4e4e4] mt-[5px] px-[10px] py-[5px] rounded-[4px] hover:outline-none focus:outline-none"
              placeholder="Input Property Type"
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="Search home"
              className="text-[18px] font-semibold text-[#525252]"
            >
              Price Range
            </label>
            <input
              type="text"
              className="bg-[#e4e4e4] mt-[5px] px-[10px] py-[5px] rounded-[4px] hover:outline-none focus:outline-none"
              placeholder="Input Price Range"
            />
          </div>

          <div className="w-full flex items-center gap-[10px] mt-[28px]">
            <div className="p-[8px] shadow-2xl border border-[#FF4136] rounded-full ">
              <FaSearchLocation className="text-[#FF4136]" />
            </div>
            <div className="w-full">
              <button className="w-full relative font-medium text-[16px] tracking-wide rounded-[6px] cursor-pointer border-0 bg-gradient-to-r from-[#FF4136] to-[#ff4a41] text-[#000] hover:text-[#fff] overflow-hidden transition active:scale-95 before:content-[''] before:absolute before:top-0  before:w-[120%] before:h-full before:bg-[#ffff] before:-left-[10%] before:skew-x-[30deg]  before:transition-transform before:duration-400 before:ease-[cubic-bezier(0.3,1,0.8,1)] hover:before:translate-x-full shadow-md">
                <span className="relative z-10 inline-flex items-center px-[10px] py-[5px] transition-colors duration-400 uppercase">
                  Search Property
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
