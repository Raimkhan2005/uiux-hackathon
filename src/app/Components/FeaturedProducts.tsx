import Image from 'next/image'
import React from 'react'
import image1 from "../../../public/Image1.png";
import image2 from "../../../public/Image2.png";
import image3 from "../../../public/image3.png";
import image4 from "../../../public/image4.png";
import { ShoppingCart } from "lucide-react";

function FeaturedProducts() {
  return (
    <div>
       <div className="ml-10 ">
          <h1 className="text-[#272343] font-medium text-[32px] leading-[35.2px]">
            Featured Products
          </h1>
        </div>

         <div className="flex w-full h-[461px] mt-[84px] mx-10 gap-[24px]">
          
         <div>
            <Image src={image1} alt="" width={312} height={312} className="w-[312px] h-[312px]" />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex gap-56">
              <p className="mt-[10px] text-[18px] leading-[19.8px]">$20</p>
              <ShoppingCart className="bg-[#007580] rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>


           <div>
            <Image src={image2} alt="" width={312} height={312} className="w-[312px] h-[312px]" />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex gap-56 ">
              <p className="mt-[10px] text-[18px] leading-[19.8px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>

          <div>
            <Image src={image3} alt="" width={312} height={312} className="w-[312px] h-[312px]"/>
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex gap-56">
              <p className="mt-[10px] text-[18px] leading-[19.8px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div> 
          </div>

          <div>
            <Image src={image4} alt="" width={0} height={0} className="w-[312px] h-[312px]" />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair</p>
              
            <div className="flex gap-[224px]">
           
              <p className="mt-[10px] text-[18px] leading-[19.8px] ">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] rounded-xl w-[44px] h-[44px] p-[10px] flex  " />
            <div/>
          </div>
 
        </div>  
        </div>  
    </div>
  )
}

export default FeaturedProducts
