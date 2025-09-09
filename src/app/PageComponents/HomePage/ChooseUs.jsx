import React from "react";
import whyChooseUsBG from "../../../../public/whyChooseUsBG.jpg";
import googleIcon from "../../../../public/google.png";
import review1 from "../../../../public/review1.jpg";
import review2 from "../../../../public/review2.jpg";
import review3 from "../../../../public/review3.jpg";
import searchHome from "../../../../public/search.png";
import sellProperty from "../../../../public/deal.png";
import rentHome from "../../../../public/rent.png";
import Image from "next/image";

import { FaStar } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div>
      {/* Section title */}
      <div className="text-end mb-[30px] md:mx-[40px] mx-[25px] ">
        <h2 className="md:text-[35px] text-[28px] font-bold uppercase">
          Why{" "}
          <span className="text-[#FF4136] border-b-2 pb-[0.5px]">
            Choose US ?
          </span>
        </h2>
      </div>

      {/* Parallax background div */}
      <div
        className="lg:h-[550px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${whyChooseUsBG.src})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Optional overlay or content */}
        <div className="h-full w-full bg-black/50 flex items-center justify-center">
          <div className="w-full md:mx-[40px] mx-[25px] md:py-[0px] py-[30px]">
            
            <div className="md:flex justify-between items-center space-y-[15px]">

              <div>
                <h3 className="text-white md:text-[40px] text-[30px] font-bold">
                  Trusted By <span className="text-[#FF4136]" >10k</span> Buyers
                </h3>
              </div>

              <div className="md:flex items-center gap-[10px]">

                <div className="flex items-center gap-[15px]">
                  <div>
                    <Image
                      src={googleIcon}
                      height={30}
                      width={30}
                      alt="google icon"
                    ></Image>
                  </div>
                  <div>
                    <p className="text-[20px] font-semibold text-[#fff]">
                      Google Review
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-[15px] md:mt-0 mt-[15px]">

                  <div className="flex -space-x-3 ">
                    {/* Avatar 1 */}
                    <img
                      src={review1.src}
                      alt="Review 1"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    {/* Avatar 2 */}
                    <img
                      src={review2.src}
                      alt="Review 2"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    {/* Avatar 3 */}
                    <img
                      src={review3.src}
                      alt="Review 3"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    {/* Red count badge */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-[#FF4136] text-white text-[14px] font-semibold">
                      +99
                    </div>
                  </div>

                  <div className="">
                    <div className="flex text-[#FF4136] space-x-[3px] text-[11px] md:justify-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div>
                      <p className="text-[16px] text-[#fff] font-semibold">
                        1k+ clients
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="flex justify-evenly items-center md:mt-[30px] mt-[30px]">
              <div className="md:flex justify-between items-center w-full gap-[15px] md:space-y-[0px] space-y-[15px]">

                <div className="w-full text-center p-[10px] rounded-[6px] bg-[#FFFFFF] group">
                  <div className="border rounded-[5px] border-[#FF4136] space-y-[5px] px-[30px] py-[40px]">
                    <div className="flex justify-center">
                      <Image
                        src={searchHome}
                        height={60}
                        width={60}
                        alt="search home icon"
                        className="bg-[#FDEDEC] p-[5px] rounded-[5px] transition-transform duration-500 ease-in-out [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[22px] font-semibold">
                        Find Your{" "}
                        <span className="text-[#FF4136] font-bold">Home</span>
                      </h3>
                    </div>

                    <div>
                      <p className="text-[16px] text-[#585858]">
                        Find your dream home with ease—explore listings, compare
                        options, and discover the perfect place to call yours.
                      </p>
                    </div>

                    <div className="mt-[30px]">
                      <button className="relative overflow-hidden w-fit px-[20px] py-[5px] border border-[#cacaca] rounded-full text-[#222222] font-semibold transition-colors duration-500 group">
                        {/* Animated background */}
                        <span className="absolute top-0 left-[-100%] w-full h-full bg-[#FF4136] transition-all duration-500 ease-in-out group-hover:left-0"></span>

                        {/* Text with hover color change */}
                        <span className="relative z-10 group-hover:text-white">
                          Find Home
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full text-center p-[10px] rounded-[6px] bg-[#FFFFFF] group">
                  <div className="border rounded-[5px] border-[#FF4136] space-y-[5px] px-[30px] py-[40px]">
                    <div className="flex justify-center">
                      <Image
                        src={sellProperty}
                        height={60}
                        width={60}
                        alt="search home icon"
                        className="bg-[#FDEDEC] p-[5px] rounded-[5px] transition-transform duration-500 ease-in-out [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[22px] font-semibold">
                        Sell Your{" "}
                        <span className="text-[#FF4136] font-bold">
                          Property
                        </span>
                      </h3>
                    </div>

                    <div>
                      <p className="text-[16px] text-[#585858]">
                        Sell your property fast—reach buyers, showcase your
                        home’s value, and secure the best deal with ease.
                      </p>
                    </div>

                    <div className="mt-[30px]">
                      <button className="relative overflow-hidden w-fit px-[20px] py-[5px] border border-[#cacaca] rounded-full text-[#222222] font-semibold transition-colors duration-500 group">
                        {/* Animated background */}
                        <span className="absolute top-0 left-[-100%] w-full h-full bg-[#FF4136] transition-all duration-500 ease-in-out group-hover:left-0"></span>

                        {/* Text with hover color change */}
                        <span className="relative z-10 group-hover:text-white">
                          Sell Property
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full text-center p-[10px] rounded-[6px] bg-[#FFFFFF] group">
                  <div className="border rounded-[5px] border-[#FF4136] space-y-[5px] px-[30px] py-[40px]">
                    <div className="flex justify-center">
                      <Image
                        src={rentHome}
                        height={60}
                        width={60}
                        alt="search home icon"
                        className="bg-[#FDEDEC] p-[5px] rounded-[5px] transition-transform duration-500 ease-in-out [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[22px] font-semibold">
                        Rent A{" "}
                        <span className="text-[#FF4136] font-bold">House</span>
                      </h3>
                    </div>

                    <div>
                      <p className="text-[16px] text-[#585858]">
                        Find the perfect rental—explore houses that fit your
                        lifestyle, budget, and needs for a comfortable living
                        experience.
                      </p>
                    </div>

                    <div className="mt-[30px]">
                      <button className="relative overflow-hidden w-fit px-[20px] py-[5px] border border-[#cacaca] rounded-full text-[#222222] font-semibold transition-colors duration-500 group">
                        {/* Animated background */}
                        <span className="absolute top-0 left-[-100%] w-full h-full bg-[#FF4136] transition-all duration-500 ease-in-out group-hover:left-0"></span>

                        {/* Text with hover color change */}
                        <span className="relative z-10 group-hover:text-white">
                          Rent Home
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
