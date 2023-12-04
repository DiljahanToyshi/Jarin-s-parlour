import React from 'react';
import img1 from '../../../assets/icons/Group 1372.png'
import img2 from '../../../assets/icons/Group 1373.png'
import img3 from '../../../assets/icons/Group 1374.png'
const Service = () => {
    return (
        <div>
<h1 className='sm:my-5 my-7 md:py-7 text-5xl mx-auto font-semibold md:text-center'>Our Awesome <span className='text-rose-500'>Services</span></h1>    
<div className='grid md:gap-6 lg:gap-10 mb-8 lg:grid-cols-3 sm:grid-cols-1'>
<div className='bg-white p-5 rounded mt-5 '>
      <img
        className='object-cover ml-20 md:ml-72  lg:mx-28 h-24 mb-6 rounded '
        src={img2}
        alt=''
      />
      <p className='mb-2 text-xl font-semibold leading-none sm:text-2xl'>Hair Color & Styleing</p>
      <p className='text-rose-600 font-semibold'>$99</p>
      <p className='text-gray-700 px-5'>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>

    </div> 
    <div className='bg-white p-5 sm:py-5 rounded-lg drop-shadow-2xl'>
      <img
        className='object-cover ml-20 md:ml-72  lg:mx-28  h-24 mb-6 rounded '
        src={img1}
        alt=''
      />
      <p className='mb-2 text-xl font-semibold leading-none sm:text-2xl'>Anti Age Face Treatment</p>
      <p className='text-rose-600 font-semibold'>$199 {}</p>
      <p className='text-gray-700 '>We craft stunning and amazing web UI, using a well drrafted UX to fit your product</p>

    </div> 
    <div className='bg-white p-5 rounded '>
      <img
        className='object-cover ml-20 md:ml-72  lg:mx-28 h-24 mb-6 rounded '
        src={img3}
        alt=''
      />
      <p className='mb-2 text-xl font-semibold leading-none sm:text-2xl'>Skin Care Treatment</p>
      <p className='text-rose-600 font-semibold'>$199 {}</p>
      <p className='text-gray-700 '>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>

    </div> 
   </div>    </div>
    );
};

export default Service;