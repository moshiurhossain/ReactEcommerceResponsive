import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import BreadCrum from '../components/BreadCrum'
import Flex from '../components/Flex'
import { Rate } from 'antd';
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefreshLine } from "react-icons/ri";
import Images from '../components/Images';
import G1 from '../assets/G1.png'
import GM from '../assets/GM.png'
import G2 from '../assets/G2.png'
import G3 from '../assets/G3.png'
import G4 from '../assets/G4.png'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  let {id} = useParams()
  let [reviews,setReviews] =useState([])
  let [products,setproducts] =useState({});
  // let [productsImages,setproductsImages] =useState([]);
  async function getAllProducts(){
    let data = await axios.get(`https://dummyjson.com/products/${id}`);
    setproducts(data.data)
    setReviews(data.data.reviews)
    // setproductsImages(data.data.images)
   }
  
useEffect(()=>{
  getAllProducts()
},[])

  return (
    <section>
    <Container>
   <BreadCrum/>
 <Flex className=' lg:flex-row flex-col gap-5 mt-[40px]' >
 <Flex className='lg:flex-row flex-col-reverse gap-4  lg:gap-0 lg:mt-[20px] '>
    <div className='flex lg:flex-col gap-4 lg:gap-10 flex-row'>
      {/* {productsImages.map((item)=>{
    <Images src={item} className='lg:w-[170px] lg:h-[120px] w-[50px] h-[40px] '  />
      })} */}
         <Images src={products.thumbnail} className='lg:w-[170px] lg:h-[120px] w-[50px] h-[40px] '  />
        <Images src={products.thumbnail} className='lg:w-[170px] lg:h-[120px] w-[50px] h-[40px] '  />
        <Images src={products.thumbnail}  className='lg:w-[170px] lg:h-[120px] w-[50px] h-[40px] ' />
        <Images src={products.thumbnail}  className='lg:w-[170px] lg:h-[120px] w-[50px] h-[40px] ' />
    </div>
    <Images src={products.thumbnail} className='lg:w-[500px] lg:h-[600px] lg:ml-[30px] rounded-md w-[280px] h-[290px]'  />
 </Flex>


   {/* description box start */}
   <div className=' mb-[100px] lg:ml-[50px]'>
    {/* heading start */}
    <h2 className='font-semibold font-poppins lg:text-[24px] '>{products.title}</h2>
    {/* heading end & in stock part start */}
    <Flex className='lg:gap-5 gap-3 h-[21px] items-center mb-[4px] lg:mt-[16px] mt-[12px]'><Rate className='lg:text-[17px] text-[14px]' allowHalf  value={products.rating}/> <p className='lg:text-[14px] font-normal font-poppins text-[#808080] relative after:content-[""] after:h-[24px] after:w-[1px]  after:bg-[#808080] after:absolute after:right-[-10px] after:rounded-[3px]'>({reviews.length})</p > <p className='g:text-[14px] font-normal font-poppins text-green-600 ml-[10px]'>In Stock {products.stock} </p> </Flex>
    {/* in stock part end & price part start */}
    <h2 className='font-normal font-poppins lg:text-[24px] lg:mt-[16px] mt-[8px]'>{`$ ${products.price}`}</h2>
    {/* description start end & price part end */}
    <p className='lg:w-[373px] w-[330px]  lg:mt-[24px] mt-[12px] font-poppins font-normal lg:pb-[24px] pb-[12px] relative after:absolute after:content-[""] lg:after:w-[373px] after:w-[330px] after:h-[2px] after:bg-[#808080] after:left-0 after:bottom-[1px]'>{products.description}</p>
    {/* description end & color part start*/}
    <Flex className='30px items-center '>
      {products?.color && 
      <>
      
      <p className='font-poppins text-[20px] font-normal lg:mt-[20px] mt-[12px] pr-[20px]'>Colours :</p> <div className='h-[20px] w-[20px] rounded-full bg-blue-400 lg:mt-[22px] mt-[12px] border '></div>  <div className='h-[20px] w-[20px] rounded-full bg-titleColor lg:mt-[22px] mt-[12px] ml-[10px]'></div>
      </>
      }
      </Flex>
    {/* color part end &size part start */}
      <Flex className='h-[32px] lg:mt-[24px] mt-[12px]'>
        {products?.size &&
        <>
        <p className='font-poppins text-[20px] font-normal  '>Size :</p>
 <Flex className='font-poppins text-[14px] font-medium lg:ml-[24px] ml-[12px] gap-[16px]'> 
    <div className='cursor-pointer hover:border-none w-[32px] h-[32px] border rounded-md border-[#808080] flex justify-center items-center hover:text-white hover:bg-titleColor '><p>XS</p></div>
    <div className='cursor-pointer hover:border-none w-[32px] h-[32px] border rounded-md border-[#808080] flex justify-center items-center hover:text-white hover:bg-titleColor '><p>S</p></div>
    <div className='cursor-pointer hover:border-none w-[32px] h-[32px] border rounded-md border-[#808080] flex justify-center items-center hover:text-white hover:bg-titleColor '><p>M</p></div>
    <div className='cursor-pointer hover:border-none w-[32px] h-[32px] border rounded-md border-[#808080] flex justify-center items-center hover:text-white hover:bg-titleColor '><p>L</p></div>
    <div className='cursor-pointer hover:border-none w-[32px] h-[32px] border rounded-md border-[#808080] flex justify-center items-center hover:text-white hover:bg-titleColor '><p>XL</p></div>
    </Flex>
        
        </>
        
        }
 
      </Flex>
    {/* size part end */}
    <Flex className='mt-[14px] lg:mt-[24px] font-poppins '>
        <Flex className='lg:w-[160px] w-[120px] border border-[#808080] rounded-md h-[44px]'>
            <div className='flex justify-center items-center w-[40px] border border-[#808080] rounded-l-md hover:bg-titleColor hover:text-white '><FiMinus /></div>
            <div className='flex justify-center items-center w-[80px]  border border-[#808080]'><h2 className='text-[20px] font-medium font-poppins '>2</h2></div>
            <div className='flex justify-center items-center w-[40px] border border-[#808080] rounded-r-md hover:bg-titleColor hover:text-white '><FaPlus /></div>   
        </Flex>

        <button className='flex items-center justify-center lg:w-[164px] w-[130px] bg-titleColor text-white rounded-md lg:ml-[16px] ml-[14px]'><h2>Buy Now</h2></button>
        <div className='flex items-center justify-center w-[44px] h-[44px] border border-[#808080] lg:ml-[16px] ml-[14px] rounded-md text-[20px] '><IoHeartOutline /></div>
    </Flex>

    <div className='lg:w-[400px] w-[320px] h-[180px] border border-[#808080] lg:mt-[40px] mt-[30px] rounded-md '>
        <div className='items-center  border border-[#808080]  rounded-t-md h-[90px] flex'>
        <TbTruckDelivery className='lg:text-[30px] text-[25px]  ml-[16px]' /><div className='ml-[16px] '><h2 className=' text-[16px] font-poppins font-medium'>Free Delivery</h2> <p className='text-[12px] font-poppins font-medium'>Enter your postal code for Delivery Availability</p></div>
        </div>

        <div className='items-center  border border-[#808080]  rounded-b-md h-[90px] flex'>
        <RiRefreshLine  className='lg:text-[30px] text-[25px]  ml-[16px]' /><div className='ml-[16px] '><h2 className=' text-[16px] font-poppins font-medium'>Return Delivery</h2> <p className='text-[12px] font-poppins font-medium'>Free 30 Days Delivery Returns. Details</p></div>
        </div>
    </div>

 </div>
 {/* description box end */}

 </Flex>

    </Container>

    </section>
      
    
  )
}

export default ProductDetail
