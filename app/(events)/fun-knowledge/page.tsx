import React from 'react'
import EventCard from '@/components/ui/EventCard'
import Link from 'next/link';

export default function FunKnowledge() {
  const posters = [
    {
      name: "Reel It Up",
      image: "/f-k/91.png",
      desc: " Participants would be able to showcase and promote the university by creating eye-catching reels and publishing it on Instagram.",
    },
    {
      name: "Mukaabla-e-Bahas",
      image: "/f-k/92.png",
      desc: " Mukaabla-e-Bahas is a debate competition that fosters discussions on various topics, testing skill, discernment, and eloquence. It's a platform to share enthusiasm, critical thinking, and proficiency in debates.",
    },
    {
      name: "Jenga",
      image: "/f-k/82.png",
      desc: " Participants engage in a game of Jenga, carefully removing wooden blocks from a tower and stacking them on top. The objective is to keep the tower from collapsing as blocks are moved.",
    },
    {
      name: "Rubik’s Cube",
      image: "/f-k/64.png",
      desc: " Participants will engage in solving the Rubik’s Cube puzzle, testing their skills in logic and problem-solving.",
    },
    {
      name: "AI Image Generation",
      image: "/f-k/60.png",
      desc: " AI Image Generation is an event where participants utilize AI tools to generate images by creating prompts.",
    },
    {
      name: "Code Jam",
      image: "/f-k/88.png",
      desc: "The Code Jam is a high-paced competition challenging participants to solve quick programming-related questions within a limited timeframe, typically 3 minutes per question. It's a test of coding proficiency, problem-solving under pressure, and swift thinking.",
    },
    {
      name: "No Gas Cooking",
      image: "/f-k/69.png",
      desc: "In this unique culinary event, participants will showcase their cooking skills without the use of gas. From innovative recipes to alternative cooking methods, this competition challenges chefs to prepare delicious dishes using non-gas appliances.",
    },
    {
      name: "PU Shark Tank",
      image: "/f-k/58.png",
      desc: "Based on the popular show, this event would be an entrepreneurial showdown where participants pitch innovative business ideas to a panel of judges. Showcase your entrepreneurial prowess, present compelling business plans, and vie for investment opportunities in this high-stakes competition."
    },
    {
      name: "Lemon and Spoon Race (Boys)",
      image: "/f-k/70.png",
      desc: "A traditional game that tests balance and speed. Participants balance a lemon on a spoon and race to the finish line without dropping it.",
    },
    {
      name: "Lemon and Spoon Race (Girls)",
      image: "/f-k/71.png",
      desc: "A traditional game that tests balance and speed. Participants balance a lemon on a spoon and race to the finish line without dropping it.",
    },
    {
      name: "Think Out of the Box",
      image: "/f-k/81.png",
      desc: "Think Out of the Box challenges participants to solve unconventional and creative problems that require thinking beyond conventional approaches.",
    },
    {
      name: "Poornima Premier League",
      image: "/f-k/85.png",
      desc: "The Poornima Premier League comprises a cricket quiz round to test participants' cricketing knowledge, followed by an auction. During the auction, participants will manage their budgets to assemble the best cricket team within the allocated funds. ",
    },
    {
      name: "Minefield",
      image: "/f-k/94.png",
      desc: "A fun filled activity where participants would be blindfolded and a friend would guide them through the obstacles and challenges.",
    },
    {
      name: "Object Art",
      image: "/f-k/73.png",
      desc: "Participants in Object Art will showcase their creativity by using everyday objects to create unique sketches.",
    },
    {
      name: "Extempore",
      image: "/f-k/72.png",
      desc: "Extempore: Think fast, speak well! This event puts your spontaneous speaking skills to the test. Get ready for surprise topics and the thrill of speaking off-the-cuff. It's about quick wit, smooth delivery, and showing how you can charm and inform the audience in the moment.",
    },
    {
      name: "Sack Race (Boys)",
      image: "/f-k/66.png",
      desc: "Participants compete by hopping inside a sack towards the finish line. It's a fun and traditional race where agility and speed are key.",
    },
    {
      name: "Sack Race (Girls)",
      image: "/f-k/67.png",
      desc: "Participants compete by hopping inside a sack towards the finish line. It's a fun and traditional race where agility and speed are key.",
    },
    {
      name: "Digital Poster Making",
      image: "/f-k/65.png",
      desc: " Digital Poster Making invites participants to unleash their creativity in a competition that revolves around crafting stunning posters using digital design tools. This event is a platform for artists and designers to showcase their artistic ingenuity.",
    },
    {
      name: "Treasure Hunt",
      image: "/f-k/68.png",
      desc: "Participants engage in a thrilling adventure where they follow clues and solve puzzles to find hidden treasures. It's a test of teamwork, problem-solving, and quick thinking as participants navigate through challenges to discover the ultimate prize.",
    },
    {
      name: "Tech Hunt",
      image: "/f-k/62.png",
      desc: "Tech Hunt is a thrilling treasure hunt reimagined in the digital realm. Participants will navigate through a series of tech-centric challenges, decoding clues, and solving puzzles using gadgets and digital clues to uncover hidden tech treasures.",
    },
    {
      name: "WebXpose",
      image: "/f-k/80.png",
      desc: "WebXpose is a hands-on event challenging participants to dive into website analysis. Participants will dissect websites, examining UI/UX elements, technology stacks, typography choices, and more.",
    },
    {
      name: "Face Painting",
      image: "/f-k/63.png",
      desc: "The Face Painting event invites participants to showcase their creativity by painting on faces. Participants will demonstrate their artistic skills by creating various designs and themes on faces using safe and approved face paints.",
    },
    {
      name: "Musical Chair",
      image: "/f-k/86.png",
      desc: "Participants compete in a game of Musical Chairs, where chairs are arranged, and when the music stops, players aim to quickly find a chair to sit on. It's a classic and fun game that tests agility and quick decision-making skills.",
    },
    {
      name: "Kaun Banega Mind Master",
      image: "/f-k/75.png",
      desc: "The 'Kaun Banega Mind Master' event is an immersive experience designed to test participants' trivia knowledge and knowledge about the current affairs.",
    },
    {
      name: "Ink Up 2.0",
      image: "/f-k/61.png",
      desc: "Participants in Ink Up 2.0 will showcase their artistic abilities by creating temporary tattoos. This competition celebrates creativity and innovation in temporary body art design.",
    },
  ]
  return (
    <main className='flex flex-col items-center justify-center px-[1.8em]'>
    <h1 className='px-[1.8em] text-5xl md:text-6xl font-bold text-center pt-20 md:pt-6 tracking-wide'>Fun & Knowledge Events</h1>
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