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




import React from 'react'

export default function Ourteam() {
  return (
    <div>Ourteam</div>
  )
}

