import React from 'react';
import img1 from '../../../assets/icons/Group 1372.png'
import img2 from '../../../assets/icons/Group 1373.png'
import img3 from '../../../assets/icons/Group 1374.png'
const Service = () => {
    return (
        < >
<h1 className='title-text'>Our Awesome <span className='text-[#F63E7B]'>Services</span></h1>    
<div data-aos="fade-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="1500" className='grid lg:gap-10 mb-8 lg:grid-cols-3 sm:grid-cols-1'>
<div  className='bg-white p-5 rounded mt-5 '>
      <img
        className='object-cover h-24 mb-6 rounded mx-auto '
        src={img2}
        alt=''
      />
      <p className='mb-2 text-xl font-semibold leading-none sm:text-2xl'>Hair Color & Styleing</p>
      <p className='text-[#F63E7B] font-semibold'>$99</p>
      <p className='text-gray-700 px-5'>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>

    </div> 
    <div className='bg-white p-5 sm:py-5 my-5 lg:my-0 rounded-lg drop-shadow-2xl'>
      <img
        className='object-cover mx-auto h-24 mb-6 rounded '
        src={img1}
        alt=''
      />
      <p className='mb-2 text-xl font-semibold leading-none sm:text-2xl'>Anti Age Face Treatment</p>
      <p className='text-[#F63E7B] font-semibold'>$199 {}</p>
      <p className='text-gray-700 '>We craft stunning and amazing web UI, using a well drrafted UX to fit your product</p>

    </div> 
    <div className='bg-white p-5 rounded'>
      <img
        className='object-cover h-24 mb-6 rounded mx-auto '
        src={img3}
        alt=''
      />
      <p className='mb-2 text-xl font-semibold leading-none sm:text-2xl'>Skin Care Treatment</p>
      <p className='text-[#F63E7B] font-semibold'>$199 {}</p>
      <p className='text-gray-700 '>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>

    </div> 
   </div>    </>
    );
};

export default Service;