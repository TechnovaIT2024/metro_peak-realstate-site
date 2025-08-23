"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import demoLogo from "../../../../public/demo logo.png";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
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
      title: "PROPERTY'S",
    },
    {
      path: "/portfolio",
      title: "BLOG'S",
    },
    {
      path: "/contact",
      title: "CONTACT US",
    },
  ];

  return (
    <div className="w-full border-t-0 border-b-0 md:border-t-[1px] md:border-b-[1px] border-[#68707A]">
      {/* desktop navigation bar */}
      <nav className="md:flex justify-between items-center lg:px-[40px] md:px-[30px] px-[20px] py-[15px] hidden mx-auto">
        <div className="w-[20%]">
          <Link href={"/"}>
            <Image
              src={demoLogo}
              width={200}
              height={200}
              alt="Image with Blur Placeholder"
            ></Image>
          </Link>
        </div>

        <div className="w-[60%]">
          <ul className="flex items-center justify-center space-x-[20px] text-[16px] text-[#ffffff] duration-300 font-medium">
            {NavLinks.map(({ path, title }) => (
              <li key={path} className="relative group">
                <NavLink
                  exact={path === "/"}
                  activeClassName="text-[#FF4136] font-bold duration-300"
                  href={path}
                  className="inline-block"
                >
                  {title}
                </NavLink>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#FF4136] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex items-center space-x-2 w-[20%] justify-end"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div
            className={`flex items-center hover:border border-[#ffffff] rounded-full overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "w-[150px]" : "w-[36px] h-[35px]"
            }`}
          >
            {/* Search Icon */}
            <div
              className={`text-white flex items-center justify-center transition-all duration-500 ease-in-out bg-[#FF4136] p-[10px] rounded-full ${
                isOpen ? "mr-[5px]" : "mx-auto"
              }`}
            >
              <FaSearch />
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search..."
              className={`bg-transparent outline-none text-white flex-1 transition-opacity duration-300 h-[35px] ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
          </div>
        </div>
      </nav>

      {/* nav for mobile */}
      <div className="md:hidden">
        {/* Hamburger Icon */}
        <button
          className="fixed top-4 right-4 p-2 bg-[#FF4136] text-white rounded-md md:hidden z-10"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <FaBars />
        </button>

        {/* Drawer Navigation */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-[#FF4136] text-white transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-50`}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-[#fff]"
            onClick={() => setIsDrawerOpen(false)}
          >
            <FaRegCircleXmark />
          </button>
          <ul className="mt-16 space-y-6 p-4">
            {NavLinks.map(({ path, title }) => (
              <li key={path} className="text-[16px] font-semibold">
                <NavLink
                  exact={path === "/"}
                  activeClassName="bg-[#Ffff] px-10 py-2 font-bold duration-300 rounded-[8px] text-[#FF4136]"
                  href={path}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="p-4 flex gap-[15px] items-center absolute bottom-0 border-t-[1px] border-white w-full">
            <FaFacebookF className="text-[25px] text-white"></FaFacebookF>
        <FaTwitter className="text-[25px] text-white"></FaTwitter>
        <FaInstagram className="text-[25px] text-white"></FaInstagram>
        <FaLinkedin className="text-[25px] text-white"></FaLinkedin>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
