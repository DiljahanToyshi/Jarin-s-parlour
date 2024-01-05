import { BsChevronDown } from "react-icons/bs";
import { useNavigation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { useEffect, useState } from "react";
import { getAllBookings } from "../../Components/hooks/auth";

const OrderList = () => {
  const [users, setUsers] = useState([])

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  useEffect(() => {
    getAllBookings()
      .then(data => {
          setUsers(data);
        console.log(data);

      })
  }, [])
    return (
    <div className="w-full ">
      <div className=" text-3xl font-normal md:text-center py-3 px-5 md:pt-0">
        Customer List
      </div>

      <div className="bg-slate-200 m-5 p-3 mt-3">
        <div className="bg-white rounded-lg m-4 p-3">
          <div className="overflow-x-scroll bg-white">
            <table className="table table-zebra w-full ">
              {/* head */}
              <thead className="rounded-lg">
                <tr className="bg-slate-200 my-2 pt-8 rounded-full ">
                  <th>#</th>
                  <th>Name</th>
                  <th>Email Id</th>
                  <th>Service</th>
                  <th>Pay With</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="font-semibold">
                {users.map((user, index) => (
                  <tr key={user?.bookingId}>
                    <th>{index + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>

                    <td>{user?.title} </td>
                    <td>Credit Card</td>
                    <td>
                      <div className="flex gap-2 label-text  text-rose-600 border border-rose-500  font-semibold cursor-pointer p-1  rounded-lg  hover:bg-white">
                        <div className="h-5 text-rose-600 "></div>
                        <div className="">Pending</div>
                        <BsChevronDown className="m-auto" size={16} />
                      </div>
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

export default OrderList;
