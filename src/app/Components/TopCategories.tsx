import Image from "next/image";
import React from "react";
import Image5 from "../../../public/Image5.png";
import Image6 from "../../../public/Image6.png";
import Image7 from "../../../public/Image7.png";
function TopCategories() {
  return (
    <div className="w-full">
      <h1 className="text-[32px] leading-[35.2px] text-[#272343] ml-10">
        Top categories
      </h1>
      <div className=" mt-[44px] flex justify-between gap-4 mx-10">        
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
    </div>
  );
}

export default TopCategories;
