import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

import CallExecutive from "../../../../public/2147943672.jpg";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="mx-5 md:mx-10 my-[50px]">
      {/* contact info card */}
      <div className="md:flex items-center gap-[25px] w-full md:space-y-0 space-y-[20px]">
        <div className="group w-full bg-[#faede9] rounded-xl shadow-sm md:flex items-center justify-center gap-[35px] md:py-[35px] md:px-[0px] px-[20px] py-[25px] md:space-y-[0px] space-y-[15px] transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white text-[#FF4136] transition-all duration-500 group-hover:bg-[#FF4136] group-hover:text-white group-hover:scale-x-[-1]">
            <FaMapMarkerAlt className="text-[35px]" />
          </div>

          <div className="space-y-[5px]">
            <h2 className="text-[24px] text-[#1b1b1b] font-bold">
              Office Address
            </h2>
            <p className="text-gray-600 text-[18px] leading-relaxed font-medium">
              1234 Main Street Springfield, <br /> IL 62704 USA
            </p>
          </div>
        </div>

        <div className="group w-full bg-[#faede9] rounded-xl shadow-sm md:flex items-center justify-center gap-[35px] md:py-[35px] md:px-[0px] px-[20px] py-[25px] md:space-y-[0px] space-y-[15px] transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white text-[#FF4136] transition-all duration-500 group-hover:bg-[#FF4136] group-hover:text-white group-hover:scale-x-[-1]">
            <IoIosCall className="text-[35px]" />
          </div>

          <div className="space-y-[5px]">
            <h2 className="text-[24px] text-[#1b1b1b] font-bold">
              Phone Number
            </h2>
            <div className="-space-y-[3px]">
              <p className="text-gray-600 text-[18px] leading-relaxed font-base">
                +880 1555-45 45 45
              </p>
              <p className="text-gray-600 text-[18px] leading-relaxed">
                +880 1555-45 45 46
              </p>
            </div>
          </div>
        </div>

        <div className="group w-full bg-[#faede9] rounded-xl shadow-sm md:flex items-center justify-center gap-[35px] md:py-[35px] md:px-[0px] px-[20px] py-[25px] md:space-y-[0px] space-y-[15px] transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white text-[#FF4136] transition-all duration-500 group-hover:bg-[#FF4136] group-hover:text-white group-hover:scale-x-[-1]">
            <MdAlternateEmail className="text-[35px]" />
          </div>

          <div className="space-y-[5px]">
            <h2 className="text-[24px] text-[#1b1b1b] font-bold">
              Email Address
            </h2>
            <div className="-space-y-[3px]">
              <p className="text-gray-600 text-[18px] leading-relaxed font-base">
                info.metro_peak@gmail.com
              </p>
              <p className="text-gray-600 text-[18px] leading-relaxed">
                info.metro_peak2@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-md mt-10">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 bg-[#f9f6f5]  flex flex-col justify-center md:px-[32px] px-[20px] md:my-0 py-[30px]">
          <h2 className="text-2xl md:text-[45px] font-bold text-gray-900 mb-6 leading-[60px]">
            Do you have questions ?<br />{" "}
            <span className="border-b-2 border-[#FF4136] text-[#FF4136] text-[40px]">
              Contact Us
            </span>
          </h2>

          <form className="space-y-4">
            {/* Row with Name + Phone */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full md:w-1/2 rounded-md px-4 py-2 border border-[#a3a3a3] hover:border-[#FF4136] focus:border-[#FF4136] duration-300 outline-none"
              />
              <input
                type="text"
                placeholder="Phone *"
                className="w-full md:w-1/2 rounded-md px-4 py-2 border border-[#a3a3a3] hover:border-[#FF4136] focus:border-[#FF4136] duration-300 outline-none"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full border rounded-md px-4 py-2 outline-none border-[#a3a3a3] hover:border-[#FF4136] focus:border-[#FF4136] duration-300"
            />

            {/* Subject Dropdown */}
            <select className="w-full border rounded-md px-[12px] py-2 text-gray-500 outline-none border-[#a3a3a3] hover:border-[#FF4136] focus:border-[#FF4136] duration-300">
              <option>Select Subject</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Sales</option>
            </select>

            {/* Message */}
            <textarea
              placeholder="Your Message *"
              rows={4}
              className="w-full border rounded-md px-4 py-2 outline-none border-[#a3a3a3] hover:border-[#FF4136] focus:border-[#FF4136] duration-300"
            ></textarea>

            {/* Button */}
            <button className="relative overflow-hidden w-fit px-[20px] py-[8px] border rounded-[6px] text-[#ffffff] bg-black font-semibold transition-colors duration-500 group">
              {/* Animated background */}
              <span className="absolute top-0 left-[-100%] w-full h-full bg-[#FF4136] transition-all duration-500 ease-in-out group-hover:left-0"></span>

              {/* Text with hover color change */}
              <div className="relative z-10 flex items-center gap-[10px]">
                <span className=" group-hover:text-white uppercase">
                  Send Message
                </span>
              </div>
            </button>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative h-[350px] md:h-auto md:px-[0px] px-[20px]">
          <Image
            src={CallExecutive}
            alt="Call Executive"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* location */}
      <div className="w-full mt-[40px] rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps?q=1234+Main+Street+Springfield,+IL+62704+USA&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
