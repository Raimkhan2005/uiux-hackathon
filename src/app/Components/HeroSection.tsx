import React from 'react'
import Image from 'next/image'
import ProductImage from '../../../public/ProductImage.png'
import {ArrowRight } from 'lucide-react'


export default function HeroSection() {
  return (
    <main>
    <div className='flex bg-[#F0F2F3] w-full h-[850px] gap-x-20'>

    <div className='pl-[70px] pt-[229px] pb-[284px]'>
      <p className='text-[#272343] w-[177px] h-[14px] font-normal text-[14px] leading-[14px] mb-[24px]'>Welcome to chairy</p>
      <h1 className='text-[#272343] w-[557px] h-[198px] left-[70px] top-[267px] font-bold text-[60px] leading-[66px]'> Best Furniture Collection for your interior.</h1>
      <button className='bg-[#029FAE] rounded-lg pt-[14px] pr-[24px] pb-[14px] pl-[24px] flex gap-[20px] mt-[40px]'>Shop Now <ArrowRight w-16 h-9 /></button>
    </div>

    <div className=' mt-[115px] mb-[151px]'> 
     <Image src={ProductImage} alt="" width={434} height={584} />
    </div>


    </div>
   </main>






 
  )
}
