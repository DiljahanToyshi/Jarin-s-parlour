import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";

const ServiceCard = ({ service }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const { title, image, price, description, _id } = service;
  const { user } = useContext(AuthContext);
  const [,refetch]= useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check localStorage if the button has already been clicked
    const userEmail = user?.email || 'guest';
 const isClicked = localStorage.getItem(`buttonClicked_${_id}_${userEmail}`);
    if (isClicked) {
      setIsButtonClicked(true);
    }
  }, [_id, user?.email]);
  

  // for booking
  const handleBooking = (service) => {

    if (!isButtonClicked && user && user.email) {
      const userEmail = user.email;
      const bookingKey = `buttonClicked_${_id}_${userEmail}`;
            const bookingItem = {
        bookingId: _id,description,
        userID:user?.uid,
        title,
        image,
        price,
        email: user?.email,
        name: user?.displayName,
      };
      

      fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setIsButtonClicked(true);
        localStorage.setItem(bookingKey, "true");
        refetch();
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "Booked successfully!",
            });
            setIsButtonClicked(true);
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        position: "top-center",
        title: "Oops...",
        text: "Please Login to book your session!",
      });
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className=" mx-auto p-3 bg-rose-50 shadow-xl md:my-5 flex flex-col gap-2 w-full">
      <div
        className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
      >
        <img
          className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
          src={image}
          alt="Service"
        />
        <div
          className="
            absolute
            top-3
            right-3
          "
        ></div>
      </div>
      <div className="font-semibold text-lg">{title}</div>
      <div className="font-serif text-neutral-500">{description}</div>
      <div className="flex flex-row justify-between gap-1">
        <div className="font-semibold">Price: ${price}</div>
        <div>
          <button
            onClick={() => handleBooking(service)}
            disabled={isButtonClicked}
            className={`bg-rose-500 w-full rounded-md p-3 text-white ${
              isButtonClicked && "pointer-events-none opacity-50"
            }`}
          >
            {isButtonClicked ? "Booked" : "Book Now"}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default ServiceCard;
