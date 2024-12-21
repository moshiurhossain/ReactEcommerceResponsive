import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Images from './Images'
import List from './List'
import Listitem from './Listitem'
import { FaRegHeart } from "react-icons/fa6"
import { BsCart3 } from "react-icons/bs"
import { IoSearchOutline } from "react-icons/io5"
import Flex from './Flex'
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, signOut } from "firebase/auth";
import { userLoginInfo } from '../slices/userSlice'


const Navbar = () => {
   
 
  let dispatch= useDispatch()
  let userData = useSelector((state)=>state.userLogin.value) 
  
  

// cart-product-quantity-show start
  let cartdata = useSelector((state)=>state.allproduct.cart)
// cart-product-quantity-show end

// account-toggle-show-hide start
let [accountShow,setAccountshow]=useState(false)
let accountref = useRef()
useEffect(()=>{
  window.addEventListener('click',function(e){
 if(accountref.current.contains(e.target)){
  setAccountshow(true)
 }else{
  setAccountshow(false)
 }
    
  })
 
})
// let handleAccount=()=>{
//   setAccountshow(!accountShow)
// }
// account-toggle-show-hide end
// Menu-toggle-show-hide Start
let [menuShow, setMenuShow]= useState(false)


let handleMenu = ()=>{
 setMenuShow(!menuShow)
}
// Menu-toggle-show-hide End



// LogOut start
const auth = getAuth();
let handleLogout = ()=>{
  signOut(auth).then(() => {
   dispatch(userLoginInfo(""));
    localStorage.setItem('user',"");
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
// Logout End

// productSearch start
let productData =useSelector((state)=>state.allproduct.product)


let [searchProduct,setSearchProduct] =useState([])


 let handleProductSearch = (e)=>{
  if(!e.target.value == ''){
    let productFilter= productData.filter((item)=> {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase()) 
     })
     setSearchProduct(productFilter)
  }else{setSearchProduct([])}


 }

// productSearch End

  return (
 <nav className='mt-10 border-b pb-4 border-gray-300 relative'>
   <Container>
    <Flex className='justify-between items-center'>
      
    <Link to='/'> <Images src="image/Logo.png" alt="LOGO"/></Link>
<div className={`${menuShow ? 'block' :'hidden' } xl:flex items-center w-full xl:w-[73.5%] justify-between absolute top-10 left-0 xl:static p-5 z-10 xl:py-0 bg-gray-200 xl:bg-white`}>
<List>
  <Link to='/'>  <Listitem className="font-poppins font-normal font-base text-black mt-3 xl:mt-0 block lg:inline-block mr-[20px] relative after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-0 after:bg-black after:h-[1px] hover:after:w-full after:duration-500">Home</Listitem></Link>
    
    <Listitem className="font-poppins font-normal font-base text-black mt-3 xl:mt-0 block lg:inline-block mr-[20px] relative after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-0 after:bg-black after:h-[1px] hover:after:w-full after:duration-500">Contact</Listitem>
    <Listitem className="font-poppins font-normal font-base text-black mt-3 xl:mt-0 block lg:inline-block mr-[20px] relative after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-0 after:bg-black after:h-[1px] hover:after:w-full after:duration-500">About</Listitem>
    <Link to='/signup'> <Listitem  className="font-poppins font-normal font-base text-black mt-3 xl:mt-0 block lg:inline-block mr-[20px] relative after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-0 after:bg-black after:h-[1px] hover:after:w-full after:duration-500">Sign up</Listitem></Link>
    <Link to='/shop'> <Listitem  className="font-poppins font-normal font-base text-black mt-3 xl:mt-0 block lg:inline-block mr-[20px] relative after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-0 after:bg-black after:h-[1px] hover:after:w-full after:duration-500">Shop</Listitem></Link>
  </List>
  <Flex className='items-center lg:gap-6 gap-4'>
    <div className='relative w-[245px] mt-5 lg:mt-0 '>
      {/* search bar start */}
    <input
   onChange={handleProductSearch}
    className='bg-searchInput w-full py-[10px] px-[20px] placeholder:font-poppins text-xs leading-[18px] placeholder:text-black' placeholder="what are you looking for ?" type='text ' /> 
   
    <IoSearchOutline  className='absolute top-[10px] right-[20px] text-[16px]'/> 
    {/* search bar end */} 
    {/* /////// */}
  {searchProduct.length > 0 && (

<div className='w-[290px] h-[200px] overflow-y-scroll bg-white border shadow-2xl absolute top-18 rounded-lg'>

<div className="relative">
  <table className="w-fit text-sm text-left rtl:text-right text-black dark:text-black">
    {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="p-[5px] py-3">
          Product name
        </th>
       
        <th scope="col" className="p-[5px] py-3">
          Category
        </th>
        <th scope="col" className="p-[5px] py-3">
          Price
        </th>
      </tr>
    </thead> */}
    <tbody>
      {searchProduct.map((item)=>(
 <Link to={`/productdetail/${item.id}`}>
      <tr className=" ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:black"
        >
         {`${item.title.slice(0,15)}...`}
        </th>
       
        <td className="px-6 py-4">{item.price}</td>
        {/* <td className="px-6 py-4">{item.category}</td> */}
      </tr> </Link>

      ) )}
     
   
    </tbody>
  </table>
</div>



    </div>

  )}

    {/* ////// */}
    </div>
   <Flex className='lg:gap-4 items-center gap-3 lg:mt-0 mt-4'>
   <FaRegHeart className='text-xl' />



   <Link className='relative' to='/cart'>
   <BsCart3 className='text-xl'/> 
 { cartdata.length == 0 ?  <p className='bg-white text-white w-[30px] h-[30px] rounded-full text-center absolute top-[-30px] leading-[30px]
   '>{cartdata.length}</p> : <p className='bg-titleColor text-white w-[30px] h-[30px] rounded-full text-center absolute top-[-30px] leading-[30px]
   '>{cartdata.length}</p>    }
  

   
  {/* //  <p className='bg-titleColor text-white w-[30px] h-[30px] rounded-full text-center absolute top-[-30px] leading-[30px]
  //  '>{cartdata.length}</p>  */}
   </Link> 






   <div className='flex items-center relative'>
 {/* use ref for account icon */}
   <div ref={accountref} ><MdOutlineManageAccounts className='text-xl cursor-pointer'  /></div>
 
 <div className={ ` ${accountShow ? 'block' : 'hidden'}`}>
<List className='text-searchInput rounded-[7px] absolute lg:w-[220px] w-[150px] lg:py-[5px] lg:pr-[10px] bg-gradient-to-r from-cyan-950  via-slate-600 to-black top-[35px] lg:right-0  right-4'>
<Flex className='items-center lg:gap-3 gap-2 font-poppins font-normal lg:text-[14px] text-[11px] lg:mt-[18px] mt-[12px] lg:ml-[20px] ml-[7px]'> <MdAccountCircle className='lg:text-xl' /> <Listitem>  {userData && userData.displayName}</Listitem>  </Flex>
<Flex className='items-center lg:gap-3 gap-2 font-poppins font-normal lg:text-[14px] text-[11px] lg:mt-[18px] mt-[12px] lg:ml-[20px] ml-[7px]'> <LuShoppingBag className='lg:text-xl' /> <Listitem>   My Order</Listitem>  </Flex>
<Flex className='items-center lg:gap-3 gap-2 font-poppins font-normal lg:text-[14px] text-[11px] lg:mt-[18px] mt-[12px] lg:ml-[20px] ml-[7px]'> <MdCancel className='lg:text-xl' /> <Listitem>   My Cancellations</Listitem>  </Flex>
<Flex className='items-center lg:gap-3 gap-2 font-poppins font-normal lg:text-[14px] text-[11px] lg:mt-[18px] mt-[12px] lg:ml-[20px] ml-[7px]'> <FaRegStar className='lg:text-xl'/> <Listitem>   My  Reviews</Listitem>  </Flex>
<Flex className='items-center lg:gap-3 gap-2 font-poppins font-normal lg:text-[14px] text-[11px] lg:mt-[18px] mt-[12px] lg:ml-[20px] ml-[7px] lg:pb-[10px] pb-[6px]'> <RiLogoutBoxLine className='lg:text-xl'/>
{userData ?  <button onClick={handleLogout}> <Listitem>  Logout</Listitem> </button>
: <Link to='/login'> <Listitem>  Login</Listitem> </Link> }
  </Flex>

</List>

 </div>

   </div>
   </Flex>

    
  
  
  </Flex>

</div>
<CiMenuBurger onClick={handleMenu} className='xl:hidden text-2xl absolute top-1 lg: right-3 pointer ' />

    </Flex>

 
   </Container>
 </nav>
  )
}

export default Navbar
