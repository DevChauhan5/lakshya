'use client';
import styles from '@/styles/day.module.css'
import { useState } from 'react';
import Days from '@/components/day';
import Modal from '@/components/modal';

const days = [
  {
    title: "Day1",
    src: "c2montreal.png",
    color: "#000000",
    desc:"Unity Day",
  },
  {
    title: "Day2",
    src: "officestudio.png",
    color: "#8C8C8C",
    desc:"Sports Spectacle",
  },
  {
    title: "Day3",
    src: "locomotive.png",
    color: "#EFE8D3",
    desc:"Tech Fusion",
  },
  {
    title: "Day4",
    src: "silencio.png",
    color: "#706D63",
    desc:"Cultural Melange",
  },
  {
    title: "Day5",
    src: "locomotive.png",
    color: "#EFE8D3",
    desc:"E-Sync Day",
  },
  {
    title: "Day6",
    src: "silencio.png",
    color: "#706D63",
    desc:"Global Harmony",
  },
  {
    title: "Day7",
    src: "silencio.png",
    color: "#706D63",
    desc:"Grand Finale",
  }
]

export default function Days() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        days.map( (day, index) => {
          return <Days index={index} title={day.title} desc={day.desc} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} days={days}/>
  </main>
  )
}