import React from 'react'
import ProductColor from './ProductColor'

const ShopByColor = () => {
  return (
    <div className='mt-[30px]'>
    <h2 className='font-poppins font-bold lg:text-[20px] '>Shop By Color</h2>
    <ul className='mt-[15px]'>

      <ProductColor  title='Blue' color='blue'/>
      <ProductColor title='Green' color='green'/>
      <ProductColor  title='Red' color='red'/>
      
    </ul>
    </div>
  )
}

export default ShopByColor
