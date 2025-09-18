import React from "react";
import TopBar from "../CommonComponents/TopBar/TopBar";
import Footer from "../CommonComponents/Footer/Footer";
import NavBar from "../CommonComponents/NavBar/NavBar";
import ContactUs from "../PageComponents/ContactUsPage/ContactUs";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-black">
        <TopBar />
        <NavBar />
      </div>

      <div>
        <ContactUs></ContactUs>
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ContactPage;
