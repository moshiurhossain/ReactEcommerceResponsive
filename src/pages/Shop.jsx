import React, { useEffect, useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ShopCategory from '../components/ShopCategory'
import ShopByColor from '../components/ShopByColor'
import ProductCard2 from '../components/ProductCard2'
import ShopByProduct from '../components/ShopByProduct'
import axios from 'axios'
import { TbCategoryFilled } from "react-icons/tb";
import { useDispatch } from 'react-redux'
import { productReducer } from '../slices/productSlice'
import { BsCart3 } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Shop = () => {

  let cartdata =useSelector((state)=>state.allproduct.cart)

let dispatch = useDispatch()

  let [allproducts,setAllproducts] =useState([]);

let [loading,setLoading]=useState(true)


 async function getAllProducts(){
   let data = await axios.get("https://dummyjson.com/products");
   setAllproducts(data.data.products)
   dispatch(productReducer(data.data.products))
   setLoading(false)
  }

useEffect(()=>{
  getAllProducts()
 
},[]);

// useEffect(()=>{
//   let uniqueCategory=[... new Set(allproducts.map((item) => item.category ))]
//   setCategory(uniqueCategory)
// },[allproducts]);
// let [category,setCategory]=useState([])

let [catshow,setCatShow]= useState(false)



  return (
    <>
    <section className='pb-[50px]'>
    <Container>
   <Flex className='justify-between w-[170px] '>
    
    
     <BreadCrum/> 


  

   
   
    <div className='w-[48px] h-[30px] bg-neutral-100 rounded-lg  lg:hidden cursor-pointer flex items-center mt-[30px] lg:mt-0 border border-neutral-300 relative'
     onClick={()=>setCatShow(!catshow)}
     > <TbCategoryFilled className='ml-[10px] text-red-400'/> 
     
     <div className='absolute right-[-50px]'>
     <Link className='relative' to='/cart'>
   <BsCart3 className='text-xl'/> 
 { cartdata.length == 0 ?  <p className='bg-white text-white w-[30px] h-[30px] rounded-full text-center absolute top-[-30px] leading-[30px]
   '>{cartdata.length}</p> : <p className='bg-titleColor text-white w-[30px] h-[30px] rounded-full text-center absolute top-[-30px] leading-[30px]
   '>{cartdata.length}</p>    }
   </Link></div>
     
     </div>  </Flex>
   
   <Flex className='mt-[20px]'>


    {/* <div>  */}
    

    <div className={`lg:block ${catshow ? 'block' :'hidden'}`}
    > <ShopCategory/> 
    <ShopByColor/></div>

    {/* </div> */}



    <div className='w-[75%]  lg:ml-[50px] mt-[20px] ml-[15px] '>
  
     <ShopByProduct loading={loading} />

    </div>
   </Flex>
    </Container>
    </section>
    
    
    </>
   
  )
}

export default Shop
