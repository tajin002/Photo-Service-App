import React from "react";
import { Link, useLoaderData , useParams } from "react-router-dom";

const Update = () => {
  const {id} = useParams();

  const handleUpdate = (event) =>{
        event.preventDefault();
        const form = event.target;
        const update = form.update.value;
        // console.log(update)

      fetch(`https://fullstack-app-server.vercel.app/review/${id}` , {
        method : 'PATCH',
        headers: {
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({post: update})

    })
    .then(res=>res.json())
     .then(data => console.log(data))
    }

  return (
    <div>
      <div
        className="hero"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` , height: 400, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Update Your comment</h1>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="mb-24 ml-80">

      <form onSubmit={handleUpdate}>
        <textarea
          className="border-2 border-blue-600 mt-24"
          name="update"
          id=""
          cols="50"
          rows="3"
        ></textarea>{" "}
        <br />
        <button className="bg-blue-400 text-2xl font-bold p-1 rounded-md text-white" type="submit">Update</button>
        <Link to ="/review"><button className="ml-8 bg-green-400 text-2xl font-bold p-1 rounded-md text-white">Go back review</button></Link>
      </form>
      </div>
    </div>
  );
};

export default Update;
