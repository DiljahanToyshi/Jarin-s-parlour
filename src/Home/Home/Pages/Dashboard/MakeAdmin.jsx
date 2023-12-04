import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import { useNavigation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";


const MakeAdmin = () => {
  
  const navigation= useNavigation();
    if(navigation.state ==='loading'){
return <Loader/>
    }
    
  const [axiosSecure]= useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  

  const handleMakeAdmin =user =>{
    console.log(user);

fetch(`http://localhost:5000/users/admin/${user._id}`,
{method:"PATCH"})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount){
        refetch();
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is Admin Now successfully`,
  
            showConfirmButton: false,
            timer: 1500,
          });
    }
  })}
  return (
    <div className="w-full">
      <div className="bg-gray-100  py-8">
        <div className="bg-white rounded-lg m-4 p-3">
          <div className="overflow-x-auto bg-white">
            <table className="table table-zebra w-full ">
              {/* head */}
              <thead className="rounded-lg">
                <tr className="bg-gray-100 my-2 pt-8 rounded-full ">
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Email Id</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody className="font-semibold">
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td> <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user.image}
                              alt="image"
                            />
                          </div></td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        <span className=" bg-rose-50 text-[#F63E7B] font-semibold py-2 px-3 rounded-md">Admin</span>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn text-white bg-[#F63E7B] hover:text-[#F63E7B] hover:bg-white font-semibold px-4"
                        >
                          Client
                        </button>
                      )}
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

export default MakeAdmin;
