import React from 'react'
import Images from './Images'

const CustomerService = ({imgsrc,mainText,subText}) => {
  return (
    <div className='lg:w-[32%] w-[60%]  text-center lg:mx-0 mx-auto lg:mt-0 mt-[30px]'>
    <div className='w-[58px] h-[58px] rounded-full bg-black flex justify-center items-center border-[10px] border-gray-400 mx-auto'><Images src={imgsrc} className='w-[25px]'/> </div>
      <h3 className='font-poppins font-semibold leading-[28px] lg:text-[20px] text-[13px] mt-[15px] lg:mt-[24px]'>{mainText}</h3> 
      <p className='font-poppins font-normal leading-[21px] lg:text-[14px] text-[10px] lg:mt-[8px] mt-[2px]' >{subText}</p>   
    </div>
  )
}

export default CustomerService
