import React, { useState,useEffect } from 'react'
import List from './List'
import Listitem from './Listitem'

import axios from 'axios'

import { useDispatch,useSelector } from 'react-redux'
import { filterProductreducer, productReducer } from '../slices/productSlice'


const ShopCategory = () => {

  
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

useEffect(()=>{
  let uniqueCategory=[... new Set(allproducts.map((item) => item.category ))]
  setCategory(uniqueCategory)
},[allproducts]);
let [category,setCategory]=useState([])

let handleFilterCategory=(item)=>{
let filterProduct= allproducts.filter((Citem)=> Citem.category == item
  ); dispatch(filterProductreducer(filterProduct))
}

let handleAllProduct=()=>{
  dispatch(productReducer(allproducts))
}



  return (
    <div>
   



      <h2 className='font-poppins font-bold lg:text-[20px] text-[15px] '> Category</h2>
      <List>
   
      <Listitem    
      onClick={handleAllProduct}
      className='select-none cursor-pointer font-poppins text-[12px] lg:text-base font-normal leading-6 flex justify-between  items-center mt-4'
      
      
      >All Products</Listitem>  

        {category.map((item)=>( <Listitem onClick={()=>handleFilterCategory(item)}   
      
        className='select-none cursor-pointer font-poppins text-[12px] lg:text-base font-normal leading-6 flex justify-between  items-center mt-4'
        
        
        >{item}</Listitem>))}
      
      

      </List>
    </div>
  )
}

export default ShopCategory
