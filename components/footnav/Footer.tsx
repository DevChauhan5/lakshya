'use client'

import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

export default function Footer() {
  // const [isTransparent, setIsTransparent] = useState<boolean>(true);
  const linkContainerRef = useRef(null);
  const quicklinkContainerRef = useRef(null);
  useEffect(() => {
    const linkContainer = linkContainerRef.current;
    const quicklinkContainer = quicklinkContainerRef.current;

    gsap.to(linkContainer, {
      scrollLeft: linkContainer.scrollWidth - linkContainer.clientWidth,
      duration: 16,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to(quicklinkContainer, {
      scrollLeft: quicklinkContainer.scrollWidth - quicklinkContainer.clientWidth,
      duration: 50,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className='flex flex-col items-center justify-center px-[2em] py-[1em]border-white overflow-hidden'>
      <main className="flex flex-col lg:flex-row items-center justify-between ">
        <div className='flex flex-col items-center justify-center mt-16 md:mx-12 h-fit w-fit'>
          <h1 className="text-7xl md:text-9xl tracking-wide font-bold">Lakshya'24</h1>
          <p className="text-2xl">Annual Fest of Poornima University.</p>
        </div>
        {/* </div> */}
        <div className='flex flex-col items-center justify-around gap-4 my-8  md:mx-12'>
          <div className='flex flex-col text-center md:text-left  md:items-center p-4 md:justify-center'>
            <h1 className="text-3xl mb-6 mt-2">Contact</h1>
            <div className='flex flex-col md:flex-row '>
              <div className='text-lg mx-4 whitespace-pre-line'>
                Pranav Lata (He/Him),<br />
                +91-8905907116<br />
                Co-Chair, Students&apos; Council<br />
                Poornima University<br /><br />
              </div>
              <div className='text-lg whitespace-pre-line mx-4'>
                Shourya Mehra (She/her),<br />
                +91-8770385253<br />
                Co-Chair, Students&apos; Council<br />
                Poornima University<br />
              </div>
            </div>
          </div>
          <div className='flex flex-col text-center md:items-center md:justify-center mt-2 lg:mt-0 '>
            <h1 className="text-3xl mb-6">E-mails</h1>
            <div>
              <Link
                className='text-lg'
                href="mailto:lakshya@poornima.edu.in">✉️ - lakshya@poornima.edu.in</Link><br />
              <Link
                className='text-lg'
                href="mailto:studentscouncil@poornima.edu.in">✉️ - studentscouncil@poornima.edu.in</Link>
            </div>
          </div>
        </div>
      </main>
      <div
        ref={quicklinkContainerRef}
        className='mt-4 no-scrollbar tracking-widest whitespace-nowrap flex flex-row gap-36 text-lg px-8 overflow-x-auto w-full bg-white text-black'
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <h3 key={index}>Quick Links</h3>
        ))}
      </div>
      <div
        ref={linkContainerRef}
        className='no-scrollbar tracking-wider whitespace-nowrap flex flex-row gap-8 text-lg py-6 px-8 overflow-x-auto border-b-[1px] border-white w-full'
      >
        <Link href="/">E-Sports Events</Link>
        <Link href="/">Cultural Events</Link>
        <Link href="/">Back↑top</Link>
        <Link href="/">Knowledge & Fun Events</Link>
        <Link href="/">Sports & Gymnasium Events</Link>
      </div>
      <div className='w-full flex flex-col text-center md:flex-row items-center justify-center md:justify-between gap-4  px-8 py-6 border-b-[1px] border-white'>
        <h2 className=''>© Copyright 2023 Poornima University. <br />All rights reserved.</h2>
        <div className='flex gap-4'>
          <Link href='https://www.instagram.com/pulakshya/'>
            <FaInstagram className="h-8 w-8 cursor-pointer" />
          </Link>
          <Link href='https://www.youtube.com/@PoornimaUniversityTV'>
            <FiYoutube className="h-8 w-8 cursor-pointer" />
          </Link>
        </div>
      </div>
    </section >
  )
}
