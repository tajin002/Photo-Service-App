import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { img,name,detail } = useLoaderData();
  return (
    <section className="p-4 lg:p-8 dark:text-gray-100">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src={img}
            alt=""
            className="h-96 pt-24"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 pt-24">
            <h3 className="text-3xl font-bold">
              {name}
            </h3>
            <p className="my-6 dark:text-gray-400">
              {detail}
            </p>
            {/* <button type="button" className="self-start">
              Action
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
