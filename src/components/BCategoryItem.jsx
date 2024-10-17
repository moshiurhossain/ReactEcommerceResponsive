import React from 'react'
import { MdOutlinePhoneAndroid } from "react-icons/md";

const BCategoryItem = ({CatIcon,cName}) => {
  return (
    <div className='group'>
          <div className='w-[170px] group-hover:bg-titleColor h-[150px]  rounded-[4px] duration-200 text-center border-gray-500 border  group-hover:text-white py-[30px] group-hover:border-none '>
     
      {CatIcon}
     <h3 className='font-poppins font-normal text-base pt-[28px]'>{cName}</h3>
     
    </div>
    </div>
    
  )
}

export default BCategoryItem
