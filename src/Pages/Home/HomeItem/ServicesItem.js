import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceITem from "./ServiceITem";

const ServicesItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fullstack-app-server.vercel.app/home")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-6xl font-bold pb-16">
        Explore to our services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5 px-72 pb-10">
        {items.map((item) => (
          <ServiceITem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link to="/services">
          <button className="text-2xl font-bold border-l-orange-400 bg-green-600 text-white p-2 rounded-lg mb-24">
            See All
          </button>
        </Link>
      </div>

      <section className="p-6 bg-gray-800 text-gray-100 mb-10">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center dark:text-gray-50">
            Get more our fantastic services feel !!!
          </h2>
          <div className="grid gap-6 my-16 lg:grid-cols-3">
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-teal-400 text-gray-900">
                1
              </div>
              <p className="text-2xl font-semibold">
                <b>Nulla.</b>Nostrum, corrupti blanditiis. Illum, architecto?
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-teal-400 text-gray-900">
                2
              </div>
              <p className="text-2xl font-semibold">
                <b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor
                veniam alias debitis?
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-teal-400 dark:text-gray-900">
                3
              </div>
              <p className="text-2xl font-semibold">
                <b>Maxime.</b>Expedita temporibus culpa reprehenderit doloribus
                consectetur odio!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-gray-500">
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10 mb-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-teal-400 text-gray-900"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
