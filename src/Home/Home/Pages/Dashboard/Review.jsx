import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Review = () => {
  const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(formData);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { review, name, designation } = data;
          const newItem = { review, name, designation, image: imgURL };
          console.log(newItem);
          axiosSecure.post("/reviews", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your feedback added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");

            }
          });
        }});
   
   
  };
  return (
    <div className="w-full px-2 md:px-10 bg-white">
      <h1 className="text-2xl font-bold my-2 text-gray-800">Add Your Review</h1>
      <div className="bg-gray-100 p-1 md:p-8 md:m-8">
        <div className="bg-white  rounded-xl m-1 md:m-4  p-1 md:p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-1  items-center">
              <div className="form-control w-full sm:mt-3 md:mt-9">
                <label className="label">
                  <div className="flex gap-2 label-text bg-gray-100 text-gray-900  border border-rose-400  font-semibold cursor-pointer p-2 rounded-lg px-3 hover:bg-white">
                    <div className="h-7 text-rose-600 ">
                      <AiOutlineCloudUpload className="m-auto" size={24} />
                    </div>
                    <div className="pt-1 text-gray-400">Upload Image</div>
                  </div>
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    className="  text-sm cursor-pointer w-36  rounded-md hidden "
                  />
                </label>
              </div>
              <div className="form-control md:w-full pt-8 ">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                  className="input input-bordered w-full md:px-3 md:py-2 border rounded-md border-rose-300 focus:outline-rose-400 bg-gray-100 text-gray-900 "
                />
              </div>
            </div>
            <div className="form-control md:w-full ">
              <input
                type="text"
                {...register("designation", { required: true })}
                placeholder="Company’s name, Designation"
                className="my-3 md:my-6 input input-bordered w-full md:px-3 md:py-2 border rounded-md border-rose-300 focus:outline-rose-400 bg-gray-100 text-gray-900 "
              />
            </div>

            <div className="form-control md:w-full ">
              <textarea
                {...register("review", { required: true })}
                className="textarea textarea-bordered h-24 input  w-full  border rounded-md border-rose-300 focus:outline-rose-400 bg-gray-100 text-gray-900"
                placeholder="Feedback"
              ></textarea>
            </div>

            <input
              className=" btn-sm mt-4 btn  rounded-md text-white bg-[#F63E7B] hover:text-rose-500  hover:bg-rose-300 font-semibold px-4"
              type="submit"
              value=" Submit"
            />
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default Review;
