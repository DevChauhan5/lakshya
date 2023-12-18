'use client'
import gsap from "gsap"
import { useContext, useEffect, useRef, useState } from "react"
import Link from "next/link"
import '@/app/globals.css'
import ReactPlayer from "react-player"
import Image from "next/image"
import MusicContext from "@/musicContext"

const Hero = () => {
  const page = useRef(null)
  const heroContainer = useRef(null)
  const heroText = useRef(null)
  const iconsRef = useRef<Array<HTMLImageElement>>([]);
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const [isbgvideo, setIsbgvideo] = useState<boolean>(false);
  const registerButtonRef = useRef(null)
  const {isPlaying, setIsPlaying} = useContext(MusicContext)
  const [registerAud, setRegisterAud] = useState<boolean>(false)
  const images = Array.from({ length: 12 }, (_, i) => `/images/floating/${i + 1}-bw.png`);

  useEffect(() => {
    const elements = gsap.utils.toArray(page.current.children);

  elements.forEach((element, i) => {
    gsap.fromTo(element as EventTarget, {
      autoAlpha: 0, // start at 0 opacity
    }, {
      autoAlpha: 1, // animate to 1 opacity
      duration: 1, // duration of the animation
      delay: i * 0.1, // stagger the start of each animation
    });
  });
    registerButtonRef.current.addEventListener('mouseenter', () => {
      setRegisterAud(true)
    })
    registerButtonRef.current.addEventListener('mouseleave', () => {
      setRegisterAud(false)
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
    if(isTransparent){
      setIsbgvideo(false)
      setIsPlaying(true)
    }else{
      setIsbgvideo(true)
      setIsPlaying(false)
    }
  }

  return (
    <section id="hero" ref={page} className="h-screen overflow-hidden relative">
        <video
          src="/main.mp4"
          autoPlay
          muted={isbgvideo ? false : true}
          loop
          className="absolute w-screen h-screen object-cover"
        />
      <div
        className={`relative w-full h-screen flex top-0 flex-col items-center justify-center space-y-12 md:space-y-0 bg-black text-white ${isTransparent ? 'mix-blend-normal' : 'mix-blend-multiply z-40'}`}
        ref={heroContainer}
        onClick={handleheroAnimation}
      >
        <span
          className={`click text-[24vw] z-20`}
        >
          <span ref={heroText}>Lakshya'24</span>
        </span>
        <p className="-translate-y-14  lg:-translate-y-32  md:tracking-[.5em] text-xl click bg-white text-black pl-3.5 pr-2 py-1 z-20">Harmony in diversity, Spectrum of talents</p>
        <Link ref={registerButtonRef} href="/register" className="btn-91 -translate-y-6 md:-translate-y-10 z-[51] click text-3xl">
          <span onClick={() => setIsTransparent(true)}>Register Now!</span>
        </Link>
        {registerAud && (<ReactPlayer
          url="/register.mp3"
          playing={registerAud}
          volume={0.8}
          width={0}
          height={0}
        />)}
      </div>
    </section>
  )
}

export default Hero