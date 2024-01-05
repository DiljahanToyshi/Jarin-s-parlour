import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCard = () => {
  const updateData = useLoaderData();
  const { register, handleSubmit } = useForm();
const navigate = useNavigate();

  // handleUpdateData
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/services/${updateData._id}`,{
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data =>{
      if(data.modifiedCount>0){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${updateData?.title} updated successfully`,
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/dashboard/manageService')  
        }
    })
  };
  return (
    <div className="w-full p-2 py-3 md:px-10 bg-white">
      <h1 className="text-2xl font-bold my-1 text-gray-800">
        Update The Details of {updateData?.title} Service
      </h1>
      <div className="bg-gray-100 p-1 md:p-5 md:m-8">
        <div className="bg-white  rounded-xl m-1 md:m-4  p-1 md:p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control md:w-full ">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Service Title
                  </span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  defaultValue={updateData?.title}
                  className="input input-bordered w-full md:px-3 md:py-2 border rounded-md border-rose-300 focus:outline-rose-400 bg-gray-100 text-gray-900 "
                />
              </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Price ${" "}
                </span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                defaultValue={updateData?.price}

                className="input input-bordered w-full md:px-3 md:py-2 border rounded-md border-rose-300 focus:outline-rose-400 bg-gray-100 text-gray-900 "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Description{" "}
                </span>
              </label>
              <textarea
                {...register("description", { required: true })}
                className="textarea textarea-bordered h-24 input  w-full px-3 py-2 border rounded-md border-rose-300 focus:outline-rose-400 bg-gray-100 text-gray-900"
                defaultValue={updateData?.description}

              ></textarea>
            </div>

            <input
              className=" btn-sm mt-4 btn rounded-md text-white bg-[#F63E7B] hover:text-rose-500  hover:bg-rose-300 font-semibold px-4"
              type="submit"
              value="Update Service"
            />
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default UpdateCard;
