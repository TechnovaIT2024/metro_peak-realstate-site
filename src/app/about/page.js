import React from "react";
import TopBar from "../CommonComponents/TopBar/TopBar";
import NavBar from "../CommonComponents/NavBar/NavBar";
import Footer from "../CommonComponents/Footer/Footer";
import WhoWeAre from "../PageComponents/AboutPage/WhoWeAre";
import OurServices from "../PageComponents/AboutPage/OurServices";
import SoldProperties from "../PageComponents/HomePage/SoldProperties";
import Review from "../PageComponents/HomePage/Review";

const AboutUsPage = () => {
  return (
    <div>
        {/* NavBar */}
      <div className="bg-black">
        <TopBar />
        <NavBar />
      </div>

      {/* others sections */}
      <div className="mt-[60px] md:mx-[40px] mx-[25px]">
        <WhoWeAre></WhoWeAre>
      </div>

      <div className="mt-[60px] md:mx-[40px] mx-[25px]">
        <OurServices></OurServices>
      </div>

      <div className="md:mt-[50px] mb-[50px] mt-[40px]">
        <SoldProperties></SoldProperties>
      </div>

      <div className="md:my-[60px] my-[40px] md:mx-[40px] mx-[25px]">
        <Review></Review>
      </div>

      {/* footer */}
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUsPage;
