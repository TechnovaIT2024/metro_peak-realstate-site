import React from "react";
import NavBar from "./CommonComponents/NavBar/NavBar";
import TopBar from "./CommonComponents/TopBar/TopBar";
import HeroSectionBackground from "./PageComponents/HomePage/HeroSectionBackground";

const HomePage = () => {
  return (
    <div className="">

      {/* navigation div */}
      <div className="relative z-50">
        <div>
          <TopBar></TopBar>
        </div>
        <div>
          <NavBar></NavBar>
        </div>
      </div>

      {/* background image/video div */}
      <div className="w-full absolute top-0">
        <HeroSectionBackground></HeroSectionBackground>
      </div>
    </div>
  );
};

export default HomePage;
