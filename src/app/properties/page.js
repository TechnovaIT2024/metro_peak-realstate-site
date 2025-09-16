import React from "react";
import TopBar from "../CommonComponents/TopBar/TopBar";
import NavBar from "../CommonComponents/NavBar/NavBar";
import Footer from "../CommonComponents/Footer/Footer";
import AllProperties from "../PageComponents/PropertiesPage/AllProperties";

const PropertiesPage = () => {
  return (
    <div>
      <div className="bg-black">
        <TopBar />
        <NavBar />
      </div>

      <div className="my-[50px]">
        <AllProperties></AllProperties>
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PropertiesPage;
