import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
const [axiosSecure]= useAxiosSecure()
  const { refetch, data: booking = [] } = useQuery({
    queryKey: ["booking", user?.email],
   

    queryFn: async () => {
        const response = await axiosSecure(
          `/booking?email=${user.email}` );
          // console.log(response);
        return response.data;
      },
  });

  return [booking, refetch];
};
export default useCart;
