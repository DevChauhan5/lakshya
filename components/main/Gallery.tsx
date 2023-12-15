'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]

export default function Home() {
  const gallery = useRef(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  const galleryRef = useRef(null);


  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time:any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlaying(entry.isIntersecting);
      },
      { threshold: 0 }
    );
  
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
  

    return () => {
      window.removeEventListener("resize", resize);
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    }
  }, [])

  return (
    <main id='gallery' ref={galleryRef} className={styles.main}>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      {isPlaying && (<ReactPlayer
          url="/gallery-audio.mp3"
          playing={isPlaying}
          volume={0.8}
          width={0}
          height={0}
        />)}
      </div>
    </main>
  )
}

const Column = ({images, y}: {images:any, y:any}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src:string, i:any) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}