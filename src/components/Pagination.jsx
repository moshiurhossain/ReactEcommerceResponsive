import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductCard2 from './ProductCard2';
import Flex from './Flex';

const Pagination = ({ itemsPerPage}) => {

let productData =useSelector((state)=>state.allproduct.product)



// pagination function copy 1st-part start
const items = productData;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
           <ProductCard2
           productDetailsFull={item}
            id={item.id}
             productImage={item.thumbnail}
             productName={item.title}
             productPrice={item.price}
              stock={item.stock}
              rating={item.rating}
           
           />
          </div>
        ))}
    </>
  );
}
// pagination function copy 1st-part end
///////////////////////////////////////////////
// pagination function copy 2nd-part start
const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
  
    setItemOffset(newOffset);
  };

  return (
    <Flex className='flex-wrap justify-between '>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className='flex mt-3 items-center '
        pageClassName='bg-black px-6 h-[30px] text-white ml-2  '
      />
    </Flex>
  );

// pagination function copy 2nd-part end
//////////////////////////////////////////////

}

export default Pagination
