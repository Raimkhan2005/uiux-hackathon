import React from 'react'
import Image from 'next/image'
import { newsletter } from '../constant/data'


function NewsLetter() {
  return (
    <div className='bg-[#F0F2F3] w-auto h-[550px] mt-[173px]  '>
      
     <div className='flex justify-center'>
      <h1 className='text-[50px] leading-[58.59px] font-medium items-center mt-12'>Or subscribe to the newsletter</h1>
      
     </div>
     

     <form className='flex justify-center gap-3 mt-[35px]'>
     <input type="email" placeholder='Email Address...' className='underline flex-1 leading-[18.75px] text-[16px] font-semibold' />
     <button type="submit" className='underline leading-[21.79px] text-[16px] font-normal'>SUBMIT</button>
     </form>

     <div className='flex justify-center mt-9 '>
     <h1 className='leading-[58.59px] text-[50px] font-medium'>Follow products and discounts on Instagram</h1>
     </div>

    <div className='flex gap-6 mx-10 mt-10'>
      {
        newsletter.map((letter:any)=>(
          <div className=''>
            <Image src={letter.image} width={200} height={200} alt="" className='rounded'/>
          </div>
        ))
      }
    </div>
 
    

    </div>

  )
}
 export default NewsLetter
