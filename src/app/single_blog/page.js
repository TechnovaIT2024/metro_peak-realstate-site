import React from 'react';
import TopBar from '../CommonComponents/TopBar/TopBar';
import NavBar from '../CommonComponents/NavBar/NavBar';
import Footer from '../CommonComponents/Footer/Footer';
import SingleBlog from '../PageComponents/BlogPage/SingleBlog';

const SingleBlogPage = () => {
    return (
        <div>
      <div className="bg-black">
        <TopBar />
        <NavBar />
      </div>

      <div className="my-[50px]">
        <SingleBlog></SingleBlog>
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
    );
};

export default SingleBlogPage;