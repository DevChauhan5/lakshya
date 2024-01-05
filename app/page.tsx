'use client';

import About from "@/components/main/About"
import Days from "@/components/main/Days"
import Gallery from "@/components/main/Gallery"
import Hero from "@/components/main/Hero"
import Events from "@/components/main/Events";
import { Suspense, useEffect, useState } from "react"
import Lenis from '@studio-freight/lenis'
import MobGallery from "@/components/main/MobGallery";
import {Divider} from "@nextui-org/react";

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
      <Suspense fallback={<h1 className="text-5xl text-center tracking-wide">Loading...</h1>}>
      <Hero />
      <Divider className="my-4" />
      <Days />
      <Divider className="my-4" />
      <Events />
      <Divider className="my-4" />
      <About />
      <Divider className="my-4" />
      <div className="md:hidden">
        <MobGallery />
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      </Suspense>
    </main>
  )
}