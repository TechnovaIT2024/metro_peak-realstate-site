"use client";
import Link from "next/link";
import React from "react";
import { FaPhone, FaEnvelope, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 md:px-[40px] px-[25px]">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* About Pillar */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Metro Peak</h3>
          <p className="text-sm text-gray-300 mb-4">
            Metro Peak is a luxury to the resilience, adaptability, Spacious
            modern villa living room with centrally placed swimming pool
            blending indoor/outdoor.
          </p>

          <div className="space-y-[10px]">
            <div className="flex items-center gap-2 mb-2">
              <FaPhone className="text-[#FF4136]" />
              <span className="text-sm">+880 1555-45 45 45</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#FF4136]" />
              <span className="text-sm">info.metro_peak@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <FaLocationDot className="text-[#FF4136]" />
              <span className="text-sm">
                1234 Main Street Springfield, IL 62704 USA
              </span>
            </div>
          </div>
        </div>

        {/* Featured Houses */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Featured Houses</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> #Villa
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> #Commercial
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> #Farm Houses
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> #Apartments
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> #Apartments
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> Strategy Services
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> Management
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> Privacy & Policy
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> Sitemap
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> Term & Conditions
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> Help Center
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> FAQs
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> Contact Us
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> Ticket Support
            </li>
            <li className="flex items-center gap-2">
              <FaHome className="text-[#FF4136]" /> Live Chat
            </li>
          </ul>
        </div>

        {/* Pillar Location */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Pillar Location</h3>
          <div className="w-full h-40 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.43727436566!2d-0.1234937!3d51.5032974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900000001%3A0xabcdef123456789!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1694270400000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-[15px] border-t-2 border-[#FF4136]">
        <p className="text-[16px] text-center mt-[15px]">Copyright © 2025 Metro Peak. All Rights Reserved.</p>
        <Link href={"https://www.technovait.tech/"} className="text-[14px] flex justify-center mt-[5px] font-semibold">{"("} Developed By Technova IT {")"}</Link>
      </div>
    </footer>
  );
};

export default Footer;
