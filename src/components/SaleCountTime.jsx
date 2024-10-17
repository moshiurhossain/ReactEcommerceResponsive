import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import Images from './Images'
import Semiclone from '../assets/Semiclone.png'
import { countDownDateAndTime } from 'countdown-date-time'


const SaleCountTime = () => {
    const conduct_date = '2024-09-25 00:00:00';
   
    let [count,setCount]=useState({});
    useEffect(()=>{ const countDown = countDownDateAndTime(conduct_date);
        setCount(countDown)
    },[count])
 
  return (
    <Flex className='lg:gap-[17px] gap-[8px] items-center lg:mt-7 mt-0'>

    
<div>
        <h4 className='font-poppins text-xs font-medium leading-[18px]'>Days</h4>
     <h2 className='font-inter text-xl lg:text-[32px] font-bold leading-[30px] mt-1 tracking-[4%]'>{count.days}</h2>
     </div>
     <Images src={Semiclone} className='h-[20px] mt-[20px]'  />
     <div>
        <h4 className='font-poppins text-xs font-medium leading-[18px]'>Hours</h4>
     <h2 className='font-inter text-xl lg:text-[32px] font-bold leading-[30px] mt-1 tracking-[4%]'>{count.hours}</h2>
     </div>
     <Images src={Semiclone} className='h-[20px] mt-[20px]'  />
     <div>
        <h4 className='font-poppins text-xs font-medium leading-[18px]'>Minutes</h4>
     <h2 className='font-inter text-xl lg:text-[32px] font-bold leading-[30px] mt-1 tracking-[4%]'>{count.minutes}</h2>
     </div>
     <Images src={Semiclone} className='h-[20px] mt-[20px]'  />
     <div>
     
        <h4 className='font-poppins text-xs font-medium leading-[18px]'>Seconds</h4>
     <h2 className='font-inter text-xl lg:text-[32px] font-bold leading-[30px] mt-1 tracking-[4%]'>{count.seconds}</h2>
     </div>



        

        </Flex>
  )
}

export default SaleCountTime
