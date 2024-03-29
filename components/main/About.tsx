'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

const About = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    // gsap.from('#aboutimg', {
    // scrollTrigger: '#aboutimg',
    // x:100,
    // })
  }, [])
  return (
    <section id='about' className='bg-black flex flex-wrap gap-8 h-fit px-[1.8em] py-10 mx-4 items-center justify-around'>
      <div className='h-full w-2/3 sm:w-96'>
        <img
          id='aboutimg'
          className='h-full w-full object-cover'
          src='/logo.png'
          alt='about'
        />
      </div>
      <div className='w-full lg:w-1/2 text-justify'>
        <h1 className='text-5xl font-semibold mb-6 tracking-wider md:tracking-normal'>About Lakshya</h1>
        <p className='text-xl'> Lakshya is an eagerly anticipated event held annually at our college. This exciting and vibrant festival offers a diverse range of activities and events for students to participate in, showcasing their skills and talents in a wide variety of fields. The festival encompasses technical, cultural, sports and e-sports events, providing opportunities for students to compete, learn, and  explore new areas of interest.
          <br /><br />
          Lakshya is a festival that is designed to be entertaining and engaging for all attendees. The festival kicks off in the evening and runs late into the night, with a range of activities and events taking place throughout the evening. One of the highlights of the festival is the celebrity DJ party, which promises to be an unforgettable experience for all who attend.
          <br /><br />
          In addition to the fun & knowledge, cultural, sports & gymnasium, and e-sports events, Lakshya also offers a range of other activities and attractions, such as food stalls, exhibitions, and performances by local artists. With so much to see and do, Lakshya promises to be a fun-filled and exciting event that will leave attendees with lasting memories.</p>
      </div>
    </section>
  )
}

export default About