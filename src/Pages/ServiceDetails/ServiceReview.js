import React from "react";

const ServiceReview = ({ review }) => {
  const { img, userName, name, post } = review;
  console.log(review);
  return (
    <div>
      <div class="max-w-2xl px-8 py-4 shadow-md bg-indigo-500 ml-36 mb-4">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-400">
            Mar 10, 2019
          </span>
        </div>

        <div class="mt-2">
          <p
            class="text-2xl font-bold text-white hover:text-gray-600"
            tabindex="0"
          >
            {name}
          </p>
          <p class="mt-2 text-gray-300">
            {post}
          </p>
        </div>

        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center">
            <img className="h-16 ml-2 mr-2 rounded-full" src={img} alt="" />
            <p
              class="font-bold  text-gray-200"
              tabindex="0"
            >
              {userName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReview;
