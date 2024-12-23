import React from "react";
import Image from "next/image";
import Zapier from "@/app/asset/Zapier.png";
import Logo3 from "@/app/asset/Logo3.png";
import Logo4 from "@/app/asset/Logo4.png";
import Logo5 from "@/app/asset/Logo5.png";
import Logo6 from "@/app/asset/Logo6.png";
import Logo7 from "@/app/asset/Logo7.png";
import Logo8 from "@/app/asset/Logo8.png";
import image1 from "../../../public/Image1.png";
import image2 from "../../../public/Image2.png";
import image3 from "../../../public/image3.png";
import image4 from "../../../public/image4.png";
import { ShoppingCart } from "lucide-react";
import Image5 from "../../../public/Image5.png";
import Image6 from "../../../public/Image6.png";
import Image7 from "../../../public/Image7.png";
import Itemcategory1 from "../../../public/Itemcategory1.png";
import Itemcategory2 from "../../../public/Itemcategory2.png";
import Itemcategory3 from "../../../public/Itemcategory3.png";
import Itemcategory4 from "../../../public/Itemcategory4.png";
import Itemcategory5 from "../../../public/Itemcategory5.png";
import image8 from "../../../public/image8.png";

const MiddleSection = () => {
  return (
    <main>
      <div className="w-full h-[461px] top-[1270px] ">
        <div className="flex justify-around">
          <Image src={Zapier} alt="" width={85} height={87} />
          <Image src={Logo3} alt="" width={107} height={109} />
          <Image src={Logo4} alt="" width={135} height={139} />
          <Image src={Logo5} alt="" width={63} height={65} />
          <Image src={Logo6} alt="" width={98} height={101} />
          <Image src={Logo7} alt="" width={113} height={115} />
          <Image src={Logo8} alt="" width={84} height={87} />
        </div>

        <div className="ml-[45px] ">
          <h1 className="text-[#272343] font-medium text-[32px] leading-[35.2px] ">
            Featured Products
          </h1>
        </div>

         <div className="flex w-full h-[461px] mt-[84px] mx-5 gap-[24px]">
          
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

        <div className="w-full h-[508px] mt-[136px]">
          <h1 className="text-[32px] leading-[35.2px] text-[#272343] ml-[45px]">
            Top categories
          </h1>

          <div className=" mt-[44px] flex justify-between mx-4">
            <div className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-shadown">
              <Image
                src={Image5}
                alt=""
                width={300}
                height={300}
                className="object-cover w-[424px] h-[424px]"
              />

              <div className="absolute bottom-0 p-4 text-white bg-[#000000B2]  w-[424px] h-[85px] to-transparent ">
                <h3 className="">Wing Chair</h3>
                <p className="">3,584 Products</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg hover:shadow-lg transition-shadown">
              <Image
                src={Image6}
                alt=""
                width={300}
                height={300}
                className="object-cover w-[424px] h-[424px]"
              />

              <div className="absolute bottom-0 p-4 text-white bg-[#000000B2]  w-[424px] h-[85px] to-transparent ">
                <h3 className="">Wooden chair</h3>
                <p className="">157 Products</p>
              </div>
            </div>

            <div className=" group relative overflow-hidden rounded-lg hover:shadow-lg transition-shadown ">
              <Image
                src={Image7}
                alt=""
                width={300}
                height={300}
                className="object-cover w-[424px] h-[424px]"
              />

              <div className="absolute bottom-0 p-4 text-white  bg-[#000000B2] w-[424px] h-[85px] to-transparent ">
                <h3 className="">Desk chair</h3>
                <p className="">154 Products</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[648px] mt-[229px] mx-4 flex gap-4">
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

            <div className="  grid grid-cols-4 mt-[100px] m-4 ">
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











      </div>
    </main>
  );
};
export default MiddleSection;
