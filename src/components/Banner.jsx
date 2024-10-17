import BannerImage from '../assets/BannerImage.jpg'
import React from 'react'
import Container from './Container'
import Flex from './Flex';
import Category from './Category'
import Images from './Images'
import "slick-carousel/slick/slick.css";


import Slider from "react-slick"

const Banner = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{position:'absolute', left:"50%", transform:"translateX(-50%)", bottom:'5%',  }}
      >
        <ul style={{ margin: "0px",   display:'flex',  gap:'12px', }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "12px",
         height:"12px",
         background:'#808080',
         borderRadius: '50%'
        }}
      >
      
      </div>
    )
  };
  return (
    <section>
       <Container>
        <Flex className='lg:gap-[45px] flex-col lg:flex-row'>
        
            <div className='lg:w-[20%] lg:border-r w-full '>
              <Category/>
            </div>
            <div className='lg:mt-10 mt-5 lg:w-[80%] w-full'>
            <Slider {...settings}>
      <div>
      <Images className='w-[892px]' src={BannerImage} alt='BannerImage'/>
      </div>
      <div>
      <Images className='w-[892px]' src={BannerImage} alt='BannerImage'/>
      </div>
      <div>
      <Images className='w-[892px]' src={BannerImage} alt='BannerImage'/>
      </div>
      <div>
      <Images className='w-[892px]' src={BannerImage} alt='BannerImage'/>
      </div>
    </Slider>
        </div>
        
        </Flex>
       </Container>
    </section>
  )
}

export default Banner
