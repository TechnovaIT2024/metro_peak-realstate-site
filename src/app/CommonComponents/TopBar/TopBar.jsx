import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="md:flex lg:px-[40px] md:px-[30px] px-[20px] hidden mx-auto justify-between gap-[25px] py-[15px]">
      <div className="w-full flex items-center gap-[10px]">
        <div className="flex items-center gap-[5px]">
          <div>
            <IoMdMail className="text-[22px] text-[#fc665e]" />
          </div>
          <div>
            <p className="text-[14px] font-normal text-white hover:text-[#fc665e] duration-300">
              info.metro_peak@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[5px]">
          <div>
            <IoIosCall className="text-[22px] text-[#fc665e]" />
          </div>
          <div>
            <p className="text-[14px] font-normal text-white hover:text-[#fc665e] duration-300">
              +880 1555-45 45 45
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-[20px] items-center justify-end">
        <FaFacebookF className="text-[22px] text-white hover:text-[#fc665e] duration-300"></FaFacebookF>
        <FaTwitter className="text-[22px] text-white hover:text-[#fc665e] duration-300"></FaTwitter>
        <FaInstagram className="text-[22px] text-white hover:text-[#fc665e] duration-300"></FaInstagram>
        <FaLinkedin className="text-[22px] text-white hover:text-[#fc665e] duration-300"></FaLinkedin>
      </div>
    </div>
  );
};

export default TopBar;
