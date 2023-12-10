'use client'

// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';

// const OurTeam = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     });

//     function raf(time: any) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.img',
//         scrub: true,
//       },
//     }).to('.img', {
//       stagger: 0.2,
//       y: -700,
//       scrub: true,
//     });
//   }, []);

//   return (
//     <div className="text-center">
//       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white inline left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//         Our Team
//       </h1>

//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 h-screen">
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </section>

//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
//         {[...Array(9)].map((_, index) => (
//           <div
//             key={index}
//             className="img relative w-full h-96 sm:h-72 lg:h-96 bg-cover z-0"
//             style={{
//               backgroundImage: `url('/images/${index + 1}.jpg')`,
//             }}
//           ></div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default OurTeam;





'use client';
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
    <main ref={container} className={`relative border-b-[1px] border-white`}>
      {
        committees.map( (committee:any, i:number) => {
          const targetScale = 1 - ( (committees.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...committee} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}