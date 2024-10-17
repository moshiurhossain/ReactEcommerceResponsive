import Container from './Container'
import React from 'react'
import Flex from './Flex'

const Title = ({subtitle,maintitle}) => {
  return (
  <div>
    <h4 className='font-poppins relative text-titleColor font-semibold text-base after:w-[20px] after:h-[30px] lg:after:h-[40px] after:content-[""] after:absolute after:top-2/4 after:left-0 after:translate-y-[-50%] after:bg-titleColor after:rounded-[4px] pl-6 lg:pl-[36px]'>{subtitle}</h4>
    <h2 className='font-inter lg:text-[36px] text-[20px] font-semibold leading-12 mt-6'>{maintitle}</h2>
  </div>
  )
}

export default Title
