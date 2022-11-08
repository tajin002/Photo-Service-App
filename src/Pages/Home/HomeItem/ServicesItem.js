import React from "react";
import { useState, useEffect } from "react";
import ServiceITem from "./ServiceITem";

const ServicesItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
        <h1 className="text-center text-6xl font-bold pb-16">Explore to our services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5 px-72 pb-10">
        {items.map((item) => (
          <ServiceITem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ServicesItem;
