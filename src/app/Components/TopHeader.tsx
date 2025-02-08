import React from 'react'
import {ChevronDown,Check,Info} from "lucide-react"

export default function TopHeader() {
  return (
    <main>
        <div className='flex justify-between bg-[#272343] w-auto h-[45px]' >

        <div className='flex items-center'>
          <p className='text-white flex items-center mx-10 font-normal  text-[13px] leading-[14.3px]'> <Check className="w-[16px] h-[16px]"/>Free shipping on all orders over $50</p>
        </div>

        <div className='flex pr-10 space-x-5'>
            <button className='text-white flex items-center  gap-1 font-normal text-[13px] leading-[16.9px] '>Eng <ChevronDown size={20} /></button>
            <button className='text-white flex items-center font-normal text-[13px] leading-[16.9px]'>Fags</button>
            <button className='text-white flex items-center gap-2 font-normal text-[13px] leading-[16.9px]'><Info className="w-[16px] h-[16px]"/>Need help</button>
        </div>

        </div>
    </main>
  )
}