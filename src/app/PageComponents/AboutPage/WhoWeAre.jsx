import React from "react";

// gallery Images
import galleryImage1 from "../../../../public/gallrey image 1.jpg";
import galleryImage2 from "../../../../public/gallrey image 2.jpg";
import galleryImage3 from "../../../../public/gallrey image 3.jpg";
import galleryImage4 from "../../../../public/gallrey image 4.jpg";
import galleryImage5 from "../../../../public/gallrey image 5.jpg";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="md:flex items-center gap-[25px] md:space-y-0 space-y-[20px]">
      <div className="inline-grid grid-cols-3 gap-[20px] md:w-[55%] w-full">
        <div className="overflow-hidden rounded-lg h-[200px] shadow-lg border border-transparent hover:border-[#ff4136] transition-all duration-300">
          <Image
            src={galleryImage1}
            alt="Gallery Image 1"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="overflow-hidden rounded-lg row-span-2 h-[420px] shadow-lg border border-transparent hover:border-[#ff4136] transition-all duration-300">
          <Image
            src={galleryImage2}
            alt="Gallery Image 2"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="overflow-hidden rounded-lg h-[200px] shadow-lg border border-transparent hover:border-[#ff4136] transition-all duration-300">
          <Image
            src={galleryImage3}
            alt="Gallery Image 3"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="overflow-hidden rounded-lg h-[200px] shadow-lg border border-transparent hover:border-[#ff4136] transition-all duration-300">
          <Image
            src={galleryImage4}
            alt="Gallery Image 4"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="overflow-hidden rounded-lg h-[200px] shadow-lg border border-transparent hover:border-[#ff4136] transition-all duration-300">
          <Image
            src={galleryImage5}
            alt="Gallery Image 5"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      <div className="md:w-[45%] w-full">
        {/* title div with cards */}
        <div>
          <p className="text-[20px] font-bold border-b-2 border-[#FF4136] w-fit pe-[8px] text-[#383838]">
            About Us
          </p>
          <h3 className="md:text-[40px] text-[30px] font-bold uppercase text-[#000000] leading-[50px] my-[10px]">
            <span className="text-[#FF4136] italic">Metro Peak</span> Your
            Partner
            <br />
            in Real Estate Success
          </h3>

          <p className="text-[16px] font-medium italic text-[#383838]">
            Metro Peak has proudly served London for over a decade, earning 20k+
            five-star reviews and 98% client happiness with reliable,
            transparent, and professional real estate services.
          </p>

          <button className="relative overflow-hidden w-fit px-[20px] py-[8px] border rounded-[6px] text-[#ffffff] bg-black font-semibold transition-colors duration-500 group mt-[20px]">
            {/* Animated background */}
            <span className="absolute top-0 left-[-100%] w-full h-full bg-[#FF4136] transition-all duration-500 ease-in-out group-hover:left-0"></span>

            {/* Text with hover color change */}
            <span className="relative z-10 group-hover:text-white">
              View More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
