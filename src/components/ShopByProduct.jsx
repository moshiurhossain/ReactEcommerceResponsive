import React, { useState } from 'react'
import Flex from './Flex'
import ProductCard2 from './ProductCard2'
import P3 from './../assets/P3.png'
import Pagination from './Pagination'

const ShopByProduct = ({loading}) => {


  let [perPage,setPerPage]=useState(6)
let handlePerPage =(e)=>{
setPerPage(e.target.value)
}

  return (
    <div>
        <div className='flex justify-end items-center mb-[20px] '>
            <p className='font-poppins font-normal'>Show :</p>
    <select id="countries" className="lg:w-[78px] w-[60px] bg-gray-200 rounded-md font-poppins font-normal  text-xs lg:text-sm mx-[9px] "  
    onChange={handlePerPage}
    >
    <option selected value="6">6</option>    
    <option selected value="12">12</option>
    <option value="16">16</option>
  </select>
    </div>
    <div className=''>
      {
      loading ? (<Flex className='flex-wrap justify-between '>
{/* first loading */}
<div
  role="status"
  className="max-w-sm p-4  border-gray-200 rounded shadow animate-pulse md:p-6"
>
  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
    <svg
      className="w-10 h-10 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
    </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 
  <div className="flex items-center mt-4">
 
  </div>
  <span className="sr-only">Loading...</span>
</div>
{/* second loading */}
<div
  role="status"
  className="max-w-sm p-4  border-gray-200 rounded shadow animate-pulse md:p-6"
>
  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
    <svg
      className="w-10 h-10 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
    </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 
  <div className="flex items-center mt-4">
 
  </div>
  <span className="sr-only">Loading...</span>
</div>

{/* third loading */}
<div
  role="status"
  className="max-w-sm p-4  border-gray-200 rounded shadow animate-pulse md:p-6"
>
  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
    <svg
      className="w-10 h-10 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
    </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 
  <div className="flex items-center mt-4">
 
  </div>
  <span className="sr-only">Loading...</span>
</div>
{/* third loading */}
<div
  role="status"
  className="max-w-sm p-4  border-gray-200 rounded shadow animate-pulse md:p-6"
>
  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
    <svg
      className="w-10 h-10 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
    </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 
  <div className="flex items-center mt-4">
 
  </div>
  <span className="sr-only">Loading...</span>
</div>
{/* third loading */}
<div
  role="status"
  className="max-w-sm p-4  border-gray-200 rounded shadow animate-pulse md:p-6"
>
  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
    <svg
      className="w-10 h-10 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
    </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 
  <div className="flex items-center mt-4">
 
  </div>
  <span className="sr-only">Loading...</span>
</div>
{/* third loading */}
<div
  role="status"
  className="max-w-sm p-4  border-gray-200 rounded shadow animate-pulse md:p-6"
>
  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
    <svg
      className="w-10 h-10 text-gray-200 dark:text-gray-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
    </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
 
  <div className="flex items-center mt-4">
 
  </div>
  <span className="sr-only">Loading...</span>
</div>





</Flex>)  :(
      
 <Pagination itemsPerPage={perPage}  />   
      
 )}
     
    
    
    </div>
  
    </div>
  )
}

export default ShopByProduct
