import Container from './Container'
import React from 'react'
import Title from './Title'
import SaleCountTime from './SaleCountTime'
import Flex from './Flex'
import ProductCard from './ProductCard'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import P1 from './../assets/Product1.png'
import P2 from './../assets/P2.png'
import P3 from './../assets/P3.png'
import P4 from './../assets/P4.png'
import P5 from './../assets/P5.png'

const FlashSale = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "#F5F5F5", width: "46px", height: "45px", borderRadius: "50%", justifyContent:'center',alignItems: 'center',position:'absolute',right:"0%",top:"-70px" }}
        onClick={onClick}
      ><FaAngleRight /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div

        className={className}
        style={{ ...style, display: "flex", background: "#F5F5F5", width: "46px", height: "45px", borderRadius: "50%",  justifyContent:'center',alignItems: 'center', position:'absolute', right:"70px",top:"-70px", }}
        onClick={onClick}
      > <FaAngleLeft /> </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          nextArrow: "",
          prevArrow: "",
          arrows:false,
         
        }
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        
         
        }
      },
  
    ]
  };

  return (
    <section className='lg:mt-[140px] mt-[50px] '>
       <Container>
<div className='border-b lg:pb-[60px] pb-[30px]'>

<Flex className='lg:gap-[87px] gap-[15px] mb-[10px] flex-col lg:flex-row'> 
          <Title subtitle="Today's" maintitle="Flash Sales"/>
        <SaleCountTime/>
        </Flex>
<div className='lg:mt-[30px] mt-[20px]'>
        <Slider {...settings} className='justify-evenly '>
      <ProductCard 
      productImage={P1}
      productName='HAVIT HV-G92 Gamepad'
      productPrice='$120'
      productOffer='$160'
      productDiscount='-40%'
      />
      <ProductCard
      productImage={P2}
      productName='AK-900 Wired Keyboard'
      productPrice='$960'
      productOffer='$1160'
      productDiscount='-35%'
      />
      <ProductCard
      productImage={P3}
      productName='IPS LCD Gaming Monitor'
      productPrice='$370'
      productOffer='$400'
      productDiscount='-30%'
      />
      <ProductCard
      productImage={P4}
      productName='IPS LCD Gaming Monitor'
      productPrice='$375'
      productOffer='$400'
      productDiscount='-25%'
      />
      <ProductCard
        productImage={P5}
        productName='RGB liquid CPU Cooler'
        productPrice='$160'
        productOffer='$400'
        productDiscount='-25%'
      />
     
       </Slider> </div>
       <div className='text-center lg:mt-[60px] mt-[20px]'>
       <Link className='font-poppins text-white bg-titleColor font-medium lg:text-base text-sm lg:py-4 lg:px-12 px-4 py-2 inline-block rounded-[4px] '>View All Products</Link>
       </div>

</div>
       
       </Container>
    </section>
  )
}

export default FlashSale
