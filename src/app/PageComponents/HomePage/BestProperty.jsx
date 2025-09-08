"use client";

import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import Image from "next/image";

// ✅ Fake JSON data (same as yours)
const AllApartment = [
  {
    id: "APT001",
    category: "Apartment",
    image: "https://i.ibb.co.com/Y4y5qHPB/Apartment.jpg",
    name: "Skyline Heights",
    location: "Downtown City Center, New York",
    rooms: { bedrooms: 3, bathrooms: 2 },
    size: "1,450 sq.ft",
    price: "$420,000",
    description:
      "A modern apartment with breathtaking city views, spacious living area, modular kitchen, and close proximity to shopping malls, schools, and public transport.",
  },
  {
    id: "COM001",
    category: "Commercial",
    image: "https://i.ibb.co.com/zWVFMrJ3/Commercial.jpg",
    name: "Metro Business Hub",
    location: "Financial District, Chicago",
    size: "5,600 sq.ft",
    price: "$1,200,000",
    description:
      "A prime commercial property suitable for offices, coworking spaces, and startups. Equipped with high-speed internet, central air conditioning, and ample parking.",
  },
  {
    id: "LND001",
    category: "Land or Plot",
    image: "https://i.ibb.co.com/rR3rk1pB/Land-or-Plot.jpg",
    name: "Green Valley Plot",
    location: "Suburban Hills, Austin",
    size: "10,000 sq.ft",
    price: "$350,000",
    description:
      "A spacious residential plot located in a serene neighborhood, ideal for building a dream home or investment property. Surrounded by greenery with excellent road access.",
  },
  {
    id: "FRM001",
    category: "Farm house",
    image: "https://i.ibb.co.com/vCwnwZn8/Farm.jpg",
    name: "Rustic Countryside Farmhouse",
    location: "Napa Valley, California",
    rooms: { bedrooms: 4, bathrooms: 3 },
    size: "3,200 sq.ft",
    price: "$980,000",
    description:
      "A luxurious farmhouse surrounded by vineyards, featuring a swimming pool, open patio, large garden area, and rustic interiors for a cozy countryside lifestyle.",
  },
  {
    id: "APT002",
    category: "Apartment",
    image: "https://i.ibb.co.com/Y4y5qHPB/Apartment.jpg",
    name: "Ocean Breeze Residency",
    location: "Miami Beach, Florida",
    rooms: { bedrooms: 2, bathrooms: 2 },
    size: "1,200 sq.ft",
    price: "$510,000",
    description:
      "An elegant beachfront apartment with panoramic ocean views, private balcony, modern interiors, and exclusive access to a fitness center and swimming pool.",
  },
  {
    id: "COM002",
    category: "Commercial",
    image: "https://i.ibb.co.com/zWVFMrJ3/Commercial.jpg",
    name: "Tech Park Tower",
    location: "Silicon Valley, California",
    size: "12,000 sq.ft",
    price: "$2,800,000",
    description:
      "A state-of-the-art commercial building designed for IT companies and startups. Comes with conference rooms, cafeteria, server rooms, and sustainable green energy solutions.",
  },
];

const PopularProperty = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // ✅ extract unique categories
    const uniqueCategories = [
      ...new Set(AllApartment.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div>
      <div className="text-center mt-[50px] mb-[40px]">
        <h2 className="text-[35px] font-bold uppercase">
          Best{" "}
          <span className="text-[#FF4136] border-b-2 pb-[0.5px]">
            Property's
          </span>
        </h2>
      </div>

      <div>
        <Tabs className="md:flex gap-[20px] w-full">
          {/* ✅ Dynamic TabList + View All */}
          <TabList className="border border-[#dbdbdb] md:w-[20%] w-full flex flex-col space-y-[20px] bg-white shadow-2xl rounded-[8px] text-[18px] uppercase px-[20px] py-[25px]">
            <Tab
              className="relative overflow-hidden w-fit px-[20px] py-[5px] border border-[#a8a8a8] rounded-[6px] text-[#646464] font-semibold transition-colors duration-500 group"
              selectedClassName="relative w-fit px-[20px] py-[5px] border border-[#dadada] rounded-[6px] text-white bg-[#FF4136] font-semibold"
            >
              <span className="absolute top-0 left-[-100%] w-full h-full bg-[#FF4136] transition-all duration-500 ease-in-out group-hover:left-0"></span>
              <span className="relative z-10 group-hover:text-white">
                View All
              </span>
            </Tab>

            {categories.map((cat) => (
              <Tab
                key={cat}
                className="relative overflow-hidden w-fit px-[20px] py-[5px] border border-[#a8a8a8] rounded-[6px] text-[#646464] font-semibold transition-colors duration-500 group"
                selectedClassName="relative w-fit px-[20px] py-[5px] border border-[#dadada] rounded-[6px] text-white bg-[#FF4136] font-semibold"
              >
                <span className="absolute top-0 left-[-100%] w-full h-full bg-[#FF4136] transition-all duration-500 ease-in-out group-hover:left-0"></span>
                <span className="relative z-10 group-hover:text-white">
                  {cat}
                </span>
              </Tab>
            ))}
          </TabList>

          {/* ✅ TabPanels */}
          <div className="md:w-[80%] w-full rounded-[8px]">
            {/* View All Panel */}
            <TabPanel>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {AllApartment.map((apt) => (
                  <div
                    key={apt?.id}
                    className="border border-[#e2e2e2] rounded-[8px] shadow-xl overflow-hidden transition-all duration-300"
                  >
                    {/* Image + For Sale */}
                    <div className="relative">
                      <div className="relative w-full h-48">
                        <Image
                          src={apt?.image || "/placeholder.jpg"}
                          alt={apt?.name || "Property"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="absolute top-3 left-3 bg-[#FF4136] text-white text-xs font-semibold px-3 py-1 rounded">
                        For Sale
                      </span>
                    </div>

                    {/* Content */}
                    <div className="px-[15px] py-[25px]">
                      {/* Title + Location */}
                      <h3 className="text-[24px] font-bold text-[#4d4d4d]">
                        {apt?.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[16px] mt-[5px] text-gray-500">
                        <FaMapMarkerAlt className="text-[#FF4136]" />
                        <span className="text-[15px]">{apt?.location}</span>
                      </div>

                      {/* Features */}
                      <div className="flex justify-between text-gray-500 border-t-1 border-b-1 py-[5px] border-[#6A7282 my-[20px]">
                        <div className="text-[20px] flex items-center gap-1">
                          <FaBed />{" "}
                          <span className="text-[18px] font-semibold">
                            {apt?.rooms?.bedrooms} Bed
                          </span>
                        </div>
                        <div className="text-[20px] flex items-center gap-1">
                          <FaBath />{" "}
                          <span className="text-[18px] font-semibold">
                            {apt?.rooms?.bathrooms} Bath
                          </span>
                        </div>
                        <div className="text-[20px] flex items-center gap-1">
                          <BiArea />{" "}
                          <span className="text-[18px] font-semibold">
                            {apt?.size}
                          </span>
                        </div>
                      </div>

                      {/* Price and button */}
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-[22px] font-bold text-[#4d4d4d] hover:text-[#FF4136] duration-300">
                          {apt?.price}
                        </p>
                        <button className="relative overflow-hidden w-fit px-[20px] py-[5px] border border-[#cacaca] rounded-[6px] text-[#222222] font-semibold transition-colors duration-500 group">
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
                ))}
              </div>
            </TabPanel>

            {/* Category-specific Panels */}
            {categories.map((cat) => (
              <TabPanel key={cat}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                  {AllApartment.filter((apt) => apt?.category === cat).map(
                    (apt) => (
                      <div
                        key={apt?.id}
                        className="bg-white border border-[#dbdbdb] rounded-[8px] shadow-md overflow-hidden transition-all duration-300"
                      >
                        {/* Same card content repeated */}
                        <div className="relative">
                          <div className="relative w-full h-48">
                            <Image
                              src={apt?.image || "/placeholder.jpg"}
                              alt={apt?.name || "Property"}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="absolute top-3 left-3 bg-[#FF4136] text-white text-xs font-semibold px-3 py-1 rounded">
                            For Sale
                          </span>
                        </div>

                        <div className="px-[15px] py-[25px]">
                      {/* Title + Location */}
                      <h3 className="text-[24px] font-bold text-[#4d4d4d]">
                        {apt?.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[16px] mt-[5px] text-gray-500">
                        <FaMapMarkerAlt className="text-[#FF4136]" />
                        <span className="text-[15px]">{apt?.location}</span>
                      </div>

                      {/* Features */}
                      <div className="flex justify-between text-gray-500 border-t-1 border-b-1 py-[5px] border-[#6A7282 my-[20px]">
                        <div className="text-[20px] flex items-center gap-1">
                          <FaBed />{" "}
                          <span className="text-[18px] font-semibold">
                            {apt?.rooms?.bedrooms} Bed
                          </span>
                        </div>
                        <div className="text-[20px] flex items-center gap-1">
                          <FaBath />{" "}
                          <span className="text-[18px] font-semibold">
                            {apt?.rooms?.bathrooms} Bath
                          </span>
                        </div>
                        <div className="text-[20px] flex items-center gap-1">
                          <BiArea />{" "}
                          <span className="text-[18px] font-semibold">
                            {apt?.size}
                          </span>
                        </div>
                      </div>

                      {/* Price and button */}
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-[22px] font-bold text-[#4d4d4d] hover:text-[#FF4136] duration-300">
                          {apt?.price}
                        </p>
                        <button className="relative overflow-hidden w-fit px-[20px] py-[5px] border border-[#cacaca] rounded-[6px] text-[#222222] font-semibold transition-colors duration-500 group">
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
                    )
                  )}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PopularProperty;
