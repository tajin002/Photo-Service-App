import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthContext";
import ServiceReview from "./ServiceReview";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { img, name, detail } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [toogle, setToggle] = useState(true);
  console.log(name);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const post = form.post.value;
    const userName = user?.displayName;
    const img = user?.photoURL;
    console.log(post, name, img);

    const comment = {
      post,
      userName,
      name,
      img,
    };

    // here we post function update
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        setToggle((toogle) => !toogle);
        form.reset()
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/review/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [name, toogle]);

  return (
    <div>
      <section className="p-4 lg:p-8 dark:text-gray-100">
        <div className="container mx-auto space-y-12 mt-24">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img className="h-96" src={img} alt="services images" />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 pt-8">
              <h3 className="text-3xl font-bold">{name}</h3>
              <p className="my-6 dark:text-gray-400">{detail}</p>
              <form onSubmit={handlePlaceOrder}>
                <textarea
                  className="border-2 border-blue-600"
                  name="post"
                  id=""
                  cols="50"
                  rows="3"
                ></textarea>{" "}
                <br />
               {
                user?.uid ?
                <button
                className="border-2 bg-blue-600 text-white pt-2 pb-2 pl-4 pr-4 rounded-xl"
                type="submit"
              >
                Post
              </button>
              :
              <div>
                <p >Please login for post your comment</p>
                <Link to={'/login'}><span>Login</span></Link>
              </div>
              
               }
              </form>
              
            </div>
          </div>
        </div>
      </section>

      <div>

        <h1 className="text-center text-5xl font-bold p-4">WHAT ARE CLIENTS SAY</h1>
        <p className="text-center text-xl font-semibold mb-16">Good Service and good quality is our goal. Client happiness <br /> our happiness</p>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-16">
          {reviews.map((review) => (
            <ServiceReview key={review._id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
