'use client'
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import '@/app/globals.css'
import ReactPlayer from "react-player"


const Hero = () => {
  const page = useRef(null)
  const heroContainer = useRef(null)
  const heroText = useRef(null)
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const registerButtonRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  useEffect(() => {
    registerButtonRef.current.addEventListener('mouseenter', () => {
      setIsPlaying(true)
    })
    registerButtonRef.current.addEventListener('mouseleave', () => {
      setIsPlaying(false)
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
      <video
        src="https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761"
        autoPlay
        loop
        muted
        className="absolute w-screen h-screen object-cover"
      />
      <div
        className={`relative w-full h-screen flex top-0 flex-col items-center justify-center space-y-12 md:space-y-0 bg-black text-white ${isTransparent ? 'mix-blend-normal' : 'mix-blend-multiply z-40'}`}
        ref={heroContainer}
        onClick={handleheroAnimation}
      >
        <span
          className={`click text-[24vw]`}
        >
          <span ref={heroText}>Lakshya'24</span>
        </span>
        <p className="-translate-y-14  lg:-translate-y-32  md:tracking-[.5em] text-xl click bg-white text-black pl-3.5 pr-2 py-1 ">Colors of Unity, Notes of Diversity</p>
        <Link ref={registerButtonRef} href="/register" className="btn-91 -translate-y-6 md:-translate-y-10 z-[51] click text-3xl">
          <span onClick={() => setIsTransparent(true)}>Register Now!</span>
        </Link>
        {isPlaying && (<ReactPlayer
          url="/register.mp3"
          playing={isPlaying}
          volume={0.8}
          width={0}
          height={0}
        />)}
      </div>
    </section>
  )
}

export default Hero