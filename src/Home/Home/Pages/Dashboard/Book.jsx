import { useContext } from "react";
import EmptyState from "../../Components/Card/EmptyState";
import PayCard from "../../Components/Card/PayCard";
import useCart from "../../Components/hooks/useCart";
import { AuthContext } from "../../Components/Providers/AuthProvider";

const Book = () => {
  const [cart] = useCart();
  const {role} = useContext(AuthContext);
  return (
    <>
                   {cart && Array.isArray(cart) && cart.length > 0 ?(

<>
      <h2 className="text-3xl font-normal text-start pt-3 md:pt-0">Service List</h2>
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {cart.map((booking) =>  (
          <>
          <PayCard key={booking._id} booking={booking} cart={cart}/>
          </>
        ))}
      </div>
      </>
                   ) : (      <EmptyState
                    message='No Booking data available.'
                    address='/dashboard/bookinkgList'
                    label='Browse your service List'
                  />)}

    </>
  );
};

export default Book;
