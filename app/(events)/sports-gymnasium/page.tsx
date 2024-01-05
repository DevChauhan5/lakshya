import React from 'react'
import EventCard from '@/components/ui/EventCard'
import Link from 'next/link';

export default function SportsGymnasium() {
  const posters = [
    {
      name: "Basketball (Boys) Round-1",
      image: "/sports/8.png",
      desc: "Basketball is a fast-paced team sport played between two teams of five players each. The objective is to score points by shooting a ball through the opponent's hoop. It involves skillful dribbling, passing, and strategic plays. The sport is known for its athleticism, high-scoring nature, and electrifying slam dunks.",
    },
    {
      name: "Basketball (Boys) Round-2",
      image: "/sports/9.png",
      desc: "Basketball is a fast-paced team sport played between two teams of five players each. The objective is to score points by shooting a ball through the opponent's hoop. It involves skillful dribbling, passing, and strategic plays. The sport is known for its athleticism, high-scoring nature, and electrifying slam dunks.",
    },
    {
      name: "Basketball (Boys) Final",
      image: "/sports/10.png",
      desc: "Basketball is a fast-paced team sport played between two teams of five players each. The objective is to score points by shooting a ball through the opponent's hoop. It involves skillful dribbling, passing, and strategic plays. The sport is known for its athleticism, high-scoring nature, and electrifying slam dunks.",
    },
    {
      name: "Basketball (Girls) Round-1",
      image: "/sports/11.png",
      desc: "Basketball is a fast-paced team sport played between two teams of five players each. The objective is to score points by shooting a ball through the opponent's hoop. It involves skillful dribbling, passing, and strategic plays. The sport is known for its athleticism, high-scoring nature, and electrifying slam dunks.",
    },
    {
      name: "Basketball (Girls) Round-2",
      image: "/sports/12.png",
      desc: "Basketball is a fast-paced team sport played between two teams of five players each. The objective is to score points by shooting a ball through the opponent's hoop. It involves skillful dribbling, passing, and strategic plays. The sport is known for its athleticism, high-scoring nature, and electrifying slam dunks.",
    },
    {
      name: "Basketball (Girls) Final",
      image: "/sports/13.png",
      desc: "Basketball is a fast-paced team sport played between two teams of five players each. The objective is to score points by shooting a ball through the opponent's hoop. It involves skillful dribbling, passing, and strategic plays. The sport is known for its athleticism, high-scoring nature, and electrifying slam dunks.",
    },
    {
      name: "American Football (Boys) Round-1",
      image: "/sports/31.png",
      desc: "American football, a gridiron spectacle, unfolds on a 100-yard battlefield. Two teams clash, aiming to score by advancing an oval ball across the opponent's end zone. The game blends strategic plays, bone-crushing tackles, and acrobatic catches. It's a thrilling collision of power, speed, and tactical prowess, defining gridiron glory.",
    },
    {
      name: "American Football (Boys) Round-2",
      image: "/sports/32.png",
      desc: "American football, a gridiron spectacle, unfolds on a 100-yard battlefield. Two teams clash, aiming to score by advancing an oval ball across the opponent's end zone. The game blends strategic plays, bone-crushing tackles, and acrobatic catches. It's a thrilling collision of power, speed, and tactical prowess, defining gridiron glory.",
    },
    {
      name: "American Football (Boys) Final",
      image: "/sports/33.png",
      desc: "American football, a gridiron spectacle, unfolds on a 100-yard battlefield. Two teams clash, aiming to score by advancing an oval ball across the opponent's end zone. The game blends strategic plays, bone-crushing tackles, and acrobatic catches. It's a thrilling collision of power, speed, and tactical prowess, defining gridiron glory.",
    },
    {
      name: "American Football (Girls) Round-1",
      image: "/sports/34.png",
      desc: "American football, a gridiron spectacle, unfolds on a 100-yard battlefield. Two teams clash, aiming to score by advancing an oval ball across the opponent's end zone. The game blends strategic plays, bone-crushing tackles, and acrobatic catches. It's a thrilling collision of power, speed, and tactical prowess, defining gridiron glory.",
    },
    {
      name: "American Football (Girls) Round-2",
      image: "/sports/35.png",
      desc: "American football, a gridiron spectacle, unfolds on a 100-yard battlefield. Two teams clash, aiming to score by advancing an oval ball across the opponent's end zone. The game blends strategic plays, bone-crushing tackles, and acrobatic catches. It's a thrilling collision of power, speed, and tactical prowess, defining gridiron glory.",
    },
    {
      name: "American Football (Girls) Final",
      image: "/sports/36.png",
      desc: "American football, a gridiron spectacle, unfolds on a 100-yard battlefield. Two teams clash, aiming to score by advancing an oval ball across the opponent's end zone. The game blends strategic plays, bone-crushing tackles, and acrobatic catches. It's a thrilling collision of power, speed, and tactical prowess, defining gridiron glory.",
    },
    {
      name: "Kho-Kho (Boys) Round-1",
      image: "/sports/37.png",
      desc: "Kho-Kho, an ancient Indian sport, pits two teams of 12 players against each other in a chase-and-tag format. The chasing team endeavors to tag opponents while the defending team strategically avoids being touched. It's a rapid, dynamic game that emphasizes agility, teamwork, and quick thinking in a spirited pursuit of victory.",
    },
    {
      name: "Kho-Kho (Boys) Round-2",
      image: "/sports/38.png",
      desc: "Kho-Kho, an ancient Indian sport, pits two teams of 12 players against each other in a chase-and-tag format. The chasing team endeavors to tag opponents while the defending team strategically avoids being touched. It's a rapid, dynamic game that emphasizes agility, teamwork, and quick thinking in a spirited pursuit of victory.",
    },
    {
      name: "Kho-Kho (Boys) Final",
      image: "/sports/39.png",
      desc: "Kho-Kho, an ancient Indian sport, pits two teams of 12 players against each other in a chase-and-tag format. The chasing team endeavors to tag opponents while the defending team strategically avoids being touched. It's a rapid, dynamic game that emphasizes agility, teamwork, and quick thinking in a spirited pursuit of victory.",
    },
    {
      name: "Kho-Kho (Girls) Round-1",
      image: "/sports/40.png",
      desc: "Kho-Kho, an ancient Indian sport, pits two teams of 12 players against each other in a chase-and-tag format. The chasing team endeavors to tag opponents while the defending team strategically avoids being touched. It's a rapid, dynamic game that emphasizes agility, teamwork, and quick thinking in a spirited pursuit of victory.",
    },
    {
      name: "Kho-Kho (Girls) Round-2",
      image: "/sports/41.png",
      desc: "Kho-Kho, an ancient Indian sport, pits two teams of 12 players against each other in a chase-and-tag format. The chasing team endeavors to tag opponents while the defending team strategically avoids being touched. It's a rapid, dynamic game that emphasizes agility, teamwork, and quick thinking in a spirited pursuit of victory.",
    },
    {
      name: "Kho-Kho (Girls) Final",
      image: "/sports/42.png",
      desc: "Kho-Kho, an ancient Indian sport, pits two teams of 12 players against each other in a chase-and-tag format. The chasing team endeavors to tag opponents while the defending team strategically avoids being touched. It's a rapid, dynamic game that emphasizes agility, teamwork, and quick thinking in a spirited pursuit of victory.",
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
      desc: "Carrom, a tabletop game of precision and skill, involves players using a striker to pocket coins into corner pockets. Played on a square board, it's a combination of strategy and finesse. The game requires calculated shots, precise angles, and strategic positioning to outmaneuver opponents and claim victory.",
    },
    {
      name: "Box Cricket (Boys) Round-1",
      image: "/sports/21.png",
      desc: "Box cricket, an urban variant of traditional cricket, unfolds in confined spaces like streets or parking lots. Played with a tennis ball and modified rules, it's a fast-paced, close-quarters game. Teams bat and bowl in shortened innings, combining cricket techniques with adaptability to limited spaces, creating an exciting urban sporting experience.",
    },
    {
      name: "Box Cricket (Boys) Round-2",
      image: "/sports/22.png",
      desc: "Box cricket, an urban variant of traditional cricket, unfolds in confined spaces like streets or parking lots. Played with a tennis ball and modified rules, it's a fast-paced, close-quarters game. Teams bat and bowl in shortened innings, combining cricket techniques with adaptability to limited spaces, creating an exciting urban sporting experience.",
    },
    {
      name: "Box Cricket (Boys) Final",
      image: "/sports/23.png",
      desc: "Box cricket, an urban variant of traditional cricket, unfolds in confined spaces like streets or parking lots. Played with a tennis ball and modified rules, it's a fast-paced, close-quarters game. Teams bat and bowl in shortened innings, combining cricket techniques with adaptability to limited spaces, creating an exciting urban sporting experience.",
    },
    {
      name: "Box Cricket (Girls) Round-1",
      image: "/sports/24.png",
      desc: "Box cricket, an urban variant of traditional cricket, unfolds in confined spaces like streets or parking lots. Played with a tennis ball and modified rules, it's a fast-paced, close-quarters game. Teams bat and bowl in shortened innings, combining cricket techniques with adaptability to limited spaces, creating an exciting urban sporting experience.",
    },
    {
      name: "Box Cricket (Girls) Round-2",
      image: "/sports/25.png",
      desc: "Box cricket, an urban variant of traditional cricket, unfolds in confined spaces like streets or parking lots. Played with a tennis ball and modified rules, it's a fast-paced, close-quarters game. Teams bat and bowl in shortened innings, combining cricket techniques with adaptability to limited spaces, creating an exciting urban sporting experience.",
    },
    {
      name: "Box Cricket (Girls) Final",
      image: "/sports/26.png",
      desc: "Box cricket, an urban variant of traditional cricket, unfolds in confined spaces like streets or parking lots. Played with a tennis ball and modified rules, it's a fast-paced, close-quarters game. Teams bat and bowl in shortened innings, combining cricket techniques with adaptability to limited spaces, creating an exciting urban sporting experience.",
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
      desc: "Table tennis, a high-speed indoor sport, features players wielding paddles to volley a lightweight ball across a rectangular table divided by a net. It demands quick reflexes, precise ball control, and strategic spin techniques. Known for its rapid rallies, the game requires agility, concentration, and tactical finesse for competitive success.",
    },
    {
      name: "Football (Boys) Round-1",
      image: "/sports/4.png",
      desc: "Football, the world's most popular sport, involves two teams of eleven players each striving to score goals by propelling a ball into the opponent's net. Played on a rectangular field, it combines athleticism, teamwork, and skillful ball control. The game's simplicity and universal appeal contribute to its status as a global cultural phenomenon.",
    },
    {
      name: "Football (Boys) Round-2",
      image: "/sports/5.png",
      desc: "Football, the world's most popular sport, involves two teams of eleven players each striving to score goals by propelling a ball into the opponent's net. Played on a rectangular field, it combines athleticism, teamwork, and skillful ball control. The game's simplicity and universal appeal contribute to its status as a global cultural phenomenon.",
    },
    {
      name: "Football (Boys) Final",
      image: "/sports/6.png",
      desc: "Football, the world's most popular sport, involves two teams of eleven players each striving to score goals by propelling a ball into the opponent's net. Played on a rectangular field, it combines athleticism, teamwork, and skillful ball control. The game's simplicity and universal appeal contribute to its status as a global cultural phenomenon.",
    },
    {
      name: "Football (Girls) Round-1",
      image: "/sports/1.png",
      desc: "Football, the world's most popular sport, involves two teams of eleven players each striving to score goals by propelling a ball into the opponent's net. Played on a rectangular field, it combines athleticism, teamwork, and skillful ball control. The game's simplicity and universal appeal contribute to its status as a global cultural phenomenon.",
    },
    {
      name: "Football (Girls) Round-2",
      image: "/sports/2.png",
      desc: "Football, the world's most popular sport, involves two teams of eleven players each striving to score goals by propelling a ball into the opponent's net. Played on a rectangular field, it combines athleticism, teamwork, and skillful ball control. The game's simplicity and universal appeal contribute to its status as a global cultural phenomenon.",
    },
    {
      name: "Football (Girls) Final",
      image: "/sports/3.png",
      desc: "Football, the world's most popular sport, involves two teams of eleven players each striving to score goals by propelling a ball into the opponent's net. Played on a rectangular field, it combines athleticism, teamwork, and skillful ball control. The game's simplicity and universal appeal contribute to its status as a global cultural phenomenon.",
    },
    {
      name: "Foosball (Mix)",
      image: "/sports/43.png",
      desc: "Foosball, also known as table soccer, is a tabletop game where two players or teams control miniature soccer players mounted on rods to kick a ball into the opponent's goal. Fast-paced and strategic, it combines hand-eye coordination with quick reflexes, offering a compact and entertaining simulation of the beautiful game.",
    },
    {
      name: "Deadlift (Boys)",
      image: "/sports/55.png",
      desc: "The deadlift is a weightlifting exercise where a loaded barbell is lifted off the ground to hip level, then lowered back down. It targets various muscle groups, emphasizing the posterior chain. A fundamental compound movement, deadlifting builds strength, particularly in the back, glutes, and hamstrings, promoting overall functional fitness.",
    },
    {
      name: "Tug of war (Boys)",
      image: "/sports/50.png",
      desc: "Tug of war is a team sport where two opposing teams pull on opposite ends of a rope, attempting to drag the other team across a designated marker. It requires teamwork, strength, and strategy. A classic contest of raw power and coordination, tug of war is both a recreational activity and a competitive sport.",
    },
    {
      name: "Tug of war (Girls)",
      image: "/sports/51.png",
      desc: "Tug of war is a team sport where two opposing teams pull on opposite ends of a rope, attempting to drag the other team across a designated marker. It requires teamwork, strength, and strategy. A classic contest of raw power and coordination, tug of war is both a recreational activity and a competitive sport.",
    },
    {
      name: "Lawn Tennis (Mix)",
      image: "/sports/27.png",
      desc: "Lawn tennis is a racket sport played on a rectangular court divided by a net. Players use rackets to hit a ball back and forth, aiming to land it within the opponent's court. The game is known for its dynamic rallies, serves, and volleys. Lawn tennis is played both recreationally and professionally, with major tournaments such as Wimbledon showcasing top-tier competition.",
    },
    {
      name: "3-Legged Race (Boys)",
      image: "/sports/52.png",
      desc: "The three-legged race is a classic outdoor game where pairs of participants tie one leg each together and compete to run a specified distance. Coordination and communication are essential as teams navigate the challenge of moving in sync. It's a lighthearted, fun activity often featured in picnics, family gatherings, and team-building events.",
    },
    {
      name: "3-Legged Race (Girls)",
      image: "/sports/53.png",
      desc: "The three-legged race is a classic outdoor game where pairs of participants tie one leg each together and compete to run a specified distance. Coordination and communication are essential as teams navigate the challenge of moving in sync. It's a lighthearted, fun activity often featured in picnics, family gatherings, and team-building events.",
    },
    {
      name: "Bench Press (Boys)",
      image: "/sports/56.png",
      desc: "The bench press is a weightlifting exercise performed on a horizontal bench. It involves lying on your back and lifting a loaded barbell off a rack, lowering it to the chest, and then pressing it back up. This compound movement primarily targets the chest, shoulders, and triceps, emphasizing upper body strength and muscle development.",
    },
    {
      name: "100m Sprint (Boys)",
      image: "/sports/29.png",
      desc: "The 100m sprint is a short-distance track and field race where athletes compete to cover 100 meters in the shortest time possible. Explosive speed and rapid acceleration are crucial, making it one of the most intense and thrilling events. The race showcases pure sprinting prowess, with athletes aiming to cross the finish line in a matter of seconds.",
    },
    {
      name: "100m Sprint (Girls)",
      image: "/sports/30.png",
      desc: "The 100m sprint is a short-distance track and field race where athletes compete to cover 100 meters in the shortest time possible. Explosive speed and rapid acceleration are crucial, making it one of the most intense and thrilling events. The race showcases pure sprinting prowess, with athletes aiming to cross the finish line in a matter of seconds.",
    },
    {
      name: "Squats (Boys)",
      image: "/sports/57.png",
      desc: "Squats are a fundamental strength-training exercise where a person lowers their body by bending the knees and hips and then returns to an upright position. This compound movement engages multiple muscle groups, particularly targeting the quadriceps, hamstrings, and glutes. Squats are versatile, promoting lower body strength, endurance, and overall functional fitness.",
    },
    {
      name: "Chess (Mix)",
      image: "/sports/7.png",
      desc: "Chess is a two-player strategy board game played on an 8x8 grid. Each player starts with 16 pieces, including a king, queen, rooks, knights, bishops, and pawns. The objective is to checkmate the opponent's king, restricting its moves. Chess demands strategic thinking, foresight, and tactical skill, making it a timeless and revered game of intellect.",
    },
    {
      name: "Arm Wrestling (Boys)",
      image: "/sports/54.png",
      desc: "Arm wrestling is a one-on-one strength competition where two participants lock hands and attempt to force each other's arm to the table. It tests upper body strength, wrist stability, and technique. A simple yet intense sport, arm wrestling is often seen as a friendly challenge or a competitive event, showcasing raw power and determination.",
    },
    {
      name: "Yoga Asana",
      image: "/sports/100.png",
      desc: "Yoga asana refers to the physical postures or poses practiced in yoga. These poses are designed to promote physical, mental, and spiritual well-being. Each asana has unique benefits, ranging from increased flexibility and strength to improved focus and relaxation. Integrating breath with movement, yoga asana is a holistic practice that enhances overall health and mindfulness.",
    },
    {
      name: "Yoga Star",
      image: "/sports/99.png",
      desc: "In this dynamic yoga competition, teams consist of two participants of the same gender. Each pair is required to gracefully execute 10 yoga asanas, with each pose held for 5 seconds, set to music lasting between 150 and 180 seconds. Deductions occur for failed asanas, emphasizing both precision and endurance. Sportsmanship is paramount, and referees' decisions are conclusive.",
    },
    {
      name: "Kabaddi (Boys) Round-1",
      image: "/sports/101.png",
      desc: "Kabaddi is a high-energy team sport with roots in ancient South Asian cultures. Two teams take turns sending a raider into the opponent's half to tag as many defenders as possible and return safely. Defenders strive to stop the raider and eliminate them through tackles. Kabaddi requires agility, strength, and strategic play, blending physical prowess with teamwork.",
    },
    {
      name: "Kabaddi (Boys) Round-2",
      image: "/sports/102.png",
      desc: "Kabaddi is a high-energy team sport with roots in ancient South Asian cultures. Two teams take turns sending a raider into the opponent's half to tag as many defenders as possible and return safely. Defenders strive to stop the raider and eliminate them through tackles. Kabaddi requires agility, strength, and strategic play, blending physical prowess with teamwork.",
    },
    {
      name: "Kabaddi (Boys) Final",
      image: "/sports/103.png",
      desc: "Kabaddi is a high-energy team sport with roots in ancient South Asian cultures. Two teams take turns sending a raider into the opponent's half to tag as many defenders as possible and return safely. Defenders strive to stop the raider and eliminate them through tackles. Kabaddi requires agility, strength, and strategic play, blending physical prowess with teamwork.",
    },
    {
      name: "Kabaddi (Girls) Round-1",
      image: "/sports/104.png",
      desc: "Kabaddi is a high-energy team sport with roots in ancient South Asian cultures. Two teams take turns sending a raider into the opponent's half to tag as many defenders as possible and return safely. Defenders strive to stop the raider and eliminate them through tackles. Kabaddi requires agility, strength, and strategic play, blending physical prowess with teamwork.",
    },
    {
      name: "Kabaddi (Girls) Round-2",
      image: "/sports/105.png",
      desc: "Kabaddi is a high-energy team sport with roots in ancient South Asian cultures. Two teams take turns sending a raider into the opponent's half to tag as many defenders as possible and return safely. Defenders strive to stop the raider and eliminate them through tackles. Kabaddi requires agility, strength, and strategic play, blending physical prowess with teamwork.",
    },
    {
      name: "Kabaddi (Girls) Final",
      image: "/sports/106.png",
      desc: "Kabaddi is a high-energy team sport with roots in ancient South Asian cultures. Two teams take turns sending a raider into the opponent's half to tag as many defenders as possible and return safely. Defenders strive to stop the raider and eliminate them through tackles. Kabaddi requires agility, strength, and strategic play, blending physical prowess with teamwork.",
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
