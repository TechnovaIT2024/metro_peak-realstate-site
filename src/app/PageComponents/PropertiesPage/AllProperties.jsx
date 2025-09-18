"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { BiArea } from "react-icons/bi";
import { FaBath, FaBed, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

// all properties
const AllBestProperty = [
  {
    id: "Property001",
    category: "Apartment",
    image: "https://i.ibb.co.com/Y4y5qHPB/Apartment.jpg",
    name: "Skyline Heights",
    location: "Downtown City Center, New York",
    rooms: { bedrooms: 3, bathrooms: 2 },
    size: "1450",
    price: 420000,
    description:
      "A modern apartment with breathtaking city views, spacious living area, modular kitchen, and close proximity to shopping malls, schools, and public transport.",
  },
  {
    id: "COM001",
    category: "Commercial",
    image: "https://i.ibb.co.com/zWVFMrJ3/Commercial.jpg",
    name: "Metro Business Hub",
    location: "Financial District, Chicago",
    size: "5600",
    price: 1200000,
    description:
      "A prime commercial property suitable for offices, coworking spaces, and startups. Equipped with high-speed internet, central air conditioning, and ample parking.",
  },
  {
    id: "LND001",
    category: "Land or Plot",
    image: "https://i.ibb.co.com/rR3rk1pB/Land-or-Plot.jpg",
    name: "Green Valley Plot",
    location: "Suburban Hills, Austin",
    size: "10000",
    price: 350000,
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
    size: "3200",
    price: 980000,
    description:
      "A luxurious farmhouse surrounded by vineyards, featuring a swimming pool, open patio, large garden area, and rustic interiors for a cozy countryside lifestyle.",
  },
  {
    id: "Property002",
    category: "Apartment",
    image: "https://i.ibb.co.com/Y4y5qHPB/Apartment.jpg",
    name: "Ocean Breeze Residency",
    location: "Miami Beach, Florida",
    rooms: { bedrooms: 2, bathrooms: 2 },
    size: "1200",
    price: 510000,
    description:
      "An elegant beachfront apartment with panoramic ocean views, private balcony, modern interiors, and exclusive access to a fitness center and swimming pool.",
  },
  {
    id: "COM002",
    category: "Commercial",
    image: "https://i.ibb.co.com/zWVFMrJ3/Commercial.jpg",
    name: "Tech Park Tower",
    location: "Silicon Valley, California",
    size: "12000",
    price: 2800000,
    description:
      "A state-of-the-art commercial building designed for IT companies and startups. Comes with conference rooms, cafeteria, server rooms, and sustainable green energy solutions.",
  },
];

const ITEMS_PER_PAGE = 6;

export default function AllProperties() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    let data = [...AllBestProperty];

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      data = data.filter((item) => item.category === category);
    }

    if (sort === "asc") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [search, category, sort]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, page]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  return (
    <div className="md:mx-[40px] mx-[25px] space-y-[40px]">
      {/* Filter Bar */}
      <div className="border border-[#dadada] shadow-md w-full flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-4 px-[15px] py-[20px] rounded-[8px]">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {["All", "Apartment", "Commercial", "Land or Plot", "Farm house"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setPage(1);
                }}
                className={`relative overflow-hidden md:w-fit w-full px-[15px] py-[5px] border border-[#e6e6e6] hover:border-[#FF4136] rounded-[6px] font-semibold transition-colors duration-500 group shadow-md ${
                  category === cat
                    ? "bg-[#FF4136] text-white border-[#FF4136]"
                    : "bg-white text-[#585858]"
                }`}
              >
                {/* Animated background */}
                <span className="absolute top-0 left-[-100%] w-full h-full bg-[#FF4136] transition-all duration-500 ease-in-out group-hover:left-0"></span>

                {/* Text with hover color change */}
                <span className="relative z-10 group-hover:text-white">
                  {cat}
                </span>
              </button>
            )
          )}
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          {/* Search */}
          <div className="flex items-center w-full sm:w-64 rounded-md overflow-hidden h-10 border border-[#dadada] shadow-md">
            {/* Icon Section */}
            <div className="bg-[#FF4136] flex items-center justify-center h-full w-10">
              <FaSearch className="w-4 h-4 text-white" />
            </div>

            {/* Input Section */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="flex-1 h-full px-3 text-black focus:outline-none"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            className="px-3 py-2 border border-[#dadada] rounded-md text-black focus:outline-none cursor-pointer shadow-md w-full sm:w-auto"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid md:grid-cols-3 gap-[25px]">
        {paginatedData.map((item) => (
          <div
            key={item?.id}
            className="bg-white border border-[#dbdbdb] rounded-[8px] shadow-md overflow-hidden transition-all duration-300"
          >
            {/* Same card content repeated */}
            <div className="relative">
              <div className="relative w-full h-48">
                <Image
                  src={item?.image || "/placeholder.jpg"}
                  alt={item?.name || "Property"}
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
                {item?.name}
              </h3>
              <div className="flex items-center gap-1 text-[16px] mt-[5px] text-gray-500">
                <FaMapMarkerAlt className="text-[#FF4136]" />
                <span className="text-[15px]">{item?.location}</span>
              </div>

              {/* Features */}
              <div className="flex justify-between text-gray-500 border-t-1 border-b-1 py-[5px] border-[#6A7282 my-[20px]">
                <div className="text-[20px] flex items-center gap-1">
                  <FaBed />{" "}
                  <span className="text-[18px] font-semibold">
                    {item?.rooms?.bedrooms} Bed
                  </span>
                </div>
                <div className="text-[20px] flex items-center gap-1">
                  <FaBath />{" "}
                  <span className="text-[18px] font-semibold">
                    {item?.rooms?.bathrooms} Bath
                  </span>
                </div>
                <div className="text-[20px] flex items-center gap-1">
                  <BiArea />{" "}
                  <span className="text-[18px] font-semibold">
                    {item?.size}
                  </span>
                </div>
              </div>

              {/* Price and button */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-[22px] font-bold text-[#4d4d4d] hover:text-[#FF4136] duration-300">
                  ${item?.price}
                </p>
                <Link href={'/single_property'} className="relative overflow-hidden w-fit px-[20px] py-[5px] border border-[#cacaca] rounded-[6px] text-[#FFF] bg-[#FF4136] font-semibold transition-colors duration-500 group">
                  {/* Animated background */}
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-[#000000] transition-all duration-500 ease-in-out group-hover:left-0"></span>

                  {/* Text with hover color change */}
                  <span className="relative z-10 group-hover:text-white">
                    View More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-5">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 border rounded-md bg-white text-black disabled:opacity-50"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-3 py-1 border rounded-md ${
              page === num ? "bg-[#FF4136] text-white" : "bg-white text-black"
            }`}
          >
            {num}
          </button>
        ))}
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-1 border rounded-md bg-white text-black disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
