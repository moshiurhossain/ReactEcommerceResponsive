import React from 'react'
import Container from './Container'
import Title from './Title'
import Flex from './Flex'
import ProductCard2 from './ProductCard2'
import { Link } from 'react-router-dom'
import P6 from './../assets/P6.png'
import P5 from './../assets/P5.png'
import P7 from './../assets/P7.png'
import P8 from './../assets/P8.png'


const BestSelling = () => {
  return (
    <section className='lg:mt-[70px] mt-[30px] lg:pb-[70px] pb-[30px]'>
        <Container>
            <Flex className='justify-between items-center'>
            <Title subtitle="This Month" maintitle="Best Selling Products"/>
            <Link className='font-poppins text-white bg-titleColor font-medium lg:text-base text-sm lg:py-4 lg:px-12 px-4 py-2 inline-block rounded-[4px] '>View All </Link>
            </Flex>
        
        <Flex className='mt-[30px] lg:mt-[60px] lg:justify-between flex-wrap'>
            <ProductCard2
            productImage={P6}
            productName='The north coat'
            productPrice='$260'
            productOffer='$360'
            stock='55'
            />
            <ProductCard2
               productImage={P7}
               productName='Gucci duffle bag'
               productPrice='$960'
               productOffer='$1160'
               stock='48'
            />
            <ProductCard2
               productImage={P5}
               productName='RGB liquid CPU Cooler'
               productPrice='$160'
               productOffer='$760'
               stock='15'
            />
            <ProductCard2
               productImage={P8}
               productName='TSmall BookSelf'
               productPrice='$360'
               productOffer=''
               stock='21'
            />

        </Flex>
        </Container>
    </section>
  )
}

export default BestSelling
