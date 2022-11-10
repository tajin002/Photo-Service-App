import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Allreview = ({ review, setTogle }) => {
  const [displayRev, setDisplayRev] = useState([]);

  const { _id, img, name, userName, post } = review;

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure to delete");

    if (proceed) {
      fetch(`https://fullstack-app-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setTogle((togle) => !togle);
          if (data.deletedCount > 0) {
            toast.success("Review deleted successfully");
            const remaining = displayRev.filter((rev) => rev._id !== id);
            setDisplayRev(remaining);
          }
        });
    }
  };

  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
      {!userName ? (
        <div>
          <h1 className="text-6xl text-red-500 ml-80">No review found</h1>
        </div>
      ) : (
        <div>
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
            <Link to={`/review/${_id}`}>
              <p className="mt-2 btn">Edit</p>
            </Link>
            <p
              onClick={() => handleDelete(_id)}
              className="mt-2 text-red-500 btn"
            >
              Delete
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Allreview;
