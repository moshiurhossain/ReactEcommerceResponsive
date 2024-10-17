import React from 'react'

const Listitem = ({children,className,onClick}) => {
  return (
    <li onClick={onClick} className={`cursor-pointer ${className}`}>{children}</li>
  )
}

export default Listitem
