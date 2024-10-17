import React, { useState } from 'react'
import Flex from './Flex'
import { FaChevronUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Images from './Images';
import { MdCancel } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { productquantityUpdate,  removeProduct } from '../slices/productSlice';
import { useSelector } from 'react-redux';

const CartItem = ({cartImage,itemPrice,itemName,totalcost,id,qun,index}) => {
  
  let subtotal = qun*totalcost;

  let dispatch =useDispatch();

  let handleDeleteCart=()=>{
    dispatch(removeProduct(id))
  }

  let cartData = useSelector((state)=>state.allproduct.cart)




let handleIncrement =() =>{
dispatch(productquantityUpdate({id:index,qun,actionname:'increment'}))
}


let handleDecrement=()=>{
  dispatch(productquantityUpdate({id:index,qun,actionname:'decrement'}))
}


  return (
    <>
    
    <Flex className=' h-[120px] justify-between mt-[40px] shadow-xl  lg:px-[40px] rounded-md px-[7px] items-center border border-gray-300 '>
<div className='lg:flex items-center flex-wrap w-[280px] relative  '> <Images className='w-[54px] h-[54px] ' src={cartImage}/>   <h3 className='font-poppins font-normal lg:text-[16px] text-[9px] lg:ml-[10px] m-0'>{`${itemName.slice(0,10)}...`}</h3>

<div
 


className='text-titleColor absolute lg:top-0 lg:left-[-15px] top-[-10px] cursor-pointer w-[20px] h-[20px] rounded-full border border-gray-300 flex items-center justify-center  bg-gray-300'>< MdCancel className='text-[17px]' 
onClick={handleDeleteCart}
/></div>
</div>
<div className='w-[280px] flex items-center justify-center text-center'><h3 className='font-poppins font-normal lg:text-[16px] text-[12px]'>{itemPrice}</h3></div>
<div className='w-[280px] flex items-center justify-center text-center'><div className='flex items-center w-[72px] h-[44px] border border-gray-400 rounded-md justify-evenly'> <h3 className='font-poppins font-normal lg:text-[16px] text-[12px] '>{qun }</h3> <div className=' text-[12px]'><div className='cursor-pointer hover:bg-gray-400 ' onClick={handleIncrement}><FaChevronUp 


/></div>
<div onClick={ qun <= 1 ? handleDeleteCart  : handleDecrement} className='cursor-pointer hover:bg-gray-400'><FaAngleDown

/></div>
</div> 


   </div></div>
<div className='w-[280px] flex items-center justify-center text-center'><h3 className='font-poppins font-normal lg:text-[16px] text-[12px]'>
  { parseFloat(subtotal)  }</h3></div>
</Flex>
    </>
  )
}

export default CartItem
