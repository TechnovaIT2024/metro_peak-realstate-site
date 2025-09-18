import React from "react";

const SingleProperty = [
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
];

const SinglePropertyPage = () => {
  return (
    <div className="md:mx-[40px] mx-[25px] space-y-[40px] my-[50px]">
      <p>this is single Property Page for demo</p>
    </div>
  );
};

export default SinglePropertyPage;
