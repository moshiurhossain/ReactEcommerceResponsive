
import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header className='bg-headColor py-3'>
   <Container>
    <div className='relative'>
      
        <h3 className=' text-start mx-auto w-[80%] lg:w-full font-poppins lg:text-center text-headText text-xs lg:text-sm font-normal leading-5 '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to='/shop' className='font-poppins leading-6 font-semibold ml-2 '>ShopNow </Link> </h3>
        
    

   <select id="countries" className="lg:w-[78px] w-[60px] bg-black text-headText absolute lg:top-0 top-[18px] right-0 text-xs lg:text-sm mr-[6px]">
    <option selected value="English">English</option>
    <option value="DE">Germany</option>
  </select>

   </div>
   </Container>
   </header>
  )
}

export default Header
