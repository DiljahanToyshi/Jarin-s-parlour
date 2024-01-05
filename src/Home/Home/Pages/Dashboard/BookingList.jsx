import BookingCard from "../../Components/Card/BookingCard";
import EmptyState from "../../Components/Card/EmptyState";
import useCart from "../../Components/hooks/useCart";

const BookingList = () => {
  const [cart] = useCart();
  return (
    <>
                   {cart && Array.isArray(cart) && cart.length > 0 ?(

<>
      <h2 className="text-3xl font-normal text-start pt-3 md:pt-0">Service List</h2>
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {cart && cart.map((booking) =>  (
          <>
          <BookingCard key={booking?._id} booking={booking} cart={cart}/>
          </>
        ))}
      </div>
      </>
                   ) : (      <EmptyState
                    message='No Service data available.'
                    address='/portfolio'
                    label='Browse Our Service'
                  />)}

    </>
  );
};

export default BookingList;
