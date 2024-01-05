import React from 'react'
import EventCard from '@/components/ui/EventCard'
import Link from 'next/link';

export default function SportsGymnasium() {
  const posters = [
    {
      name: "Basketball (Boys) Round-1",
      image: "/sports/8.png",
      desc: "",
    },
    {
      name: "Basketball (Boys) Round-2",
      image: "/sports/9.png",
      desc: "",
    },
    {
      name: "Basketball (Boys) Final",
      image: "/sports/10.png",
      desc: "",
    },
    {
      name: "Basketball (Girls) Round-1",
      image: "/sports/11.png",
      desc: "",
    },
    {
      name: "Basketball (Girls) Round-2",
      image: "/sports/12.png",
      desc: "",
    },
    {
      name: "Basketball (Girls) Final",
      image: "/sports/13.png",
      desc: "",
    },
    {
      name: "American Football (Boys) Round-1",
      image: "/sports/31.png",
      desc: "",
    },
    {
      name: "American Football (Boys) Round-2",
      image: "/sports/32.png",
      desc: "",
    },
    {
      name: "American Football (Boys) Final",
      image: "/sports/33.png",
      desc: "",
    },
    {
      name: "American Football (Girls) Round-1",
      image: "/sports/34.png",
      desc: "",
    },
    {
      name: "American Football (Girls) Round-2",
      image: "/sports/35.png",
      desc: "",
    },
    {
      name: "American Football (Girls) Final",
      image: "/sports/36.png",
      desc: "",
    },
    {
      name: "Kho-Kho (Boys) Round-1",
      image: "/sports/37.png",
      desc: "",
    },
    {
      name: "Kho-Kho (Boys) Round-2",
      image: "/sports/38.png",
      desc: "",
    },
    {
      name: "Kho-Kho (Boys) Final",
      image: "/sports/39.png",
      desc: "",
    },
    {
      name: "Kho-Kho (Girls) Round-1",
      image: "/sports/40.png",
      desc: "",
    },
    {
      name: "Kho-Kho (Girls) Round-2",
      image: "/sports/41.png",
      desc: "",
    },
    {
      name: "Kho-Kho (Girls) Final",
      image: "/sports/42.png",
      desc: "",
    },
    {
      name: "Volleyball (Boys) Round-1",
      image: "/sports/15.png",
      desc: "Volleyball is a dynamic team sport played on a rectangular court divided by a net. Two teams of six players each aim to score points by sending a ball over the net and into the opponent's court. Fast-paced and strategic, the game requires precise teamwork, communication, and agility",
    },
    {
      name: "Volleyball (Boys) Round-2",
      image: "/sports/16.png",
      desc: "Volleyball is a dynamic team sport played on a rectangular court divided by a net. Two teams of six players each aim to score points by sending a ball over the net and into the opponent's court. Fast-paced and strategic, the game requires precise teamwork, communication, and agility",
    },
    {
      name: "Volleyball (Boys) Final",
      image: "/sports/17.png",
      desc: "Volleyball is a dynamic team sport played on a rectangular court divided by a net. Two teams of six players each aim to score points by sending a ball over the net and into the opponent's court. Fast-paced and strategic, the game requires precise teamwork, communication, and agility",
    },
    {
      name: "Volleyball (Girls) Round-1",
      image: "/sports/18.png",
      desc: "Volleyball is a dynamic team sport played on a rectangular court divided by a net. Two teams of six players each aim to score points by sending a ball over the net and into the opponent's court. Fast-paced and strategic, the game requires precise teamwork, communication, and agility",
    },
    {
      name: "Volleyball (Girls) Round-2",
      image: "/sports/19.png",
      desc: "Volleyball is a dynamic team sport played on a rectangular court divided by a net. Two teams of six players each aim to score points by sending a ball over the net and into the opponent's court. Fast-paced and strategic, the game requires precise teamwork, communication, and agility",
    },
    {
      name: "Volleyball (Girls) Final",
      image: "/sports/20.png",
      desc: "Volleyball is a dynamic team sport played on a rectangular court divided by a net. Two teams of six players each aim to score points by sending a ball over the net and into the opponent's court. Fast-paced and strategic, the game requires precise teamwork, communication, and agility",
    },
    {
      name: "Carrom (Mix)",
      image: "/sports/14.png",
      desc: "",
    },
    {
      name: "Box Cricket (Boys) Round-1",
      image: "/sports/21.png",
      desc: "",
    },
    {
      name: "Box Cricket (Boys) Round-2",
      image: "/sports/22.png",
      desc: "",
    },
    {
      name: "Box Cricket (Boys) Final",
      image: "/sports/23.png",
      desc: "",
    },
    {
      name: "Box Cricket (Girls) Round-1",
      image: "/sports/24.png",
      desc: "",
    },
    {
      name: "Box Cricket (Girls) Round-2",
      image: "/sports/25.png",
      desc: "",
    },
    {
      name: "Box Cricket (Girls) Final",
      image: "/sports/26.png",
      desc: "",
    },
    {
      name: "Shot Put (Boys)",
      image: "/sports/47.png",
      desc: "Shot put is a track and field event where athletes compete to throw a heavy spherical object, the shot, for maximum distance. The competitor launches the shot from a seven-foot-diameter circle, using a pushing motion. Strength, technique, and precision are crucial for success in this athletic discipline.",
    },
    {
      name: "Shot Put (Girls)",
      image: "/sports/48.png",
      desc: "Shot put is a track and field event where athletes compete to throw a heavy spherical object, the shot, for maximum distance. The competitor launches the shot from a seven-foot-diameter circle, using a pushing motion. Strength, technique, and precision are crucial for success in this athletic discipline.",
    },
    {
      name: "Table Tennis (Mix)",
      image: "/sports/49.png",
      desc: "",
    },
    {
      name: "Football (Boys) Round-1",
      image: "/sports/4.png",
      desc: "",
    },
    {
      name: "Football (Boys) Round-2",
      image: "/sports/5.png",
      desc: "",
    },
    {
      name: "Football (Boys) Final",
      image: "/sports/6.png",
      desc: "",
    },
    {
      name: "Football (Girls) Round-1",
      image: "/sports/1.png",
      desc: "",
    },
    {
      name: "Football (Girls) Round-2",
      image: "/sports/2.png",
      desc: "",
    },
    {
      name: "Football (Girls) Final",
      image: "/sports/3.png",
      desc: "",
    },
    {
      name: "Foosball (Mix)",
      image: "/sports/43.png",
      desc: "",
    },
    {
      name: "Deadlift (Boys)",
      image: "/sports/55.png",
      desc: "",
    },
    {
      name: "Tug of war (Boys)",
      image: "/sports/50.png",
      desc: "",
    },
    {
      name: "Tug of war (Girls)",
      image: "/sports/51.png",
      desc: "",
    },
    {
      name: "Lawn Tennis (Mix)",
      image: "/sports/27.png",
      desc: "",
    },
    {
      name: "3-Legged Race (Boys)",
      image: "/sports/52.png",
      desc: "",
    },
    {
      name: "3-Legged Race (Girls)",
      image: "/sports/53.png",
      desc: "",
    },
    {
      name: "Bench Press (Boys)",
      image: "/sports/56.png",
      desc: "",
    },
    {
      name: "100m Sprint (Boys)",
      image: "/sports/29.png",
      desc: "",
    },
    {
      name: "100m Sprint (Girls)",
      image: "/sports/30.png",
      desc: "",
    },
    {
      name: "Squats (Boys)",
      image: "/sports/57.png",
      desc: "",
    },
    {
      name: "Chess (Mix)",
      image: "/sports/7.png",
      desc: "",
    },
    {
      name: "Arm Wrestling (Boys)",
      image: "/sports/54.png",
      desc: "",
    },
    {
      name: "Yoga Asana",
      image: "/sports/100.png",
      desc: "",
    },
    {
      name: "Yoga Star",
      image: "/sports/99.png",
      desc: "",
    },
    {
      name: "Kabaddi (Boys) Round-1",
      image: "/sports/101.png",
      desc: "",
    },
    {
      name: "Kabaddi (Boys) Round-2",
      image: "/sports/102.png",
      desc: "",
    },
    {
      name: "Kabaddi (Boys) Final",
      image: "/sports/103.png",
      desc: "",
    },
    {
      name: "Kabaddi (Girls) Round-1",
      image: "/sports/104.png",
      desc: "",
    },
    {
      name: "Kabaddi (Girls) Round-2",
      image: "/sports/105.png",
      desc: "",
    },
    {
      name: "Kabaddi (Girls) Final",
      image: "/sports/106.png",
      desc: "",
    },
    
  ]
  return (
    <main className='flex flex-col items-center justify-center px-[1.8em]'>
    <h1 className='px-[1.8em] text-5xl md:text-6xl font-bold text-center pt-20 md:pt-6 tracking-wide'>Sports & Gymnasium Events</h1>
    <Link 
    className='mx-[1.8em] text-xl border-white border-2 rounded-md px-14 py-3 my-8 hover:bg-white hover:text-black transition duration-300 ease-in-out tracking-wider'
    href="https://www.poornima.edu.in"
    target='_blank'
    >
      Check Rules
    </Link>
    <div className='flex flex-wrap items-center justify-center gap-4 pt-6 md:pt-6'>
      {posters.map((poster, i) => {
        return (
          <EventCard
            key={i}
            name={poster.name}
            image={poster.image}
            desc={poster.desc}
          />
        )
      })}
    </div>
  </main>
  )
}
