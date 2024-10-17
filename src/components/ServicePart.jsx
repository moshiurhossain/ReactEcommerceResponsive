import React from 'react'
import Container from './Container'
// import Images from './Images'
import S1 from './../assets/S1.png'
import S2 from './../assets/S2.png'
import S3 from './../assets/S3.png'
import Flex from './Flex'
import CustomerService from './CustomerService'


const ServicePart = () => {
  return (
    <section className='lg:pb-[140px] pb-[40px]'>
    <Container>
       <Flex className='lg:justify-around lg:flex-row  flex-col w-[95%] mx-auto'>
<CustomerService imgsrc={S1} mainText='FREE AND FAST DELIVERY' subText='Free delivery for all orders over $140' />
<CustomerService imgsrc={S2} mainText='24/7 CUSTOMER SERVICE' subText='Friendly 24/7 customer support' />
<CustomerService imgsrc={S3} mainText='MONEY BACK GUARANTEE' subText='We return money within 30 day' />





</Flex>


    </Container>
    </section>
  )
}

export default ServicePart
