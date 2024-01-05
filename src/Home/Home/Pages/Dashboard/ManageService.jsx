import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useService from "../../Components/hooks/useService";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";

const ManageService = () => {
  const [services, loading, refetch] = useService();
  const [axiosSecure] = useAxiosSecure();
  if (loading) {
    return <Loader></Loader>;
  }

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/services/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!",  `${item.title} Service has been deleted.`, "success");
          }
        });
      }
    });
  };

  return (
    <div className="w-full">
      <div className="bg-gray-100  py-8">
        <div className="bg-white rounded-lg m-4 p-3">
          <div className="overflow-x-auto bg-white">
            {" "}
            <table className="table w-full">
              {/* head */}
              <thead className="font-semibold text-base">
                <tr>
                  <th>#</th>
                  <th>Image</th>

                  <th>Service Title</th>
                  <th>Price</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {services.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.title}</td>
                    <td className="text-center">${item.price}</td>
                    <td>
                    <Link to={`/dashboard/manageService/${item._id}`}>  <button className="btn btn-sm bg-rose-100 text-[#F63E7B] font-semibold px-4">
                        Update
                      </button></Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-ghost bg-[#F63E7B]  text-white"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
