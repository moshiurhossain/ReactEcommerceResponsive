import React from 'react'
import List from './List'
import Listitem from './Listitem'
import { Link, useLocation } from 'react-router-dom';
const BreadCrum = () => {

    let location = useLocation();
    let locationPath =location.pathname.split('/')[1];

  return (
    <div className='lg:mt-[80px] mt-[35px]'>
      <List className='flex font-poppins font-normal text-sm gap-2 text-gray-400'>
       <Link  to='/'> <Listitem>Home</Listitem> </Link>
       <Link > <Listitem>/</Listitem> </Link>
        <Listitem> {locationPath}</Listitem>
      </List>
      
    </div>
  )
}

export default BreadCrum
