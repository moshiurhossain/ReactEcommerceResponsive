import React from 'react'
import Container from './Container'
import Title from './Title'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import ProductCard2 from './ProductCard2';
import { Link } from 'react-router-dom';
import PP1 from './../assets/PP1.png'
import PP2 from './../assets/PP2.png'
import PP3 from './../assets/PP3.png'
import P5 from './../assets/P5.png'

const OurProducts = () => {
// setting

var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:false,
            nextArrow: "",
            prevArrow: "",
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
            nextArrow: "",
            prevArrow: "",
            arrows:false,
           
          }
        },
    
      ]
}



// new settings
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


  return (
            <section>
        <Container>
        <div className='lg:pb-[60px] pb-[30px]'>
            
            <Title subtitle="Our Products" maintitle="Explore Our Products" />

            <div className='lg:mt-[60px] mt-[30px]'>
            <Slider {...settings} className='justify-evenly '>
      
      <ProductCard2
      productImage={PP1}
      productName='Breed Dry Dog Food'
      productPrice='$100'
       stock='65'
      />
      <ProductCard2
      productImage={PP2}
      productName='CANON EOS DSLR Camera'
      productPrice='$360'
       stock='65'
      />
      <ProductCard2
      productImage={PP3}
      productName='ASUS FHD Gaming Laptop'
      productPrice='$700'
       stock='65'
      />
      <ProductCard2
      productImage={P5}
      productName='RGB liquid CPU Cooler'
      productPrice='$170'
      stock='65'
      />
      
      
   
        
         </Slider>
         </div>
        <div className='lg:mt-[60px] mt-[30px]'>
        <Slider {...setting} className='justify-evenly '>
      
        <ProductCard2
      productImage={PP1}
      productName='Breed Dry Dog Food'
      productPrice='$100'
       stock='75'
      />
      <ProductCard2
      productImage={PP2}
      productName='CANON EOS DSLR Camera'
      productPrice='$360'
       stock='65'
      />
      <ProductCard2
      productImage={PP3}
      productName='ASUS FHD Gaming Laptop'
      productPrice='$700'
       stock='65'
      />
      <ProductCard2
      productImage={P5}
      productName='RGB liquid CPU Cooler'
      productPrice='$170'
       stock='65'
      />
      
   
        
         </Slider>  
        </div>
     
        <div className='text-center lg:mt-[60px] mt-[20px]'>
       <Link className='font-poppins text-white bg-titleColor font-medium lg:text-base text-sm lg:py-4 lg:px-12 px-4 py-2 inline-block rounded-[4px] '>View All Products</Link>
       </div>
       </div>
        </Container>


            </section>
   
  )
}

export default OurProducts
