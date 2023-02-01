import React from "react";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceITem = ({ item }) => {
  const { _id, name, detail, img } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} className="h-62" alt="images of service" />

          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{detail.slice(0,100)+('....')}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default ServiceITem;
