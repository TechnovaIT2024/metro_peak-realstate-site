import React from "react";
import TopBar from "../CommonComponents/TopBar/TopBar";
import NavBar from "../CommonComponents/NavBar/NavBar";
import Footer from "../CommonComponents/Footer/Footer";
import SingleProperty from "../PageComponents/PropertiesPage/SingleProperty";

const SinglePropertyPage = () => {
  return (
    <div>
      <div className="bg-black">
        <TopBar />
        <NavBar />
      </div>

      <div>
        <SingleProperty></SingleProperty>
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SinglePropertyPage;
