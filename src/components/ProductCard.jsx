
import Images from './Images'
import Product1 from '../assets/Product1.png'
import Flex from './Flex'
import List from './List'
import Listitem from './Listitem'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const ProductCard = ({productName,productPrice,productOffer,productImage,productDiscount}) => {

  return (
    <div className='lg:w-[270px] w-full sm:px-3 md:px-2'>
   <div className='overflow-hidden h-[250px] w-full bg-searchInput rounded-[4px] flex justify-center items-center relative group'>
    <h5 className='font-poppins text-sm font-normal text-white bg-titleColor py-1 px-3 rounded-[4px] absolute top-[12px] left-[12px]'>{productDiscount}</h5>
    <div className='absolute top-[12px] right-[12px]'>
    <div className='bg-white p-[5px] rounded-full'><FaRegHeart  className='text-2xl'/></div>
    <div className='bg-white p-[5px] rounded-full mt-[13px]'><FaRegEye className='text-2xl' /></div>
    </div>
    
   <Images src={productImage} />
   <button className='font-poppins text-base text-white font-medium bg-black group-hover:bottom-0 bottom-[-100%] w-full duration-500 absolute  left-0 rounded-b-[4px] py-2'>Add To Cart</button>
   </div>
   <h2 className='font-poppins font-medium text-base leading-[24px] mt-4'>{productName}</h2>
 <Flex><h3 className='font-poppins font-medium text-base leading-[24px] text-titleColor'>{productPrice}</h3> <del className='font-poppins font-medium text-base leading-[24px] text-[#808080] ml-[12px]'>{productOffer}</del></Flex>  
 <Flex className='mt-[10px] gap-[5px]'>
    <List className='flex gap-[5px] '>
        <Listitem > <FaStar className='text-[#FFAD33]' /> </Listitem>
        <Listitem> <FaStar className='text-[#FFAD33]' /> </Listitem>
        <Listitem> <FaStar className='text-[#FFAD33]' /> </Listitem>
        <Listitem> <FaStar className='text-[#FFAD33]' /> </Listitem>
        <Listitem> <FaStar className='text-[#FFAD33]' /> </Listitem>
    </List>
    <h2 className='text-[#808080] font-poppins font-semibold text-[14px]'>(88)</h2>
 </Flex>
    </div>
  )
}

export default ProductCard
