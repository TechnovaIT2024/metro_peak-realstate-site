import React from "react";
import FooterLogo from "../../../../public/navlogo.png";
import Image from "next/image";
import NavLink from "../NavBar/NavLink";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import footerBg from "../../../../public/light-grey-dots-background_78370-2583.jpg";

const Footer = () => {
  const FooterLinks = [
    {
      path: "/",
      title: "HOME",
    },
    {
      path: "/about",
      title: "ABOUT US",
    },
    {
      path: "/services",
      title: "OUR SERVICES",
    },
    {
      path: "/contact",
      title: "CONTACT US",
    },
  ];

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${footerBg.src})`, // Use the `.src` property for imported images in Next.js
      }}
    >
      <div className="md:flex justify-between mx-auto lg:px-[40px] md:px-[30px] px-[20px] md:py-[50px] py-[20px] border-t">
        <div className="flex flex-col items-start justify-start md:w-[25%]">
          <Image
            src={FooterLogo}
            alt="Footer Logo"
            width={120}
            height={120}
          ></Image>
          <p className="text-[16px] font-medium md:mt-3 mt-1 tracking-wide">
            TRANSFORMING IDEAS <br />
            INTO DIGITAL <span className="text-[#ED008E]">SUCCESS</span>
          </p>
        </div>

        <div className="md:w-[25%] mt-5 md:mt-0">
          <h2 className="text-lg font-bold bg-gradient-to-r from-[#2C3191] to-[#EF018F] text-transparent bg-clip-text">
            QUICK LINKS
          </h2>
          <nav>
            <ul className="md:mt-4 mt-2 flex flex-col md:space-y-2">
              {FooterLinks.map(({ path, title }) => (
                <li key={path} className="relative group">
                  <NavLink
                    exact={path === "/"}
                    activeClassName="text-[#F0018E] font-bold duration-300"
                    href={path}
                    className="inline-block"
                  >
                    {title}
                  </NavLink>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#2D3091] transition-all duration-300 group-hover:w-[100px]"></span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="md:w-[35%] mt-5 md:mt-0">
          <h2 className="text-lg font-bold bg-gradient-to-r from-[#2C3191] to-[#EF018F] text-transparent bg-clip-text">
            CONTACT US
          </h2>
          <div className="md:mt-4 mt-2">
            <div className="flex items-center gap-2 hover:-translate-x-2 hover:scale-100 duration-200">
              <FaLocationDot className="text-[18px] text-[#EF018F] "></FaLocationDot>
              <p className="text-base font-bold text-[#2C3191]">
                House No 20, Apt 7B, Main Road <br />
                Block-G, Aftabnagar, Dhaka - 1212
              </p>
            </div>
            <div className="my-3 flex items-center gap-2 hover:-translate-x-2 hover:scale-100 duration-200">
              <MdOutlineAlternateEmail className="text-[18px] text-[#EF018F]"></MdOutlineAlternateEmail>
              <p className="text-base font-bold text-[#2C3191]">
                technova.it2024@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2 hover:-translate-x-2 hover:scale-100 duration-200">
              <FaPhone className="text-[18px] text-[#EF018F]"></FaPhone>
              <p className="text-base font-bold text-[#2C3191]">
                +88013-3983-7965
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[15%] mt-5 md:mt-0">
          <h2 className="text-lg font-bold bg-gradient-to-r from-[#2C3191] to-[#EF018F] text-transparent bg-clip-text">
            FOLLOW US
          </h2>

          <div className="space-y-3 md:mt-4 mt-2">

            <Link
              href={"https://www.linkedin.com/in/technova-it-050b11342/"}
              className="flex items-center gap-3 ease-in-out hover:-translate-x-2 hover:scale-100 duration-200"
            >
              <FaLinkedin className="text-3xl text-[#3876b0]"></FaLinkedin>
              <h2 className="text-xl font-semibold">Linkedin</h2>
            </Link>

            <Link
              href={"https://www.facebook.com/profile.php?id=61576273551896"}
              className="flex items-center gap-3 transition ease-in-out hover:-translate-x-2 hover:scale-100 duration-200"
            >
              <FaFacebook className="text-3xl text-[blue]"></FaFacebook>
              <h2 className="text-xl font-semibold">Facebook</h2>
            </Link>
            
            <Link
              href={"https://www.instagram.com/technova_it/?hl=en"}
              className="flex items-center gap-3 ease-in-out hover:-translate-x-2 hover:scale-100 duration-200"
            >
              <FaInstagram className="text-3xl text-[#FD1D1D]" />
              <h2 className="text-xl font-semibold">Instagram</h2>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="text-center text-white text-base font-medium bg-[#2C3191] border-t-2 py-[10px]">
        <h2> © 2024 Technova IT All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
