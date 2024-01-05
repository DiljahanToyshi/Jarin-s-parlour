import React, { useState } from "react";
import PayModal from "../Payment/PayModal";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

const BookingCard = ({ booking }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const modalHandler = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Service added successfully",
    showConfirmButton: false,
    timer: 1500,
  });
  navigate('/dashboard/book')

  closeModal()
  }


  return (
    <>
      <div className=" mx-auto p-3 bg-white rounded-2xl  flex flex-col gap-2 w-full">
        <div className="flex flex-row justify-between gap-1  md:gap-4">
          <img
            className="
                                           object-cover 
                                           h-20 
                                           w-20 rounded-full 
                                           group-hover:scale-110 
                                           transition
                                         "
            src={booking?.image}
            alt="Service"
          />
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-rose-100 w-full rounded-md py-2 px-5 mt-5 font-bold text-[#FF4545] opacity-50"
            >
              pending{" "}
            </button>
          </div>{" "}
        </div>

        <div className="font-bold text-lg text-start">{booking?.title}</div>
        <div className="font-semibold text-start">Price: ${booking?.price}</div>
      </div>
      <PayModal modalHandler={modalHandler} booking={booking} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default BookingCard;
