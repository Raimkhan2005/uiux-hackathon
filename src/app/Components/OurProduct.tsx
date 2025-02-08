import Image from "next/image";
import React from "react";
import image1 from "../../../public/Image1.png";
import image2 from "../../../public/Image2.png";
import image3 from "../../../public/image3.png";
import image4 from "../../../public/image4.png";
import Image5 from "../../../public/Image5.png";
import image8 from "../../../public/image8.png";
import { ShoppingCart } from "lucide-react";
import Itemcategory1 from "../../../public/Itemcategory1.png";
import Itemcategory2 from "../../../public/Itemcategory2.png";
import Itemcategory3 from "../../../public/Itemcategory3.png";
import Itemcategory4 from "../../../public/Itemcategory4.png";
import Itemcategory5 from "../../../public/Itemcategory5.png";
function OurProduct() {
  return (
    <div>
      <div className="w-full h-[648px] mt-[229px] mx-6 flex gap-4 ">
            <Image src={Itemcategory1} alt="" width={648} height={648} />
            <div className=" grid grid-cols-2 gap-4 ">
              <Image src={Itemcategory2} alt="" width={312} height={312} />
              <Image src={Itemcategory3} alt="" width={312} height={312} />
              <Image src={Itemcategory4} alt="" width={312} height={312} />
              <Image src={Itemcategory5} alt="" width={312} height={312} />
            </div>
          </div>
      <div className="w-full h-[919px] mt-[173px] mx-3 ">
        <h1 className="text-[32px] leading-[35.2px] text-[#272343] text-center font-medium">
          Our product
        </h1>

        <div className="  grid grid-cols-4 mt-[60px] m-4 ">
          <div>
            <Image src={image1} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex space-x-60 ">
              <p className="mt-[10px]">$20</p>
              <ShoppingCart className="bg-[#007580] text-white rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>

          <div>
            <Image src={image2} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex space-x-60 ">
              <p className="mt-[10px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] text-black rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>

          <div>
            <Image src={image3} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex space-x-60 ">
              <p className="mt-[10px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] text-black rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>

          <div>
            <Image src={image4} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex space-x-60 ">
              <p className="mt-[10px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] text-black rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>

          <div className="mt-[40px]">
            <Image src={Image5} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex space-x-60 ">
              <p className="mt-[10px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] text-black rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>

          <div className="mt-[40px]">
            <Image src={Itemcategory4} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex space-x-60 ">
              <p className="mt-[10px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] text-black rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>

          <div className="mt-[40px]">
            <Image src={image8} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex space-x-60 ">
              <p className="mt-[10px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] text-black rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>

          <div className="mt-[40px]">
            <Image src={image1} alt="" width={312} height={312} />
            <p className="text-[#007580] font-normal text-[16px] leading-[20.8px] mt-[14px]">
              Library Stool Chair
            </p>
            <div className="flex space-x-60 ">
              <p className="mt-[10px]">$20</p>
              <ShoppingCart className="bg-[#F0F2F3] text-black rounded-xl w-[44px] h-[44px] p-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
