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
import MusicPlayer from "@/components/addons/MusicPlayer";
import MobGallery from "@/components/main/MobGallery";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main className="">
      <Hero />
      <Days />
      <Events />
      <About />
      <div className="md:hidden">
        <MobGallery />
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
    {/* <Sponsors /> */}
      {/* <Ourteam /> */}
      {/* <ScrollFun /> */}
    </main>
  )
}