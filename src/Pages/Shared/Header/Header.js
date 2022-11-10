import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthContext";
import {FaUser } from "react-icons/fa";
import logo from "../../../assests/logo/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <header className="p-4 bg-gray-800 text-gray-100 fixed w-full z-20">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img className="h-6" src={logo} alt="logo" />
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to="/home"
                className="flex items-center px-4 -mb-1 text-xl font-semibold text-teal-400"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <Link
                to="/services"
                className="flex items-center px-4 -mb-1 text-xl font-semibold text-teal-400"
              >
                Services
              </Link>
            </li>
            {user?.uid ? (
              <div className="flex">
                <li className="flex">
                  <Link
                    to="/review"
                    className="flex items-center px-4 -mb-1 text-xl font-semibold text-teal-400"
                  >
                    My Reviews
                  </Link>
                </li>

                <li className="flex">
                  <Link
                    to="/product"
                    className="flex items-center px-4 -mb-1 text-xl font-semibold text-teal-400"
                  >
                    Add Service
                  </Link>
                </li>
              </div>
            ) : (
              <p></p>
            )}
            <li className="flex">
              <Link
                to="/blog"
                className="flex items-center px-4 -mb-1 text-xl font-semibold text-teal-400"
              >
                Blog
              </Link>
            </li>
          </ul>

          <div className="items-center flex-shrink-0 hidden lg:flex">
            {user?.photoURL ? (
              <img
                title={user?.displayName}
                className="rounded-full h-16 mr-8"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <FaUser title="user name" className="mr-8 h-16 w-8" />
            )}

            {user?.uid ? (
              <div>
                <button
                  onClick={handleLogOut}
                  className="self-center px-8 py-3 font-semibold rounded bg-teal-400 text-gray-900"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="self-center px-8 py-3 font-semibold rounded bg-teal-400 text-gray-900">
                  Sign in
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
