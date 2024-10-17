import React from 'react'
import Banner from '../components/Banner'
import FlashSale from '../components/FlashSale'
import BCategory from '../components/BCategory'
import BestSelling from '../components/BestSelling'
import Offer from '../components/Offer'
import OurProducts from '../components/OurProducts'
import NewArrival from '../components/NewArrival'
import ServicePart from '../components/ServicePart'
import { useLocation } from 'react-router-dom'

const Home = () => {

  return (
   <>
   <Banner/>
   <FlashSale/>
   <BCategory/>
   <BestSelling/>
   <Offer/>
   <OurProducts/>
   <NewArrival/>
   <ServicePart/>
   </>
  )
}

export default Home
