'use client'

import { Bebas_Neue } from "next/font/google"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import '@/app/globals.css'


const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
})




const Hero = () => {
  const page = useRef(null)
  const cursor = useRef(null)
  const heroContainer = useRef(null)
  const heroText = useRef(null)
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const registerButtonRef = useRef(null)

  useEffect(() => {
    page.current.addEventListener('mousemove', (dets: any) => {
      gsap.to(cursor.current, {
        x: dets.x,
        y: dets.y,
      })
    })
    heroText.current.addEventListener('mouseenter', () => {
      gsap.to(cursor.current, {
        scale: 1,
        opacity: 1,
      })
    })
    heroText.current.addEventListener('mouseleave', () => {
      gsap.to(cursor.current, {
        scale: 0,
        opacity: 0,
      })
    })
    registerButtonRef.current.addEventListener('hover', () => {
      gsap.to(heroText.current, {
        
      })
    })
  }, [])

  const handleheroAnimation = () => {
    gsap.to(heroContainer.current, {
      backgroundColor: isTransparent ? 'black' : 'transparent',
      duration: 0.5,
      mixblendMode: 'multiply'
    })
    gsap.to(registerButtonRef.current, {
      backgroundColor: 'blue',
      duration: 0.5,
      color: 'white',
    })
    setIsTransparent(!isTransparent)
  }


  return (
    <section id="hero" ref={page} className="h-screen overflow-hidden">
      <div ref={cursor} className="scale-0 opacity-0 z-50 fixed bg-purple-600 text-white p-2">
        <h1 className={`${bebas.className} text-3xl hidden md:block`}>👆🏼 Click Me!</h1>
      </div>

      <video
        src="https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761"
        autoPlay
        loop
        muted
        className="absolute w-screen h-screen object-cover"
      >
      </video>
      <div
        className={`relative w-full h-screen flex top-0 flex-col items-center justify-center space-y-12 md:space-y-0 bg-black text-white ${isTransparent ? 'mix-blend-normal' : 'mix-blend-multiply z-40'}`}
        ref={heroContainer}
        onClick={handleheroAnimation}
      >
        <span
          className={`${bebas.className} cursor-pointer text-[24vw]`}
        >
          <span ref={heroText}>Lakshya'24</span>
        </span>
        <p className="-translate-y-14  lg:-translate-y-32  md:tracking-[.5em] text-xl cursor-pointer bg-white text-black pl-3.5 pr-2 py-1 ">Colors of Unity, Notes of Diversity</p>
        <Link ref={registerButtonRef} href="/register" className="btn-91 -translate-y-6 md:-translate-y-10 z-[51] cursor-pointer text-3xl">
          <span onClick={()=> setIsTransparent(true)}>Register Now!</span> 
        </Link>
      </div>
    </section>
  )
}

export default Hero