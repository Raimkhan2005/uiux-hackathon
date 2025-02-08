import React from 'react'
import { products } from '../constant/data'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'


function AllProduct() {
  return (
<div className='mx-10'>
        <h1 className='font-semibold leading-[35.2px] text-[32px] text-[#272343]'>All Products</h1>
   <div className='grid grid-cols-4 gap-4 mt-[44px]'>
     {
        products.map((nickname:any,index:number)=>(
         <div key={index}>
   
            <Image src={nickname.image} alt={nickname.name} width={312} height={312} className='rounded-lg'/>
            <h2 className='text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]'>{nickname.name}</h2>

            <div className='flex space-x-60'>
            <h2 className='mt-[10px]' >${nickname.price}</h2> 
            <ShoppingCart className='bg-[#F0F2F3] text-black rounded-xl w-[44px] h-[44px] p-[10px] '/>
            </div>
           
         </div>
        ))
     }
   </div>
</div>
  )
}

export default AllProduct
