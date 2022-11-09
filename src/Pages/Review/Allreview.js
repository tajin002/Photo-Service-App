import React, { useState } from "react";
const Allreview = ({ review , setTogle}) => {

  // const {user} = useContext(AuthContext);
  const [displayRev, setDisplayRev] = useState([]);
  console.log(displayRev);
  const {_id, img, name, userName, post } = review;


  
  const handleDelete = id => {
    const toast = window.confirm('are you sure to delete')

      if(toast){
        fetch(`http://localhost:5000/review/${id}`,{
            method : 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
          setTogle((togle)=>!togle)
           if(data.deletedCount > 0){
            alert('deleted succesfully');
            const remaining = displayRev.filter(rev => rev._id !== id)
            setDisplayRev(remaining)
           }
        })
      }
  }


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
        <p onClick={()=>handleDelete(_id)} className="mt-2 text-red-500 btn">Delete</p>
      </div>
    </div>
  );
};

export default Allreview;