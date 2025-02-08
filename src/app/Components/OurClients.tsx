import React from 'react'
import Zapier from "@/app/asset/Zapier.png";
import Logo3 from "@/app/asset/Logo3.png";
import Logo4 from "@/app/asset/Logo4.png";
import Logo5 from "@/app/asset/Logo5.png";
import Logo6 from "@/app/asset/Logo6.png";
import Logo7 from "@/app/asset/Logo7.png";
import Logo8 from "@/app/asset/Logo8.png";
import Image from 'next/image';

function OurClients() {
  return (
    <div>
        <div className="flex justify-around ">
          <Image src={Zapier} alt="" width={85} height={87} />
          <Image src={Logo3} alt="" width={107} height={109} />
          <Image src={Logo4} alt="" width={135} height={139} />
          <Image src={Logo5} alt="" width={63} height={65} />
          <Image src={Logo6} alt="" width={98} height={101} />
          <Image src={Logo7} alt="" width={113} height={115} />
          <Image src={Logo8} alt="" width={84} height={87} />
        </div>
    </div>
  )
}

export default OurClients
