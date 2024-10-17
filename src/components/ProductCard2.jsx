import Images from './Images'
import Product1 from '../assets/Product1.png'
import Flex from './Flex'
import List from './List'
import Listitem from './Listitem'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Rate } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartReducer } from '../slices/productSlice'


const ProductCard2 = ({productName,productPrice,productOffer,productImage,productDiscount,stock,rating,id,productDetailsFull}) => {

  let dispatch =useDispatch();

  let productNavigate =useNavigate();

  let handleProductDetails=()=>{
    
    productNavigate(`/productdetail/${id}`)
  }

let handleAddToCart=()=>{
  dispatch(cartReducer({...productDetailsFull,qun:1}));
  // localStorage.setItem("cart",JSON.stringify(productDetailsFull))
}

  return (
    <div className='lg:w-[270px] w-full sm:px-3 md:px-2 mb-[10px] py-[5px] cursor-pointer'
   
    >
   <div className='overflow-hidden h-[250px] w-full bg-searchInput rounded-[4px] flex justify-center items-center relative group'>
    
    <div className='absolute top-[12px] right-[12px]'>
    <div className='bg-white p-[5px] rounded-full'><FaRegHeart  className='text-2xl'/></div>
    <div className='bg-white p-[5px] rounded-full mt-[13px]'><FaRegEye className='text-2xl' /></div>
    </div>
    
   <Images src={productImage}  onClick={handleProductDetails} />
   <button
   onClick={handleAddToCart}
   className='font-poppins text-base text-white font-medium bg-black group-hover:bottom-0 bottom-[-100%] w-full duration-500 absolute  left-0 rounded-b-[4px] py-2'>Add To Cart</button>
   </div>
   <h2 className='font-poppins font-medium text-base leading-[24px] mt-4'>{productName}</h2>
 <Flex><h3 className='font-poppins font-medium text-base leading-[24px] text-titleColor'>{productPrice}</h3> <del className='font-poppins font-medium text-base leading-[24px] text-[#808080] ml-[12px]'>{productOffer}</del></Flex>  
 <Flex className='mt-[10px] gap-[5px]'>
    <List className='flex gap-[5px] '>
    <Rate allowHalf defaultValue={rating} />
    </List>
    <h2 className='text-[#808080] font-poppins font-semibold text-[14px]'>({stock ? stock : "88"})</h2>
 </Flex>
    </div>
  )
}

export default ProductCard2
