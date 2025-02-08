import React from 'react'
import Image from 'next/image'
import Logo from '@/app/asset/Logo.png'
import Cart from "@/app/asset/Cart.png"



export default function Navbar() {
  return (
    <header>
        <div className='flex justify-between bg-[#F0F2F3] w-full h-[84px] '>

            <div className='flex justify items-center mx-10'>
             <Image src={Logo} alt={"logo"}/>   
            </div>

            <div className='flex justify items-center pr-10'>
              <Image src={Cart} alt={"card"}/>
            </div>
            

        </div>
        </header>
    
  )
}