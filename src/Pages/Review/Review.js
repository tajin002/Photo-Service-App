import React, { useEffect, useState } from "react";
import Allreview from "./Allreview";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [togle,setTogle] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [togle]);

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
          height: 400,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">All client Review here </h1>
          </div>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 mb-8">
          {
            reviews.map(review => <Allreview key={review._id} review={review} setTogle={setTogle} />)
          }
        </div>
    </div>
  );
};

export default Review;
