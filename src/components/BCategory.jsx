import React from 'react'
import Container from './Container'
import Title from './Title'
import BCategoryItem from './BCategoryItem'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IoWatch } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { IoLogoGameControllerB } from "react-icons/io";

const BCategory = () => {

    
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
 
    let setting={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        responsive: [
            {
                breakpoint: 376,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                
                 
                }
              },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              
               
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll:2,
               
                
               
              }
            },
            {
              breakpoint: 736,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              
               
              }
            },
        
          ]
    };

  return (
   <section className='lg:mt-[80px] mt-[35px]'>
    <Container>
        <div className=' border-b lg:pb-[70px] pb-[30px]'>

        <Title subtitle="Categories" maintitle="Browse By Category"/>
    <div className=' lg:mt-[60px] mt-[35px] '> 
    <Slider {...setting} >
    <BCategoryItem cName='Phone' CatIcon={<MdOutlinePhoneAndroid className='  text-[56px]  mx-auto' />}/>
    <BCategoryItem cName='Computer' CatIcon={<RiComputerLine className='  text-[56px]  mx-auto' />}/>
    <BCategoryItem cName='SmartWatch' CatIcon={<IoWatch className='  text-[56px]  mx-auto' />}/>
    <BCategoryItem cName='Camera' CatIcon={<FaCameraRetro  className='  text-[56px]  mx-auto' />}/>
    <BCategoryItem cName='HeadPhones' CatIcon={<ImHeadphones className='  text-[56px]  mx-auto' />}/>
    <BCategoryItem cName='Gaming' CatIcon={<IoLogoGameControllerB  className='  text-[56px]  mx-auto' />}/>
  
    
    </Slider>

    </div>
        </div>

    </Container>
   </section>
  )
}

export default BCategory
