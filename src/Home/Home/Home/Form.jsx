import Aos from "aos";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Form = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Your Message sent successfully",
    });
    reset();
  };

  return (
    <div   className="w-full px-2 md:px-10 bg-rose-50 p-5 md:p-14 lg:p-20">
      <h1  data-aos="fade-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine" className="title-text md:w-1/2">
        Let us handle your project, professionally.
      </h1>{" "}
      <div
          className=" rounded-xl  p-1 md:p-3"
          data-aos="fade-up-right"   data-aos-duration="3000"
          >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-4  items-center">
              <div className="form-control md:w-full">
                <input
                  type="text"
                  {...register("FirstName", { required: true })}
                  placeholder=" First Name"
                  className="input input-bordered w-full md:px-3 md:py- bg-white rounded-md  focus:outline-rose-400 text-gray-900 "
                />
              </div>
              <div className="form-control md:w-full mt-3 md:mt-0">
                <input
                  type="text"
                  {...register("LastName", { required: true })}
                  placeholder="Last Name"
                  className="input input-bordered w-full md:px-3 md:py- bg-white rounded-md  focus:outline-rose-400 text-gray-900 "
                />
              </div>
            </div>
            <div className="md:flex gap-4  items-center">
              <div className="form-control md:w-full ">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your email address"
                  className="my-3 md:my-6 input input-bordered w-full md:px-3 md:py- bg-white rounded-md  focus:outline-rose-400 text-gray-900 "
                />
              </div>
              <div className="form-control md:w-full ">
                <input
                  type="number"
                  {...register("PhoneNumber", { required: true })}
                  placeholder="Your Phone Number"
                  className="my-3 md:my-6 input input-bordered w-full md:px-3 md:py- bg-white rounded-md  focus:outline-rose-400 text-gray-900 "
                />
              </div>
            </div>

            <div className="form-control md:w-full ">
              <textarea
                {...register("message", { required: true })}
                className="textarea textarea-bordered h-24 input  w-full bg-white rounded-md  focus:outline-rose-400 text-gray-900"
                placeholder="Your Message"
              ></textarea>
            </div>

            <input
              className=" btn-sm mt-4 btn  rounded-md text-white bg-[#F63E7B] hover:text-rose-500  hover:bg-rose-300 font-semibold px-4"
              type="submit"
              value=" Send Message"
            />
          </form>
        </div>
    </div>
  );
};

export default Form;
