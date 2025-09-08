import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import agent1 from "../../../../public/agent 1.png";
import agent2 from "../../../../public/agent 2.png";
import agent3 from "../../../../public/agent 3.png";
import agent4 from "../../../../public/agent 4.png";
import bgImage from "../../../../public/bg image 2.jpg";

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Senior Real Estate Agent",
    image: agent1,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Michael Lee",
    designation: "Luxury Property Specialist",
    image: agent2,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Emily Carter",
    designation: "Residential Realtor",
    image: agent3,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "James Smith",
    designation: "Commercial Property Expert",
    image: agent4,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const Employees = () => {
  return (
    <div>
      <div className="text-start mt-[50px] mb-[25px]">
        <h2 className="md:text-[35px] text-[28px] font-bold uppercase">
          Our Top{" "}
          <span className="text-[#FF4136] border-b-2 pb-[0.5px]">Agent's</span>
        </h2>
      </div>

      {/* Parent group */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 group">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white rounded-2xl shadow-lg text-center border border-[#bebebe] transition duration-500 
                       group-hover:blur-sm group-hover:opacity-60 
                       hover:!blur-none hover:!opacity-100 hover:scale-105 hover:shadow-2xl hover:border-[#FF4136]"
          >
            <div className="w-full h-[250px] relative mb-4 overflow-hidden rounded-xl">
              {/* Background image */}
              <Image
                src={bgImage}
                alt="Background"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           25vw"
              />

              {/* Agent image */}
              <Image
                src={agent.image}
                alt={agent.name}
                className="object-contain rounded-2xl transition-transform duration-500 ease-in-out scale-110"
                fill
                sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           25vw"
                priority={agent.id === 1}
              />
            </div>

            <div className="p-4">
              <h3 className="text-[24px] font-semibold">{agent.name}</h3>
              <p className="text-gray-500 text-[16px] mb-4 hover:text-[#FF4136] hover:font-medium">
                {agent.designation}
              </p>

              <div className="flex justify-center gap-3">
                <a
                  href={agent.socials.facebook}
                  className="p-2 bg-gray-100 hover:bg-[#1877F2] hover:text-white transition border border-[#7a7a7a] hover:border-[#1877F2] duration-300 rounded-full"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={agent.socials.twitter}
                  className="p-2 bg-gray-100 rounded-full hover:bg-[#1DA1F2] hover:text-white transition border border-[#7a7a7a] hover:border-[#1DA1F2] duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href={agent.socials.linkedin}
                  className="p-2 bg-gray-100 rounded-full hover:bg-[#0077B5] hover:text-white transition border border-[#7a7a7a] hover:border-[#0077B5] duration-300"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={agent.socials.instagram}
                  className="p-2 bg-gray-100 rounded-full hover:bg-[#E4405F] hover:text-white transition border border-[#7a7a7a] hover:border-[#E4405F] duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
