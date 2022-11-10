import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthContext";
import useTitle from "../../../hook/useTitle";

const Register = () => {
  const[error, setError] = useState('')
  useTitle('Register')


    const { createUser , updateUserProfile , verifyEmail} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl =form.photoUrl.value;
        const email= form.email.value;
        const password = form.password.value;
        //console.log(name,photoUrl,email,password);

        createUser(
            email,
            password
        )
        .then(result=>{
            const user = result.user;
            //console.log(user);
            setError('');
            form.reset()
            handleUpdateUserProfile(name, photoUrl);
            handleVerifyEmail();
            toast.success('User Registration Success Check Mail');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //console.log(errorCode, errorMessage);
          });
    }

    const handleUpdateUserProfile = (name , photoUrl) =>{
      const profile = {
        displayName : name,
        photoURL : photoUrl
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch((error => console.log(error)))
    }

    const handleVerifyEmail = (email) =>{
      verifyEmail()
      .then(()=>{})
      .catch((error => console.log(error)))
    }




  return (
    <div className="bg-cyan-200">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-4xl">
              Register
            </h2>
            <div className="dark:text-gray-400 font-semibold">
              Create your own account
            </div>
          </div>
          <div className="mr-auto mb-32">
            <img src={''} alt="" className="h-full  w-full md:h-64 " />
          </div>
        </div>

        <div>
          <form
            onSubmit={handleRegister}
            noValidate=""
            className=" space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-sm">
                Photo URL
              </label>
              <input
                id="photoURL"
                name="photoUrl"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-3 rounded dark:bg-gray-800"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="w-full p-3 rounded dark:bg-gray-800 mb-4"
                required
              />
            </div>
            
              <button
                type="submit"
                className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">
                Register
              </button>

            <p className="text-red-600">{error}</p>
          </form>

          <p className="text-normal text-center mt-5 sm:px-6 text-black">
            Don't have an account?
            <Link
              to={"/login"}
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-gray-100"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
