import Image from 'next/image'
import React from 'react'
import './Navbar.css'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <Image src='/logo.svg' fill alt='' />
      </div>
    </div>
  )
}
