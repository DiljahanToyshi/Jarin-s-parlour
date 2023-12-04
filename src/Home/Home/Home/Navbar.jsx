import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../Components/Providers/AuthProvider";
import avatarImg from '../../../assets/images/placeholder.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user,logOut}= useContext(AuthContext);
  return (
    <div className="bg-red-50 p-3 px-6 py-5 mx-auto lg:px-12">
      <div className="relative  flex items-center justify-between">
        <Link to="/" className="inline-flex ">
          <img src={logo} className="h-12" alt="logo" />
        </Link>
        {/* nav item */}
        <ul className="items-center hidden space-x-8 lg:flex md:m-4 px-8">
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Our Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Contact Us
            </NavLink>
          </li>
     <li>  
       <Link to='/dashboard/book'>  <img
      className='rounded-full'
      src={user && user.photoURL ? user.photoURL : avatarImg}
      alt='profile'
      title={user && user.displayName ? user.displayName : " "}
      height='36'
      width='36'
    /></Link>
    </li>
          {user ? (
              <div
                onClick={logOut}
                className="btn px-6 text-white bg-[#F63E7B] font-semibold hover:bg-rose-100 hover:text-[#F63E7B]"              >
                Logout
              </div>
            ) : (
              <>
                <li>
          <NavLink to="/login"
> <button className="btn px-6 text-white bg-[#F63E7B] font-semibold hover:bg-rose-100 hover:text-[#F63E7B]">Login</button></NavLink> {" "}
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Sign Up
            </NavLink>
          </li>
              </>
            )}
       
        </ul>{" "}
        {/* Mobile navbar section */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)} title="Open Menu">
            <Bars3Icon className="w-5 text-rose-600"></Bars3Icon>
          </button>
          {isMenuOpen && (
            <div className="absolute -top-5 left-0 w-full z-10">
              <div className="p-5 bg-rose-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {" "}
                    <Link to="/" className="inline-flex ">
                      <img src={logo} className="h-12" alt="logo" />
                    </Link>
                  </div>
                  {/* Dropdown close button */}

                  <div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      title="Close Menu"
                    >
                      <XMarkIcon className="w-5 text-rose-600"></XMarkIcon>
                    </button>
                  </div>
                </div>
                {/* mobile nav items section */}
                <nav>
                <ul className=" space-y-4 ">
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Our Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>  
       <Link to='/dashboard/book'>  <img
      className='rounded-full m-auto'
      src={user && user.photoURL ? user.photoURL : avatarImg}
      alt='profile'
      title={user && user.displayName ? user.displayName : " "}
      height='36'
      width='36'
    /></Link>
    </li>
          {user ? (
              <div
                onClick={logOut}
                className="btn px-6 text-white bg-[#F63E7B] font-semibold hover:bg-rose-100 hover:text-[#F63E7B]"              >
                Logout
              </div>
            ) : (
              <>
                <li>
          <NavLink to="/login"
> <button className="btn px-6 text-white bg-[#F63E7B] font-semibold hover:bg-rose-100 hover:text-[#F63E7B]">Login</button></NavLink> {" "}
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "text-rose-600 font-semibold" : "default font-medium"
              }
            >
              Sign Up
            </NavLink>
          </li>
              </>
            )}
         
        </ul>{" "} 
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
