import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddService = () => {
  const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { title, description, price } = data;
          const newService = {
            description,
            price: parseFloat(price),
            title,
            image: imgURL,
          };
          axiosSecure.post("/services", newService).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Service added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/dashboard/manageService");
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-2 md:px-10 bg-white">
      <h1 className="text-2xl font-bold my-1 text-gray-800">Add a Service</h1>
      <div className="bg-gray-100 p-1 md:p-5 md:m-8">
        <div className="bg-white  rounded-xl m-1 md:m-4  p-1 md:p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex md:my-4 mx-auto md:gap-9">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Service Title
                  </span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  placeholder="Enter title"
                  className="input input-bordered w-full md:px-3 md:py-2 border rounded-md border-rose-300 focus:outline-rose-400 bg-gray-100 text-gray-900 "
                />
              </div>
              <div className="form-control w-full sm:mt-3 md:mt-9">
                <label className="label">
                  <div className="flex gap-2 label-text bg-rose-100 text-rose-600 border border-rose-500  font-semibold cursor-pointer p-2 rounded-lg px-3 hover:bg-white">
                    <div className="h-7 text-rose-600 ">
                      <AiOutlineCloudUpload className="m-auto" size={24} />
                    </div>
                    <div className="pt-1">Upload Image</div>
                  </div>
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    className="  text-sm cursor-pointer w-36  rounded-md hidden "
                  />
                </label>
              </div>
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
                placeholder="Price"
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
                placeholder="Description"
              ></textarea>
            </div>

            <input
              className=" btn-sm mt-4 btn rounded-md text-white bg-[#F63E7B] hover:text-rose-500  hover:bg-rose-300 font-semibold px-4"
              type="submit"
              value="Add Service"
            />
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default AddService;
