import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthContext";
import useTitle from "../../../hook/useTitle";

const Login = () => {

    const {signIn, setLoading , user , googleProviderLogin , gitProviderLogin} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    useTitle('signIn')

    const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result=>{
        const user = result.user;
        // console.log(user);
        form.reset();
       if(user?.email){
        navigate(from, {replace: true});
       }
       else{
        alert('please login')
       }

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //console.log(errorCode, errorMessage);
        setLoading(false)
      });
  };


  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () =>{
    googleProviderLogin(googleProvider);
}

  const gitProvider = new GithubAuthProvider();
  const handleGitLogin = () =>{
    gitProviderLogin(gitProvider);
  }
  return (
    <div className="relative">
      
      <img
        src="https://t3.ftcdn.net/jpg/03/99/24/82/360_F_399248286_Ogm0T8CFeauN4Hdn42FqWfsCE02dJBbX.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a{" "}
                <span className="text-teal-accent-400">lazy dog</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-blue-300 rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign in your account
                </h3>

                {/* form submit with google and github */}
                <div className="my-6 space-y-4">
                  <button
                    onClick={handleGoogleLogin}
                    aria-label="Login with Google"
                    type="button"
                    className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-teal-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                  </button>


                  <button
                    onClick={handleGitLogin}
                    aria-label="Login with GitHub"
                    role="button"
                    className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-teal-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                    <p>Login with GitHub</p>
                  </button>
                </div>

                {/* form submit login with email & password */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      placeholder="tajinshawon@gmail.com"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-100 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Your Password
                    </label>
                    <input
                      placeholder="*******"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-100 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    >
                     Sign in
                    </button>
                  </div>
                  <p className="text-blue-700 font-semibold sm:text-sm">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
