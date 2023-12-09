'use client';

import About from "@/components/main/About"
import Days from "@/components/main/Days"
import Gallery from "@/components/main/Gallery"
import Hero from "@/components/main/Hero"
import Ourteam from "@/components/main/Ourteam"
import Sponsors from "@/components/main/Sponsors"
import Loading from "./loading"
import { useEffect, useState } from "react"
import gsap from "gsap"
import Lenis from '@studio-freight/lenis'

export default function Home(){
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [fadeLoader, setFadeLoader] = useState<boolean>(false);

  useEffect(() => {
    if (fadeLoader) {
      gsap.delayedCall(0.5, () => setIsLoaded(true));
    }
  }, [fadeLoader]);

  useEffect(() => {
    gsap.delayedCall(3, () => setFadeLoader(true));
  }, []);

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
    {!isLoaded && <Loading fade={fadeLoader} />}
      <Hero />
      <Days />
      <About /> 
      <Gallery /> 
      <Sponsors />
      <Ourteam/>
    </>
  )
}