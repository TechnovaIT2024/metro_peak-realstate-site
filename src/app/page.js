import React from "react";
import NavBar from "./CommonComponents/NavBar/NavBar";
import TopBar from "./CommonComponents/TopBar/TopBar";
import HeroSectionBackground from "./PageComponents/HomePage/HeroSectionBackground";
import SearchField from "./PageComponents/HomePage/SearchField";
import PopularProperty from "./PageComponents/HomePage/BestProperty";
import ChooseUs from "./PageComponents/HomePage/ChooseUs";
import FeaturedProperties from "./PageComponents/HomePage/FeaturedProperties";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* ---------------- Hero Section ---------------- */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[110vh]">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <HeroSectionBackground />
        </div>

        {/* Navigation & TopBar */}
        <div className="relative z-50">
          <TopBar />
          <NavBar />
        </div>
      </div>

      {/* ---------------- Search Field Section ---------------- */}
      <div className="relative z-50">
        <SearchField />
      </div>

      {/* ---------------- Other Sections ---------------- */}
      <div className="md:mx-[40px] mx-[25px]">
        <PopularProperty></PopularProperty>
      </div>

      <div className="md:mt-[40px] mt-[25px]">
        <ChooseUs></ChooseUs>
      </div>

      <div className="md:mx-[40px] mx-[25px]">
        <FeaturedProperties></FeaturedProperties>
      </div>
      
    </div>
  );
};

export default HomePage;
