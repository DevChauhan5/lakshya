'use client'

import { Bebas_Neue } from "next/font/google"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
})




const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)
  const videoref = useRef(null)
  const textref = useRef(null)
  const triggerref = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerref.current,
        scrub: true,
        start: "top center",
        end: "bottom top",
      }
    })
    tl.to(textref.current,
      {
        translateY: "-300",
      },
      0
    )
    tl.to(videoref.current,
      {
      },
      0
    )
  }, [])


  return (
    <section ref={triggerref} id="hero" className="overflow-hidden relative w-ful h-screen">
      <video
        ref={videoref}
        src="https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
      </video>
      <div className="absolute top-0 left-0 right-0 h-full text-[25vw] leading-[78vw] select-none bg-black mix-blend-multiply">
        <h1 ref={textref} className={`${bebas.className} text-white tracking-tight`}>Lakshya'24</h1>
      </div>
    </section>
  )
}

export default Hero