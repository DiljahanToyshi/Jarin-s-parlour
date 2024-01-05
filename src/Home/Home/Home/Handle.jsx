import React from "react";
import img from "../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const Handle = () => {
  return (
    <div className="bg-rose-50 md:flex gap-14 lg:gap-20 p-3 md:p-5 lg:p-16 my-3 md:my-5 lg:my-9">
      <img data-aos="zoom-in-right" data-aos-easing="linear"
     data-aos-duration="1500" src={img} alt="" className="object-cover min:h-48 md:w-1/2 mx-auto md:mx-0" />
      <div data-aos="zoom-in-left" data-aos-easing="linear"
     data-aos-duration="1500" className=" text-start grid grid-cols-1">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
          Let us handle your screen <span className="text-[#F63E7B]">Professionally</span>.
        </h1>
        <h3 className="text-xl leading-none text-start md:my-1 lg:my-5">
          With well-written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
        </h3>
        <div className="flex gap-12 md:gap-16 lg:gap-20 ">
          <div>
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl lg:mb-5 text-[#F63E7B]">
              500 +
            </h1>
            <p className="font-medium text-black">Happy Customer</p>
          </div>
          <div>
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl lg:mb-5 text-[#F63E7B]">
              18 +
            </h1>
            <p className="font-medium text-black">Service </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handle;