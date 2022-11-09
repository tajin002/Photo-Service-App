import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthContext";
import ServiceReview from "./ServiceReview";

const ServiceDetails = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  const {img, name, detail} = useLoaderData();
  const [reviews, setReviews] = useState([]);

    const handlePlaceOrder = event =>{
      event.preventDefault();
      const form = event.target;
      const textArea = form.post.value;
      const name = user?.displayName;
      const photo = user?.photoURL
      console.log(textArea , name, photo);

    }

  useEffect(()=>{
    fetch(`http://localhost:5000/review/${name}`)
    .then(res=>res.json())
    .then(data=>{
      setReviews(data)
    })
  },[name])


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
              <textarea className="border-2 border-blue-600" name="post" id="" cols="50" rows="3"></textarea> <br />
              <button className="border-2 bg-blue-600 text-white pt-2 pb-2 pl-4 pr-4 rounded-xl" type="submit">Post</button>
            </form>
            </div>
          </div>
        </div>
      </section>
        <div></div>
        <div>
          {
            reviews.map(review=> <ServiceReview key={review._id} review={review} />)
          }
        </div>

    </div>
  );
};

export default ServiceDetails;
