import React from 'react'
import Container from './Container'
import Title from './Title'
import Flex from './Flex'
import Ps4 from './../assets/ps4.png'
import WC from './../assets/WC.png'
import Speaker from './../assets/Speaker.png'
import Perfume from './../assets/Perfume.png'
import Images from './Images'
import { Link } from 'react-router-dom'

const NewArrival = () => {
  return (
    <section className='lg:pb-[168px] pb-[40px]'>
   <Container>

   <Title subtitle="Our Products" maintitle="Explore Our Products" />
   <div className=''>
<Flex className='justify-between flex-col lg:flex-row lg:mt-[60px] mt-[35px]'>
    <div className='lg:w-[45%] w-[70%] lg:mx-0 mx-auto'>
    <Link><Images src={Ps4}  /></Link>
    </div>
<div className='lg:w-[45%] w-[70%] mt-[20px] lg:mt-0 lg:mx-0 mx-auto'>
<Link><Images src={WC}  /></Link>
<Flex className='lg:justify-between mt-[32px] justify-between lg:gap-0 gap-3 items-center lg:mx-0 mx-auto'>
<div className='lg:w-[45%] '> <Link> <Images src={Speaker}  /></Link></div>
<div className='lg:w-[45%]'><Link><Images src={Perfume}  /></Link></div>
</Flex>
</div>

</Flex>
</div>
   </Container>
   </section>
  )
}

export default NewArrival
