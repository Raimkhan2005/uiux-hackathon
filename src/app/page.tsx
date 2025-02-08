import React from "react";

import HeroSection from "./Components/HeroSection";
import MiddleSection from "./Components/MiddleSection";
import OurClients from "./Components/OurClients";
import FeaturedProducts from "./Components/FeaturedProducts";
import TopCategories from "./Components/TopCategories";
import OurProduct from "./Components/OurProduct";

export default function page() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <OurClients/>
      <FeaturedProducts/>
      <TopCategories/>
      <OurProduct/>
    </div>
  );
}
