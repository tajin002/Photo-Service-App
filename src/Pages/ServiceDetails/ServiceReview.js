import React from "react";

const ServiceReview = ({ review }) => {
  const {img,name,serviceName} = review

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{serviceName}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default ServiceReview;
