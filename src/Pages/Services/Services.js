import React, { useEffect, useState } from "react";
import image from "../../assests/header/iimage4.jpg";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div
        className="hero"
        style={{ backgroundImage: `url(${image})`, height: 600 }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl text-amber-300 font-bold">
            Explore our services
          </h1>
          <p className="mb-5 text-gray-300">
            Get to our exciting services which we produce in every sector. Our
            work is very realistick type in any other organization of
            photography
          </p>
        </div>
      </div>
      {/* title of the services page */}
      <div>
        <h3 className="text-center text-4xl mt-2 text-orange-600 font-semibold">Our Services</h3>
        <p className="text-center text-5xl font-bold font-serif mt-5 mb-5">We Provide Best PhotoGraphy <br /> and explore to you different Angel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5 px-80">
        {/* maping services */}
        {services.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Services;