import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../hook/useTitle";

const Product = () => {
  useTitle('Add Service')

    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
         const img = form.img.value;
         const detail = form.detail.value;
        // console.log(name,image,detail);

        const product = {
            name: name,
            img: img,
            detail: detail

        }


        fetch("https://fullstack-app-server.vercel.app/home", {
            method: "POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.acknowledged){
            toast.success('Service added successfully');
                event.target.reset();
          }
        })


    }

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-red-400 text-gray-100">
      <div className="flex flex-col justify-between pt-64">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's add services
          </h2>
          <div className="dark:text-gray-400">
            Offer to client add your service.
          </div>
        </div>
        <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
      </div>

      <form
        onSubmit={handleAddProduct}
        className="space-y-6 ng-untouched ng-pristine ng-valid mt-24"
      >
        <div>
          <label for="name" className="text-sm">
            Full name
          </label>
          <input
          name="name"
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded bg-gray-800"
          />
        </div>
        <div>
          <label for="email" className="text-sm">
            ImageURL
          </label>
          <input
            name="img"
            id="img"
            type="text"
            className="w-full p-3 rounded bg-gray-800"
          />
        </div>
        <div>
          <label for="message" className="text-sm">
            Detail
          </label>
          <textarea
            name = "detail"
            id="detail"
            rows="3"
            className="w-full p-3 rounded bg-gray-800"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-teal-400 text-gray-900"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Product;
