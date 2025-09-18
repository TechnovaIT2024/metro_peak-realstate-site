"use client";

import React, { useState } from "react";
import { FaChevronCircleDown, FaHeart } from "react-icons/fa";
import shape1 from "../../../../public/shape.png";
import shape2 from "../../../../public/shape (2).png";
import shape3 from "../../../../public/shape (3).png";

// gallery Images
import galleryImage1 from "../../../../public/gallrey image 1.jpg";
import galleryImage2 from "../../../../public/gallrey image 2.jpg";
import galleryImage3 from "../../../../public/gallrey image 3.jpg";
import galleryImage4 from "../../../../public/gallrey image 4.jpg";
import galleryImage5 from "../../../../public/gallrey image 5.jpg";

import Image from "next/image";
import Link from "next/link";

const blogsData = [
  {
    id: "blog001",
    date: "10th Sep",
    time: "10:30 AM",
    title: "The Future of Modern Apartments",
    description:
      "Explore how urban living is transforming with state-of-the-art apartments featuring smart technology, eco-friendly design, and luxurious amenities for city dwellers.",
    image: "https://i.ibb.co.com/Y4y5qHPB/Apartment.jpg",
  },
  {
    id: "blog002",
    date: "11th Sep",
    time: "2:15 PM",
    title: "Commercial Real Estate Trends in 2025",
    description:
      "Commercial spaces are evolving with flexible layouts, hybrid office models, and eco-conscious architecture. Here’s what investors should know this year.",
    image: "https://i.ibb.co.com/zWVFMrJ3/Commercial.jpg",
  },
  {
    id: "blog003",
    date: "12th Sep",
    time: "9:45 AM",
    title: "Investing in Land Plots for the Long Run",
    description:
      "Land investments remain one of the safest bets in real estate. Learn why suburban plots are gaining popularity among both homeowners and developers.",
    image: "https://i.ibb.co.com/rR3rk1pB/Land-or-Plot.jpg",
  },
  {
    id: "blog004",
    date: "13th Sep",
    time: "4:00 PM",
    title: "The Rise of Farmhouse Living",
    description:
      "Discover the charm of farmhouses offering a blend of rustic lifestyle with modern comforts. Perfect for weekend getaways or permanent residences.",
    image: "https://i.ibb.co.com/vCwnwZn8/Farm.jpg",
  },
  {
    id: "blog005",
    date: "14th Sep",
    time: "11:20 AM",
    title: "Beachfront Apartments: A Lifestyle Upgrade",
    description:
      "Living by the beach isn’t just a dream. See how beachfront apartments are becoming a popular choice for professionals and retirees alike.",
    image: "https://i.ibb.co.com/Y4y5qHPB/Apartment.jpg",
  },
  {
    id: "blog006",
    date: "15th Sep",
    time: "6:45 PM",
    title: "Tech Hubs and Commercial Property Demand",
    description:
      "The growth of technology hubs has created an increasing demand for commercial office spaces. Here’s why investors are flocking to tech-driven areas.",
    image: "https://i.ibb.co.com/zWVFMrJ3/Commercial.jpg",
  },
];

const shapeImages = [shape1, shape2, shape3];

const AllBlogs = () => {
  // store like status by blog id
  const [likedBlogs, setLikedBlogs] = useState({});

  const toggleLike = (id) => {
    setLikedBlogs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="mx-5 md:mx-10 my-[50px] space-y-10">
      <div className="md:flex flex-row-reverse items-center gap-[25px] md:space-y-0 space-y-[20px] mb-[60px]">
        <div className="inline-grid grid-cols-3 gap-[20px] md:w-[55%] w-full">

          <div className="overflow-hidden col-span-2 rounded-lg h-[200px] shadow-lg border border-transparent hover:border-[#ff4136] transition-all duration-300">
            <Image
              src={galleryImage1}
              alt="Gallery Image 1"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-lg row-span-2 h-[420px] shadow-lg border border-transparent hover:border-[#ff4136] transition-all duration-300">
            <Image
              src={galleryImage2}
              alt="Gallery Image 2"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-lg h-[200px] shadow-lg border border-transparent hover:border-[#ff4136] transition-all duration-300">
            <Image
              src={galleryImage3}
              alt="Gallery Image 3"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-lg h-[200px] shadow-lg border border-transparent hover:border-[#ff4136] transition-all duration-300">
            <Image
              src={galleryImage4}
              alt="Gallery Image 4"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        <div className="md:w-[45%] w-full">
          {/* title div with cards */}
          <div>
            <p className="text-[20px] font-bold border-b-2 border-[#FF4136] w-fit pe-[8px] text-[#383838]">
              Our Blogs
            </p>
            <h3 className="md:text-[40px] text-[30px] font-bold uppercase text-[#000000] leading-[50px] my-[10px]">
              Stay Ahead in Real Estate <br /> with
              <span className="text-[#FF4136] italic"> Metro Peak</span>
            </h3>

            <p className="text-[16px] font-medium italic text-[#383838]">
              Discover expert insights, market trends, and helpful tips in our
              blog section. From investment strategies to lifestyle inspiration,
              we bring you trusted knowledge to guide your real estate journey.
            </p>

            <button className="relative overflow-hidden w-fit px-[20px] py-[8px] border rounded-[6px] text-[#ffffff] bg-black font-semibold transition-colors duration-500 group mt-[20px]">
              {/* Animated background */}
              <span className="absolute top-0 left-[-100%] w-full h-full bg-[#FF4136] transition-all duration-500 ease-in-out group-hover:left-0"></span>

              {/* Text with hover color change */}
              <div className="relative z-10 flex items-center gap-[10px]">
                <span className=" group-hover:text-white uppercase">
                  Read Blogs
                </span>
                <FaChevronCircleDown className="text-[24px]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {[0, 2, 4].map((startIndex, rowIndex) => {
        const shape = shapeImages[rowIndex];
        return (
          <div
            key={startIndex}
            className={`flex flex-col md:flex-row gap-4 md:gap-6 ${
              rowIndex % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* 20% Div with shape + L shaped borders */}
            <div className="w-full md:w-[20%] rounded-lg flex items-center justify-center relative">
              {/* Top-left (┌) */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FF4136]"></div>

              {/* Top-right (┐) */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF4136]"></div>

              {/* Bottom-left (└) */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF4136]"></div>

              {/* Bottom-right (┘) */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FF4136]"></div>

              <div className="relative w-[150px] h-[150px] flex items-center justify-center">
                <Image
                  src={shape}
                  alt={`shape-${rowIndex}`}
                  width={100}
                  height={100}
                  className="absolute object-contain animate-spin"
                  style={{ animation: "spin 10s linear infinite" }}
                />
              </div>

              <style>
                {`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}
              </style>
            </div>

            {/* 80% Div with Blogs */}
            <div className="w-full md:w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogsData.slice(startIndex, startIndex + 2).map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-[#dbdbdb] relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]"
                >
                  {/* Image with Date Badge + Like Button */}
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />

                    {/* Date Badge */}
                    <span className="absolute bottom-0 left-0 rounded-tr-[4px] bg-[#FF4136] text-white text-[18px] font-semibold px-[15px] py-[10px]">
                      {blog.date}
                    </span>

                    {/* Like Button on Top-Right */}
                    <button
                      onClick={() => toggleLike(blog.id)}
                      className="absolute top-2 right-2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
                    >
                      <FaHeart
                        size={20}
                        className={`transition-colors ${
                          likedBlogs[blog.id]
                            ? "text-[#FF4136]"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className=" px-[15px] py-[15px] flex flex-col gap-[5px]">
                    <h3 className="text-[20px] md:text-[24px] font-bold">
                      {blog.title}
                    </h3>
                    <p className="text-[16px] text-gray-700 line-clamp-3">
                      {blog.description}
                    </p>

                    <Link href={'/single_blog'} className="relative overflow-hidden w-fit px-[20px] py-[5px] border bg-[#FF4136] rounded-[6px] text-[#ffffff] font-semibold transition-colors duration-500 group mt-[15px]">
                      {/* Animated background */}
                      <span className="absolute top-0 left-[-100%] w-full h-full bg-[#000] transition-all duration-500 ease-in-out group-hover:left-0"></span>
                      <span className="relative z-10 group-hover:text-white">
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBlogs;
