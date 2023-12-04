import useCart from "../../Components/hooks/useCart";

const BookingList = () => {
  const [cart] = useCart();
  console.log(cart);
  return (
    <div>
      <h2 className="text-3xl font-normal text-start pt-3 md:pt-0">Service List</h2>
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {cart.map((booking) =>  (
          <>
            {<div className=" mx-auto p-3 bg-white rounded-2xl  flex flex-col gap-2 w-full">
            <div className="flex flex-row justify-between gap-1">
                <img
                  className="
                                    object-cover 
                                    h-20 
                                    w-20 rounded-full 
                                    group-hover:scale-110 
                                    transition
                                  "
                  src={booking.image}
                  alt="Service"
                />
                <div>
                  <button className="bg-rose-100 w-full rounded-md py-2 px-5 mt-5 font-bold text-[#FF4545] opacity-50">
                    pending{" "}
                  </button>
                </div>{" "}
              </div>
             
              <div className="font-bold text-lg text-start">{booking.title}</div>
              <div className="font-semibold text-start">Price: ${booking.price}</div>

             
              
            </div>}
          </>
        ))}
      </div>{" "}
    </div>
  );
};

export default BookingList;
