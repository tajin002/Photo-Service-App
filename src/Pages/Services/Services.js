import React from "react";
import image from '../../assests/header/iimage4.jpg'

const Services = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${image})`, height: 600 }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl text-red-300 font-bold">Explore our services</h1>
        <p className="mb-5 text-gray-300">Get to our exciting services which we produce in every sector. Our work is very
            realistick type in any other organization of photography
        </p>
      </div>
    </div>
  );
};

export default Services;
