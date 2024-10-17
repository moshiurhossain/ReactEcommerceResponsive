import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { AiOutlineSend } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-black text-[#FAFAFA] font-poppins  '>
        <div className='border-b border-[#FAFAFA] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[30px]'> 
<Container>
   <Flex className='lg:justify-between justify-around'> 
    {/* first col start */}
    <div className=' '>
   <h2 className='lg:text-2xl leading-6 font-bold font-inter tracking-[3px] text-[12px]'>Exclusive</h2>
   <h2 className='lg:text-xl leading-[28px] font-medium tracking-[2px]   lg:mt-6 mt-2 text-[9px]'>Subscribe</h2>
   <h4 className='lg:text-[16px] leading-[24px] font-normal   lg:mt-6 mt-1 text-[9px]'>Get 10% off your first order</h4>
   <div className='lg:w-[217px] w-[120px] relative'><input placeholder='Enter your email' className='border-[2px] border-white bg-black rounded-[4px] text-white lg:text-[16px] text-[9px] font-normal font-poppins lg:px-4 lg:py-3 px-2 py-1 lg:mt-[16px] mt-[5px]'/>
   <AiOutlineSend className='absolute lg:top-8 lg:right-3 lg:text-xl text-[10px] top-3 right-1'/>
   </div>
    </div>
      {/* first col end */}
       {/* Second col start*/}
        <div className='lg:inline-block hidden sm:inline-block'>
        <h2 className='lg:text-[20px] leading-6 font-medium font-inter  text-[10px]'>Support</h2>
        <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal w-[100px] lg:w-[175px] lg:mt-6 mt-2 text-[9px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h4>
        <h4 className='lg:text-[16px] leading-[24px] font-normal  lg:w-[175px] lg:mt-[16px] mt-[5px] text-[9px]'>exclusive@gmail.com</h4>
        <h4 className='lg:text-[16px] leading-[24px] font-normal  lg:w-[175px] lg:mt-[16px] mt-[5px]  text-[9px]'>+88015-88888-9999</h4>
        </div>

       {/* Second col end*/}
       {/* Third col start*/}
       <div>
       <h2 className='lg:text-[20px] leading-6 font-medium font-inter  text-[10px]'>Account</h2>
     <Link>  <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-6 mt-2 text-[9px]'>My Account</h4></Link>
       <Link> <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-[16px] mt-[5px] text-[9px]'>My Account</h4></Link>
       <Link> <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-[16px] mt-[5px] text-[9px]'>Login / Register</h4></Link>
       <Link> <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-[16px] mt-[5px] text-[9px]'>Cart</h4></Link>
       <Link> <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-[16px] mt-[5px] text-[9px]'>Wishlist</h4></Link>
       <Link> <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-[16px] mt-[5px] text-[9px]'>Shop</h4></Link>
       </div>
        {/* Third col end*/}
        {/* Fourth col start*/}
        <div>
        <h2 className='lg:text-[20px] leading-6 font-medium font-inter  text-[10px]'>Quick Link</h2>
       
        <Link> <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-6 mt-2 text-[9px]'>Privacy Policy</h4></Link>
        <Link> <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-[16px] mt-[5px] text-[9px]'>Terms Of Use</h4></Link>
        <Link> <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-[16px] mt-[5px] text-[9px]'>FAQ</h4></Link>
        <Link> <h4 className='lg:text-[16px] lg:leading-[24px] leading-3 font-normal  lg:mt-[16px] mt-[5px] text-[9px]'>Contact</h4></Link>
        </div>
        {/* Fourth col end*/}
   </Flex>
</Container>
</div>    
<h3 className='text-[#8d8b8b] text-center lg:pt-[16px] pt-[8px] lg:pb-[24px] pb-[12px] font-poppins lg:text-[16px] text-[9px] font-normal'>&copy; Copyright Rimel 2022. All right reserved</h3>
    </footer>
  )
}

export default Footer
