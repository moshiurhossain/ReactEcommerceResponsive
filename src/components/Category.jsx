import React, { useState } from 'react'
import List from './List'
import Listitem from './Listitem'
import { FaChevronRight } from "react-icons/fa";
import Flex from './Flex';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';





const Category = () => {

let [CategoryShow,setCategoryShow] = useState(false);


  return (
    <div className='mr-4'>
 <div onClick={()=>setCategoryShow(!CategoryShow) }>
  <Flex className='cursor-pointer items-center gap-2 mt-[5px] lg:hidden'><BiSolidCategoryAlt className='text-lg' /><h2 className='select-none font-poppins text-lg'>Category</h2> </Flex> </div>  
     <List className={`mt-6 lg:block ${CategoryShow ? 'block' : 'hidden'}`}>
     
     <Listitem className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Women's Fashion 
       {true ?<FaChevronRight /> : ''} </Listitem>
     <Listitem  className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Men's Fashion {false ?<FaChevronRight /> : ''}</Listitem>
     <Listitem  className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Electronics {true ?<FaChevronRight /> : ''}</Listitem>
     <Listitem className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Home & Lifestyle {false ?<FaChevronRight /> : ''}</Listitem>
     <Listitem className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Medicine {false ?<FaChevronRight /> : ''}</Listitem>
     <Listitem className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Sports & Outdoor {false ?<FaChevronRight /> : ''}</Listitem>
     <Listitem className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Babys & Toys {false ?<FaChevronRight /> : ''}</Listitem>
     <Listitem className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Groceries & Pets {false ?<FaChevronRight /> : ''}</Listitem>
     <Listitem className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Heath & Beauty 
       {false ?<FaChevronRight /> : ''}</Listitem>
       <Link to='/shop'><Listitem className='font-poppins text-base font-normal leading-6 flex justify-between items-center mt-4'>Shop
      </Listitem></Link>
   </List>
  
 
    </div>
  )
}

export default Category
