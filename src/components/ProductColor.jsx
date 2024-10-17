import React from 'react'

const ProductColor = ( {title,color}) => {
  return (
    <div>
       <li className='font-normal font-poppins text-sm text-gray-500'> 
            <span
            style={{background:`${color}`}}
            className={`w-[11px] h-[11px] rounded-full  inline-block mr-[10px] mt-[15px]`}> </span>
             {title}</li>
    </div>
  )
}

export default ProductColor
