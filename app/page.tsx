'use client';

import About from "@/components/main/About"
import Days from "@/components/main/Days"
import Gallery from "@/components/main/Gallery"
import Hero from "@/components/main/Hero"
import Ourteam from "@/components/main/Ourteam"
import Sponsors from "@/components/main/Sponsors"
import Events from "@/components/main/Events";
import { useEffect } from "react"
import Lenis from '@studio-freight/lenis'
import ScrollFun from "@/components/addons/ScrollFun";
import ImageFun from "@/components/addons/ImageFun";

export default function Home(){
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <>
      <Hero />
      <Days /> 
      <Events /> 
      <About /> 
      <Gallery /> 
      <Sponsors />
      <Ourteam/> 
      {/* <ImageFun />
      <ScrollFun /> */}
    </>
  )
}