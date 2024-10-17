import React from 'react'
import Container from '../components/Container.jsx'
import BreadCrum from '../components/BreadCrum.jsx'
import Flex from '../components/Flex.jsx'
import Images from '../components/Images.jsx'
import T1 from '../assets/T1.png'

import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem.jsx'
import { Link } from 'react-router-dom'

const Cart = () => {

let cartdata = useSelector((state)=> state.allproduct.cart);
console.log(cartdata)

  return (
    <>
    
    <Container>
 <BreadCrum/>
 
 <div className='border border-gray-300 my-3 rounded-md'>
   <Flex className='lg:py-[24px] py-[13px] justify-between mt-[40px] shadow-xl  lg:px-[40px] rounded-md px-[7px] items-center border border-gray-300'>
    <div className='w-[280px] flex items-center justify-center text-center'><h3 className='font-poppins font-normal lg:text-[16px] text-[12px]'>Product</h3></div>
    <div className='w-[280px] flex items-center justify-center text-center'><h3 className='font-poppins font-normal lg:text-[16px] text-[12px]'>Price</h3></div>
    <div className='w-[280px] flex items-center justify-center text-center'><h3 className='font-poppins font-normal lg:text-[16px] text-[12px]'>Quantity</h3></div>
    <div className='w-[280px] flex items-center justify-center text-center'><h3 className='font-poppins font-normal lg:text-[16px] text-[12px]'>Subtotal</h3></div>
   </Flex>


{cartdata.map((item,index)=>(

<CartItem
index={index}
qun={item.qun}
id={item.id}
cartImage={item.thumbnail}
itemName={item.title}
itemPrice={item.price}
totalcost={item.price}

/>

))}



 
  
   </div>
{/* Add to cart product detail end */}

<Flex className='mt-[16px] mb-[10px] justify-between'> <Link to='/shop'><button className='text-[12px] px-[24px] py-[8px] border border-gray-400 rounded-md hover:bg-titleColor hover:text-white lg:text-[16px] font-medium font-poppins lg:py-[16px] lg:px-[48px]'>Return To Shop</button></Link>  

<button className='text-[12px] px-[24px] py-[8px] border border-gray-400 rounded-md hover:bg-titleColor hover:text-white lg:text-[16px] font-medium font-poppins lg:py-[16px] lg:px-[48px]'>Update Cart</button>

</Flex>

    </Container>


    
    </>
  )
}

export default Cart
