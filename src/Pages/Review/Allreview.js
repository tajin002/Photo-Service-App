import React from "react";

const Allreview = ({ review }) => {
  const { img, name, userName, post } = review;
  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={img}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{userName}</h4>
          </div>
        </div>
            <p>{name}</p>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{post}</p>
      </div>
      <div className="flex justify-between">
        <p className="mt-2">Edit</p>
        <p className="mt-2 text-red-500">Delete</p>
      </div>
    </div>
  );
};

export default Allreview;
