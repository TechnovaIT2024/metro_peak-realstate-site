import Image from "next/image";
import React from "react";
import { BiArea } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBath, FaBed } from "react-icons/fa6";

// ✅ Fake JSON data (same as yours)
const AllBestProperty = [
  {
    id: "Property001",
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
    id: "Property002",
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

const FeaturedProperties = () => {
  return (
    <div>
      <div className="text-start mt-[50px] mb-[40px]">
        <h2 className="md:text-[35px] text-[28px] font-bold uppercase">
          Featured{" "}
          <span className="text-[#FF4136] border-b-2 pb-[0.5px]">
            Property's
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-[25px]">
        {AllBestProperty.map((Property) => (
          <div
            key={Property?.id}
            className="bg-white border border-[#dbdbdb] rounded-[8px] shadow-md overflow-hidden hover:border-[#FF4136] transition-all duration-300"
          >
            {/* Same card content repeated */}
            <div className="relative">
              <div className="relative w-full h-48">
                <Image
                  src={Property?.image || "/placeholder.jpg"}
                  alt={Property?.name || "Property"}
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
                {Property?.name}
              </h3>
              <div className="flex items-center gap-1 text-[16px] mt-[5px] text-gray-500">
                <FaMapMarkerAlt className="text-[#FF4136]" />
                <span className="text-[15px]">{Property?.location}</span>
              </div>

              {/* Features */}
              <div className="flex justify-between text-gray-500 border-t-1 border-b-1 py-[5px] border-[#6A7282 my-[20px]">
                <div className="text-[20px] flex items-center gap-1">
                  <FaBed />{" "}
                  <span className="text-[18px] font-semibold">
                    {Property?.rooms?.bedrooms} Bed
                  </span>
                </div>
                <div className="text-[20px] flex items-center gap-1">
                  <FaBath />{" "}
                  <span className="text-[18px] font-semibold">
                    {Property?.rooms?.bathrooms} Bath
                  </span>
                </div>
                <div className="text-[20px] flex items-center gap-1">
                  <BiArea />{" "}
                  <span className="text-[18px] font-semibold">
                    {Property?.size}
                  </span>
                </div>
              </div>

              {/* Price and button */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-[22px] font-bold text-[#4d4d4d] hover:text-[#FF4136] duration-300">
                  {Property?.price}
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
    </div>
  );
};

export default FeaturedProperties;
