import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then(res => res.json())
      .then((data) => setReviews(data));
  }, []);


  return (
    <div data-aos="fade-up"
    data-aos-duration="2000" className='grid lg:grid-cols-3 gap-5'>
      {reviews?.slice(0, 3).map((review) => (
        <div key={review?._id}>
          <div className='flex justify-center gap-5'>
            <img 
    src={review?.image} alt="" referrerPolicy='no-referrer' className='h-20 w-20 object-cover rounded' />
          <div className='text-start'>
          <p className='font-bold text-lg'>{review?.name}</p>
            <p className='font-medium'>{review?.designation}</p>
          </div>
          </div>
          <p>{review?.review.slice(0,250)}</p>
          <Rating readonly
         
                        style={{ maxWidth: 150 }}
                        value={Math.round(review.Rating?.number || 0)} readOnly />
                    <span className='ms-2'> {review.Rating?.number}</span>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
