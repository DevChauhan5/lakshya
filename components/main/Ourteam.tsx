'use client'

import Card from '@/components/card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';


const committees = [
  {
    title: "Core Committee",
    src: "/images/1.jpg",
    color: "#FF008C"
  },
  {
    title: "Inter Coordination Committee",
    src: "/images/2.jpg",
    color: "#D309E1"
  },
  {
    title: "Creative Committee",
    src: "/images/3.jpg",
    color: "#9C1AFF"
  },
  {
    title: "Documentation Committee",
    src: "/images/4.jpg",
    color: "#7700FF"
  },
  {
    title: "Logistics Committee",
    src: "/images/5.jpg",
    color: "#4400FF"
 },
  // {
  //   title: "Main Stage Committee",
  //   src: "/images/5.jpg",
  //   color: "#0066FF"
  // },
  // {
  //   title: "Fest Operations Committee",
  //   src: "/images/5.jpg",
  // },
  // {
  //   title: "Social Media Committee",
  //   src: "/images/5.jpg",
  // },
  // {
  //   title: "Sponsorship & Vendorship Committee",
  //   src: "/images/5.jpg",
  // },
  // {
  //   title: "Anchors Committee",
  //   src: "/images/5.jpg",
  // },
  // {
  //   title: "Sports Committee",
  //   src: "/images/5.jpg",
  // },
  // {
  //   title: "Cultural Committee",
  //   src: "/images/5.jpg",
  // },
  // {
  //   title: "Technical Committee",
  //   src: "/images/5.jpg",
  // },
  // {
  //   title: "E-Sports Committee",
  //   src: "/images/5.jpg",
  // }
]

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <main 
    id='ourteam'
    ref={container} 
    className={`relative border-b-[1px] border-white`}
    >
      {
        committees.map( (committee:any, i:number) => {
          const targetScale = 1 - ( (committees.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...committee} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}