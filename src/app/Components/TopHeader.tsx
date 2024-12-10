import React from 'react'
import {ChevronDown,Check,Info} from "lucide-react"

export default function TopHeader() {
  return (
    <main>
        <div className='flex justify-between bg-[#272343] w-auto h-[45px]' >

        <div className='flex items-center'>
          <p className='text-white flex items-center pl-[300px] font-normal  text-[13px] leading-[14.3px]'> <Check classname="w-[10.67px] h-[7.33px]"/>Free shipping on all orders over $50</p>
        </div>

        <div className='flex pr-[300px] space-x-5'>
            <button className='text-white flex items-center  gap-1 font-normal text-[13px] leading-[16.9px] '>Eng <ChevronDown classname="w-7 h-[3.5px]" /></button>
            <button className='text-white flex items-center font-normal text-[13px] leading-[16.9px]'>Fags</button>
            <button className='text-white flex items-center gap-2 font-normal text-[13px] leading-[16.9px]'><Info classname="w-16 h-16"/>Need help</button>
        </div>

        </div>
    </main>
  )
}