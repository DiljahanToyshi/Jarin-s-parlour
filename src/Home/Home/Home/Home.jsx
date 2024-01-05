import React, { useEffect } from 'react'
import img from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
import Service from './Service'
import { Link } from 'react-router-dom'
import Handle from './Handle'
import Testimonials from './Testimonials'
import Form from './Form'
import Aos from 'aos'
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
   }, []);

  return (
    <>
    <div className=' bg-rose-50'>
    {/* Container Box */}
    <div className='flex flex-col-reverse max-w-screen-lg overflow-hidden   rounded shadow-sm lg:flex-row sm:mx-auto'>
    {/* Details Container */}
    <div className=' p-3 text-start py-8 lg:py-0 lg:p-8 lg:pl-8 lg:w-1/2'>
        <div>
          <p className='font-semibold text-3xl md:text-5xl md:pt-24 md:py-5 '>BEAUTY SALON <br /> FOR EVERY WOMEN</p>
        </div>
        <h5 className='mb-3  text-xl leading-none '>
        "Welcome to Jerin's Parlour, where dreams turn into flavors and happiness is crafted in every scoop."          </h5>
        <Link to="/portfolio">  <button data-aos="zoom-in-left" data-aos-duration="3000" className="btn text-white bg-[#F63E7B] font-semibold px-4">Get An Appoinment</button></Link>

      </div>
      {/* Image Container */}
      <div className=' lg:w-1/2 h-full'>
        <img
          src={img}
          alt='image'
          className='object-cover w-full  lg:h-full'
        />
      </div>
     
    </div>
  </div>
  <Service></Service>
  <button data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="btn text-white bg-[#F63E7B] font-semibold px-7">Explore More</button>
  <Handle/>
  <Testimonials/>
  <Form/>
</>
  
  )
}

export default Home