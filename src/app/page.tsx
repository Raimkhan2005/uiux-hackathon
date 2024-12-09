import React from 'react'
import TopHeader from './Components/TopHeader'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import MiddleSection from './Components/MiddleSection'

export default function page() {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <Navbar/>
      <HeroSection/>
      <MiddleSection/>
      
    </div>
  )
}

