import React from 'react'
import EventCard from '@/components/ui/EventCard'
import Link from 'next/link';

export default function ESports() {
  const posters = [
    {
      name: "BGMI",
      image: "/e-sports/45.png",
      desc: "The intense battleground of BGMI Tournament, where skilled players clash in a virtual arena. Experience adrenaline-pumping action, strategic gameplay, and fierce competition. Witness the best teams vie for victory, showcasing precision, teamwork, and tactical prowess. It's a gaming spectacle you won't want to miss!"
    },
    {
      name: "Valorant",
      image: "/e-sports/44.png",
      desc: "Experience intense competition in the Valorant Tournament, where elite teams clash in tactical battles for supremacy. Witness strategic brilliance, precise gunplay, and heartpounding moments as players showcase their skills in this high-stakes esports event. Only the most skilled agents will emerge victorious in this thrilling display of Valorant prowess."
    },
    {
      name: "CS-2",
      image: "/e-sports/28.png",
      desc: "The CS-2 Tournament is a competitive esports event showcasing top-tier CounterStrike-2 teams. Held in a thrilling format, teams battle for supremacy in intense tactical matches, demonstrating skill, strategy, and teamwork. Spectators witness high-stakes action as these elite gamers vie for victory in the virtual battleground."
    },
    {
      name: "Call of Duty Mobile",
      image: "/e-sports/46.png",
      desc: "Experience adrenaline-pumping action in the Call of Duty: Mobile (CODM) Tournament! Elite gamers from around the globe clash in fierce battles, showcasing skill, strategy, and precision. Witness intense gunfights, strategic maneuvers, and jaw-dropping plays as teams compete for glory and supremacy in this ultimate mobile gaming showdown."
    },
    {
      name: "Rocket League",
      image: "/e-sports/59.png",
      desc: "Experience high-octane excitement at the Rocket League Tournament! Teams of skilled players compete in intense 3v3 soccer matches, navigating rocket-powered cars to score goals. Witness breathtaking aerial acrobatics, precision teamwork, and electrifying goals as competitors vie for victory. Don't miss the adrenaline-fueled action in these thrilling esports showdown!"
    },
  ]
  return (
    <main className='flex flex-col items-center justify-center'>
    <h1 className='px-[1.8em] text-5xl md:text-6xl font-bold text-center pt-20 md:pt-6 tracking-wide'>E-Sports Events</h1>
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
