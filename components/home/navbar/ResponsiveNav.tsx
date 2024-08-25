"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNav = () => {
  const [showNav, setShowNav]= useState(false)
  const showNavHandler = () =>setShowNav(true)
  const hideNanHandler= ()=>setShowNav(false)

  return (
    <div>
      <Navbar openNav={showNavHandler}/>
      <MobileNavbar showNav={showNav} closeNav={hideNanHandler}/>
    </div>
  )
}

export default ResponsiveNav
