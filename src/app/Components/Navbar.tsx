import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between bg-[#FFFFFF] w-auto h-[74px] pb-[14px] pl-[300px] pr-[300px] pt-[14px]">
        <div className="flex items-center  space-x-5 ">
          <Link
            href="/home"
            className="text-[#007580] font-medium text-[14px] leading-[15.4px]"
          >
            home
          </Link>

          <Link
            href="/shop"
            className="text-[#007580] font-medium text-[14px] leading-[15.4px]"
          >
            Shop
          </Link>
          <Link
            href="/product"
            className="text-[#007580] font-medium text-[14px] leading-[15.4px]"
          >
            Product
          </Link>
          <Link
            href="/page"
            className="text-[#007580] font-medium text-[14px] leading-[15.4px]"
          >
            Page
          </Link>
          <Link
            href="/about"
            className="text-[#007580] font-medium text-[14px] leading-[15.4px]"
          >
            About
          </Link>
        </div>

        <div className="flex ">
          <button className="flex items-center font-normal text-[14px] leading-[15.4px] ">
            Contact: (+92) 322581547
          </button>
        </div>
      </div>
    </nav>
  );
}
