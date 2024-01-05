'use client'
import gsap from "gsap"
import { useContext, useEffect, useRef, useState } from "react"
import Link from "next/link"
import '@/app/globals.css'
import ReactPlayer from "react-player"
import Image from "next/image"
import MusicContext from "@/musicContext"
import VideoBg from "../addons/VideoBg"

const Hero = () => {
  const page = useRef<HTMLDivElement | null>(null)
  const heroContainer = useRef(null)
  const heroText = useRef(null)
  const [clickHere, setClickHere] = useState<boolean>(true)
  const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const [isbgvideo, setIsbgvideo] = useState<boolean>(false);
  const registerButtonRef = useRef<HTMLButtonElement | null>(null);
  const { isPlaying, setIsPlaying } = useContext(MusicContext) || {};
  const [registerAud, setRegisterAud] = useState<boolean>(false)
  const images = Array.from({ length: 12 }, (_, i) => `/images/floating/${i + 1}-bw.png`);

  useEffect(() => {
    const elements = page.current ? gsap.utils.toArray(page.current.children) : [];

    elements.forEach((element, i) => {
      gsap.fromTo(element as EventTarget, {
        autoAlpha: 0, // start at 0 opacity
      }, {
        autoAlpha: 1, // animate to 1 opacity
        duration: 1, // duration of the animation
        delay: i * 0.1, // stagger the start of each animation
      });
    });
    if (registerButtonRef.current) {
      registerButtonRef.current.addEventListener('mouseenter', () => {
        setRegisterAud(true)
      })
      registerButtonRef.current.addEventListener('mouseleave', () => {
        setRegisterAud(false)
      })
    }

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
    if (isTransparent) {
      setIsbgvideo(false)
      if (setIsPlaying) {
        setIsPlaying(true);
      }
    } else {
      setIsbgvideo(true)
      setClickHere(false)
      if (setIsPlaying) {
        setIsPlaying(false);
      }
    }
  }

  return (
    <section id="hero" ref={page} className="h-screen overflow-hidden relative">
      <VideoBg isbgvideo={isbgvideo}/>
      <div
        className={`relative cursor-pointer select-none w-full h-screen flex top-0 flex-col items-center justify-center space-y-12 md:space-y-0 bg-black text-white ${isTransparent ? 'mix-blend-normal' : 'mix-blend-multiply z-40'}`}
        ref={heroContainer}
        onClick={handleheroAnimation}
      >
        {clickHere && (
          <Image
          src={'/giphy.gif'} 
          alt="click here"
          height={100}
          width={100}
          className="absolute top-28 md:top-10 left-4 transform rotate-45"
          />
        )}
        <span
          className={`click text-[24vw] z-20`}
        >
          <span ref={heroText}>Lakshya&apos;24</span>
        </span>
        {clickHere && (
          <Image
          src={'/giphy1.gif'} 
          alt="click here"
          height={140}
          width={140}
          className="absolute bottom-36 md:bottom-38 right-6 md:right-12 transform rotate-42"
          />
        )}
        <p className="-translate-y-14  lg:-translate-y-32  md:tracking-[.5em] text-xl click bg-white text-black pl-3.5 pr-2 py-1 z-20">Harmony in diversity, Spectrum of talents</p>
        <Link 
        href="https://forms.gle/PRwcoo2XsoZKcQtUA" 
        target="_blank"
        className="btn-91 -translate-y-6 md:-translate-y-10 z-[51] click text-3xl">
          <span ref={registerButtonRef} onClick={() => setIsTransparent(true)}>Register Now!</span>
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