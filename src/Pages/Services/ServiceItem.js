import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { _id, name, img, detail , price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} className="h-62" alt="Shoes" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{detail.slice(0, 100) + "..."}</p>
        <p className='text-xl font-semibold'>Price : ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary w-80 mr-5">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
