import React, { Suspense } from 'react'
import EventCard from '@/components/ui/EventCard'
import Link from 'next/link';

export default function Cultural() {
  const posters = [
    {
      name: "Crease and Grace",
      image: "/cultural/93.png",
      desc: "The concept of the event is the pairs participating have to dance on a sheet of paper when the music plays and have to stop dancing when the music stops. The sheet is folded into a half after every round and the pairs have to dance within the boundaries of the sheet."
    },
    {
      name: "Humor Us",
      image: "/cultural/89.png",
      desc: "Stand-up comedy is a comedic performance to a live audience in which the performer addresses the audience directly from the stage. The performer is known as a comedian, comic, or stand-up. It is usually a rhetorical performance but many comics employ crowd interaction as part of their set or routine."
    },
    {
      name: "Echoes of Decades",
      image: "/cultural/78.png",
      desc: "Echoes of Decades is more than just a competition, it's a portal back to a time when music mattered, fashion was fearless, and dance floors were packed with pure joy. Let the groove of Indian 80s-90s beats exhilarate your experience in Lakshya."
    },
    {
      name: "Artistic Mimicry",
      image: "/cultural/95.png",
      desc: " Beyond imitation, beyond parody, lies a realm where art plays with itself and where creation echoes creation. Artistic Mimicry is a daring dance between homage and subversion, a kaleidoscope of influences refracted through the prism of contemporary expression."
    },
    {
      name: "Khayalon Ki Mehfil (Shayari)",
      image: "/cultural/98.png",
      desc: " Shayari refers to the art or form of Urdu poetry. It's often characterized by rhythmic couplets (called 'sher') that express emotions, love, philosophies, or observations on life"
    },
    {
      name: "Kalakari",
      image: "/cultural/90.png",
      desc: "A drama is a type of narrative writing that is meant to be performed in front of an audience. Dramas are most notably performed as plays in a theatre though many dramas have been recreated and adapted for film, TV, or radio."
    },
    {
      name: "Dumb Charades",
      image: "/cultural/76.png",
      desc: "It is a word-guessing game where there will be three participants who will make a team among themselves and they will be given the title of a movie and they should guess the title of that movie through miming. One person should give the gestures and the other two should guess the title."
    },
    {
      name: "Antakshri",
      image: "/cultural/74.png",
      desc: "In the game, each contestant sings the first verse of a song that begins with the consonant of the Hindi alphabet on which the previous contestant's song ended"
    },
    {
      name: "Fashion Show",
      image: "/cultural/79.png",
      desc: "Welcome to 'Chromatic Harmony: A Monochrome Odyssey' – where fashion meets the power of a single color spectrum. This event celebrates the elegance of monochromatic palettes, each segment telling a unique story through the artistry of fashion. Join us on this vibrant journey of style, where designers showcase their mastery in creating mesmerizing monochrome ensembles."
    },
    {
      name: "Hip-hop Battle",
      image: "/cultural/87.png",
      desc: "Hip-hop dance is a vibrant form of dance that combines a variety of freestyle movements to create a cultural piece of art. Through its three main styles of popping, locking, and breaking, hip-hop dance has evolved into one of the most popular and influential styles of dance."
    },
    {
      name: "Cultural Crossroads",
      image: "/cultural/97.png",
      desc: "Get ready to unleash your inner film fanatic at Masala Mayhem, the Bollywood, Hollywood, Anime, DHH where knowledge meets naach-gaana and every answer is a blockbuster."
    },
    {
      name: "Rap and Beat Bonanza",
      image: "/cultural/84.png",
      desc: 'Rapping is an artistic form of vocal delivery and emotive expression that incorporates "rhyme, rhythmic speech, and street vernacular”. A musical style or technique, especially in hip-hop, in which the sounds and rhythms of percussion instruments or a drum machine are simulated by using the mouth and voice'
    },
    {
      name: "Vocal Voyage",
      image: "/cultural/83.png",
      desc: " In the Solo Singing event, participants will showcase their vocal prowess and musical artistry individually. Each contestant will have the opportunity to perform a song of their choice, demonstrating skill, emotion, and stage presence. The event aims to celebrate the diverse talents and unique voices of each performer"
    },
    {
      name: "Folk Dance (Group)",
      image: "/cultural/77.png",
      desc: "Folk dance celebrates the cultural roots of a particular group of people. Folk dance is typically performed as a form of ritualistic entertainment at social gatherings."
    },

  ]
  return (
    <Suspense fallback={<h1 className="text-5xl text-center tracking-wide h-screen py-16">Loading...</h1>}>
      <main className='flex flex-col items-center justify-center px-[1.8em]'>
        <h1 className='px-[1.8em] text-5xl md:text-6xl font-bold text-center pt-20 md:pt-6 tracking-wide'>Cultural Events</h1>
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
    </Suspense>
  )
}
