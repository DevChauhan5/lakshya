'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Days = () => {
  const data = [
    {
      text: "Lorem ipsim dolor sit amet",
      image: "https://thumbs.dreamstime.com/b/car-dusty-oak-alley-sunset-drives-along-road-national-park-oaks-dust-against-background-sun-gauja-196324693.jpg",
      class: "perspective-left",
    },
    {
      text: "Lorem 67",
      image: "https://images.unsplash.com/photo-1701666469257-319f272914c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
      class: "perspective-right",
    },
    {
      text: "Lorem ipsim dolor sit amet",
      image: "https://thumbs.dreamstime.com/b/car-dusty-oak-alley-sunset-drives-along-road-national-park-oaks-dust-against-background-sun-gauja-196324693.jpg",
      class: "perspective-left third",
    }
  ]

  const perspectiveRef = useRef(null);
  const triggerRef = useRef(null);
  const refs = data.map(() => useRef([]));

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const firstAnim = refs[0].current;
    const secondAnim = refs[1].current;
    let ctx = gsap.context(() => {
      gsap.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 bottom",
          scrub: 1,
          pin: true,
          snap: 1 / (refs.length),
        }
      })
        .to(perspectiveRef.current, {
          transform: "translate3d(0px, 0px, 75rem)",
        })
        .set(firstAnim, {
          opacity: 0,
        }, 0.250)
        .set(secondAnim, {
          opacity: 0,
        }, 0.400);
    })
    return () => ctx.revert();
  }, []);

  return (
    <section className="">
      <div ref={triggerRef} className="perspective">
        <div ref={perspectiveRef} className="perspective-inner">
          {data.map((project, index) => (
            <div ref={refs[index]} key={index} className={project.class}>
              <img src={project.image} alt={project.text} />
              <div className="perspective-desc">
                <h2>{project.text}</h2>
                <Link href="/d">
                  hello
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Days