import React from "react";
import Image from "next/image";
import Zapier from "@/app/asset/Zapier.png";
import Logo3 from "@/app/asset/Logo3.png";
import Logo4 from "@/app/asset/Logo4.png";
import Logo5 from "@/app/asset/Logo5.png";
import Logo6 from "@/app/asset/Logo6.png";
import Logo7 from "@/app/asset/Logo7.png";
import Logo8 from "@/app/asset/Logo8.png";
import image from "../../../public/Image.png";
import image2 from "../../../public/Image2.png";
import image3 from "../../../public/image3.png";
import image4 from "../../../public/image4.png";
import { ShoppingCart } from "lucide-react";

const MiddleSection = () => {
  return (
    <main>
      <div className="w-fit h-[461px] top-[1270px] ">
        <div className="flex justify-around">
          <Image src={Zapier} alt="" width={85} height={87} />
          <Image src={Logo3} alt="" width={107} height={109} />
          <Image src={Logo4} alt="" width={135} height={139} />
          <Image src={Logo5} alt="" width={63} height={65} />
          <Image src={Logo6} alt="" width={98} height={101} />
          <Image src={Logo7} alt="" width={113} height={115} />
          <Image src={Logo8} alt="" width={84} height={87} />
        </div>

        <div className="ml-[100px]">
          <h1 className="w-[286px] h-[35px] text-[#272343] font-semibold text-[32px] leading-[35.2px] text-right ">
            Featured Products
          </h1>
        </div>

        <div className="flex mt-[84px] mx-4 gap-[24px]">
          <div>
            <Image src={image} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
          <div className="flex space-x-60 ">
            <p className="mt-[10px]">$20</p>
            <ShoppingCart className="bg-[#007580] text-white rounded-xl w-[44px] h-[44px] p-[10px]"/>
            </div>
          </div>

          <div>
            <Image src={image2} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex space-x-60 ">
            <p className="mt-[10px]">$20</p>
            <ShoppingCart className="bg-[#F0F2F3] rounded-xl w-[44px] h-[44px] p-[10px]"/>
            </div>
          </div>
           
          <div>
             <Image src={image3} alt="" width={312} height={312} />
             <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair</p>
              <div className="flex space-x-60">
             <p className="mt-[10px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] rounded-xl w-[44px] h-[44px] p-[10px]"/>
              </div>
          </div>

          <div>
            <Image src={image4} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">Library Stool Chair</p>
            <div className="flex space-x-60">
            <p className="mt-[10px]">$20</p>
            <ShoppingCart className="bg-[#F0F2F3] rounded-xl w-[44px] h-[44px] p-[10px]"/>
            <div/>

          </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MiddleSection;
