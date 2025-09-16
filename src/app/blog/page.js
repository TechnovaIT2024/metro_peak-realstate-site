import React from "react";
import TopBar from "../CommonComponents/TopBar/TopBar";
import NavBar from "../CommonComponents/NavBar/NavBar";
import Footer from "../CommonComponents/Footer/Footer";
import AllBlogs from "../PageComponents/BlogPage/AllBlogs";

const BlogPage = () => {
  return (
    <div>
      <div className="bg-black">
        <TopBar />
        <NavBar />
      </div>

      <div>
        <AllBlogs></AllBlogs>
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BlogPage;
