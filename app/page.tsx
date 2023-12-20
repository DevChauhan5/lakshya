'use client';

import About from "@/components/main/About"
import Days from "@/components/main/Days"
import Gallery from "@/components/main/Gallery"
import Hero from "@/components/main/Hero"
import Ourteam from "@/components/main/Ourteam"
import Sponsors from "@/components/main/Sponsors"
import Events from "@/components/main/Events";
import { useEffect, useState } from "react"
import Lenis from '@studio-freight/lenis'
import ScrollFun from "@/components/addons/ScrollFun";
import MusicContext from "@/musicContext";
import MusicPlayer from "@/components/addons/MusicPlayer";

export default function Home(){
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

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
    <MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
    <Hero />
      <Days /> 
      <Events /> 
      <About /> 
      <Gallery /> 
      <Sponsors />
      <Ourteam/> 
      {/* <ScrollFun /> */}
    <MusicPlayer/>
    </MusicContext.Provider>
    </>
  )
}