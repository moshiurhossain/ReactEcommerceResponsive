import React from 'react'
import Frame from './../assets/Frame.png'
import Container from './Container'
import Images from './Images' 
import { Link } from 'react-router-dom'


const Offer = () => {
  return (
   <section className='lg:mt-[70px] mt-[30px] pb-[30px] lg:pb-[70px]'>
    <Container>
        <Link><Images src={Frame} /></Link>
        
    </Container>
   </section>
  )
}

export default Offer
