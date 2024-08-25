"use client"
import { navLinks } from "@/constant/constant"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HiBars3BottomRight } from "react-icons/hi2"

type Props = {
  openNav:()=>void;
}

const Navbar = ({openNav}:Props) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(()=>{
    const handler = () =>{
      if(window.scrollY >= 90){
        setNavBg(true)
      }
      if(window.scrollY < 90){
        setNavBg(false)
      }
    }
    window.addEventListener("scroll", handler);
    return ()=>window.removeEventListener("scroll", handler);
  }) 

  return (
    <div className={`fixed ${navBg ? "bg-indigo-800" : 'fixed'} w-full transition-all duration-75  z-[1000] h-[12vh]`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Image src="/images/logo.png"
          alt="logo"
          width={90}
          height={90}
        />
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav__link">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button className="md:px-10 md:py-2 px-8 py-1.5 text-white 
                  font-semibold text-base bg-pink-700 hover:bg-pink-900
                  transition-all duration-200 rounded-xl">
            signup Now
          </button>
          <HiBars3BottomRight onClick={openNav} className="h-8 w-8 cursor-pointer text-white lg:hidden"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
