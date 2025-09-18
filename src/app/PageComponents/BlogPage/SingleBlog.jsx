import React from 'react';


const SingleBlogsData = [
  {
    id: "blog001",
    date: "10th Sep",
    time: "10:30 AM",
    title: "The Future of Modern Apartments",
    description:
      "Explore how urban living is transforming with state-of-the-art apartments featuring smart technology, eco-friendly design, and luxurious amenities for city dwellers.",
    image: "https://i.ibb.co.com/Y4y5qHPB/Apartment.jpg",
  }
];


const SingleBlog= () => {
    return (
        <div className="md:mx-[40px] mx-[25px] space-y-[40px]">
            <p>this is single Blog Page demo</p>
        </div>
    );
};

export default SingleBlog;