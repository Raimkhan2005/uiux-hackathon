import React from "react";
import Image from "next/image";
import Imageblock from "../../../public/Imageblock.jpeg";
import delivery from "@/app/asset/Delivery.png";
import checkmark from "@/app/asset/Checkmark.png";
import purchase from "@/app/asset/Purchase.png";
import Flower from "@/app/asset/Flower.png";
import Image11 from "../../../public/Image11.png"
import Image9 from "../../../public/Image9.png"
import Image10 from "../../../public/Image10.png"

function OurPopularpt() {
  return (
    <div>
      <div className="flex mx-9 gap-[29px]">
        <div className="h-[478px] w-[672px] bg-[#007580] pt-16 p-16">
          <h1 className="text-[32px] font-bold leading-[38.73px] text-[#FFFFFF] ">
            About Us - Comforty
          </h1>
          <p className="text-[18px] leading-[21.8px] font-normal text-[#FFFFFF] mt-6">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.{" "}
          </p>
          <button className="text-[16px] leading-6 font-normal bg-[#F9F9F926] text-[#FFFFFF] mt-[70px] p-3 ">
            View collection
          </button>
        </div>

        <div>
          <Image
            src={Imageblock}
            width={619}
            height={478}
            alt=""
            className="w-[619px] h-[478px]"
          />
        </div>
      </div>

      <div>
        <div className="font-semibold text-[32px] leading-[35.2px] text-[#272343] text-center mt-[100px]">
          What makes our Brand Different
        </div>

        <div className="flex mx-9 gap-[29.42px] mt-12">
          <div className="bg-[#F9F9F9] w-[309.45px] h-[244px] p-12">
            <Image src={delivery} height={24} width={24} alt="" />
            <p className="font-normal text-[20px] leading-[28px] pt-3">
              Next day as standard
            </p>
            <p className="font-normal text-[16px] leading-[24px] pt-3">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className="bg-[#F9F9F9] w-[309.45px] h-[244px] p-12">
            <Image src={checkmark} height={24} width={24} alt="" />
            <p className="font-normal text-[20px] leading-[28px] pt-3">
               Made by true artisans
            </p>
            <p className="font-normal text-[16px] leading-[24px] pt-3">
            Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className="bg-[#F9F9F9] w-[309.45px] h-[244px] p-12">
            <Image src={purchase} height={24} width={24} alt="" />
            <p className="font-normal text-[20px] leading-[28px] pt-3">
            Unbeatable prices
            </p>
            <p className="font-normal text-[16px] leading-[24px] pt-3">
            For our materials and quality you won’t find better prices anywhere
            </p>
          </div>

          <div className="bg-[#F9F9F9] w-[309.45px] h-[244px] p-12">
            <Image src={Flower} height={24} width={24} alt="" />
            <p className="font-normal text-[20px] leading-[28px] pt-3">
            Recycled packaging
            </p>
            <p className="font-normal text-[16px] leading-[24px] pt-3">
            We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>

<div className="mx-9 ">
    <h1 className="font-semibold text-[32px] leading-[35,2px] text-[#272343] mt-[131px]">Our Popular Products </h1>

  <div className="flex gap-5 mt-11 mb-16">
    <div>
    <Image src={Image11} width={630} height={375} alt=""/>
    <p className="font-normal text-[20px] leading-[28px] text-[#2A254B]">The Poplar suede sofa</p>
    <p className="font-normal text-[18px] leading-[27px] text-[#2A254B]">$99.00</p>
    </div>

    <div>
    <Image src={Image9} width={305} height={375} alt=""/>
    <p className="font-normal text-[20px] leading-[28px] text-[#2A254B]">The Dandy chair</p>
    <p className="font-normal text-[18px] leading-[27px] text-[#2A254B]">$99.00</p>
    </div>

    <div>
    <Image src={Image10} width={305} height={375} alt=""/>
    <p className="font-normal text-[20px] leading-[28px] text-[#2A254B]">The Dandy chair</p>
    <p className="font-normal text-[18px] leading-[27px] text-[#2A254B]">$99.00</p>
    </div>

  </div>

  
</div>


    </div>
  );
}

export default OurPopularpt;
