import React from "react";
import header from "../../../assests/header/image.jpg";

const Banner = () => {
  return (
    <div className="mx-auto mb-36">
      <div
        className="hero min-h-screen"
        style={{
          background: `url(${header})`,
          backgroundSize: "cover",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-neutral-content ml-96 pl-96">
          <div className=" lg:pr-96 sm:pr-0 ml-96 pl-80">
            <h1 className="mb-5 text-7xl font-bold">
              ALWAYS BE <br /> ORIGINAL
            </h1>
            <p className="mb-5 mt-5">
              We Offer you best photography and also video of Original
              <br /> real stick view on your , <br />
              wedding, hangout and your event.
            </p>
            <button className="btn btn-bg-green-100 lg:btn-lg">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
