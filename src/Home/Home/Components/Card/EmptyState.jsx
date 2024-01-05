import React from "react";
import { Link } from "react-router-dom";
const EmptyState = ({ message, address,label }) => {
  return (
    <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16 ">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      <Link to={address}>
<div    className="btn text-white bg-[#F63E7B] font-semibold px-7 hover:text-[#F63E7B] outline-2 hover:outline-[#F63E7B] "
>{label}</div>      </Link>
    </div>
  );
};

export default EmptyState;
