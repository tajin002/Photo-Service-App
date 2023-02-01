import React, { useEffect, useState } from "react";
import image from "../../assests/header/iimage4.jpg";
import useTitle from "../../hook/useTitle";
import ServiceItem from "./ServiceItem";

const Services = () => {
  useTitle('Service')
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fullstack-app-server.vercel.app/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data)
        setLoading(false);

      });
  }, []);

  return (
    <div>
      {
        loading ? 
        <div className='absolute top-[50vh] left-[50vw] translate-x-[-50%] '><progress className="progress progress-error w-56"  max="100"></progress></div>
        :
        null
      }
       
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-32 pt-5 px-80">
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
