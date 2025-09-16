import React from "react";
import {
  FaHome,
  FaBuilding,
  FaLeaf,
  FaTree,
  FaBoxOpen,
  FaTools,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Easy To Rent",
    description: "Find your perfect rental home quickly and hassle-free with our trusted network.",
    icon: <FaHome />,
    btn: "Find A Home",
  },
  {
    id: 2,
    title: "Carefully Crafted",
    description: "Explore thoughtfully designed properties built with comfort and style in mind.",
    icon: <FaBuilding />,
    btn: "Sell A Home",
  },
  {
    id: 3,
    title: "Eco-Friendly & Green",
    description: "Discover sustainable homes built with eco-conscious design and energy efficiency.",
    icon: <FaLeaf />,
    btn: "Rent A Home",
  },
  {
    id: 4,
    title: "Lavish Greenery",
    description: "Enjoy properties surrounded by nature, offering peace and fresh living spaces.",
    icon: <FaTree />,
    btn: "Find A Home",
  },
  {
    id: 5,
    title: "In-built Wardrobe",
    description: "Smart homes designed with modern storage solutions for everyday convenience.",
    icon: <FaBoxOpen />,
    btn: "Sell A Home",
  },
  {
    id: 6,
    title: "Planned Construction",
    description: "Well-planned constructions ensuring quality, safety, and long-lasting living spaces.",
    icon: <FaTools />,
    btn: "Rent A Home",
  },
  {
    id: 7,
    title: "Family & Community",
    description: "Homes built to foster connections, perfect for families and thriving communities.",
    icon: <FaUsers />,
    btn: "Find A Home",
  },
  {
    id: 8,
    title: "Tech & Security",
    description: "Modern homes equipped with smart technology and advanced security systems.",
    icon: <FaShieldAlt />,
    btn: "Sell A Home",
  },
];

const OurServices = () => {
  return (
    <div>
      <div className="">
        <h2 className="md:text-[35px] text-[28px] font-bold uppercase">
          Our{" "}
          <span className="text-[#FF4136] border-b-2 pb-[0.5px]">
            Services..!
          </span>
        </h2>
      </div>

      <div className="mt-[40px]">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative bg-white p-6 rounded-[8px] shadow-md hover:shadow-xl transition duration-300 hover:border-[#FF4136] border border-[#e9e9e9]"
          >
            {/* Icon */}
            <div className="flex items-center justify-between">
              <div
                className="w-12 h-12 rounded-full bg-[#000000] flex items-center justify-center text-white text-xl transform transition-transform duration-500 group-hover:rotate-y-180 group-hover:bg-[#FF4136]"
              >
                {service.icon}
              </div>
              <span className="text-[50px] font-bold text-[#DCDADA]">
                {service.id < 10 ? `0${service.id}` : service.id}
              </span>
            </div>

            {/* Content */}
            <h3 className="mt-4 text-lg font-semibold hover:text-[#FF4136]">{service.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{service.description}</p>

             <button className="relative overflow-hidden w-fit px-[15px] py-[5px] border rounded-[6px] text-[#ffffff] bg-[#FF4136] font-semibold transition-colors duration-500 group mt-[20px]">
            {/* Animated background */}
            <span className="absolute top-0 left-[-100%] w-full h-full bg-[#000000] transition-all duration-500 ease-in-out group-hover:left-0"></span>

            {/* Text with hover color change */}
            <span className="relative z-10 group-hover:text-white">
              {service.btn}
            </span>
          </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurServices;
