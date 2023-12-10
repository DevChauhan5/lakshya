import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/sponsors.css';

export default function Sponsors() {
  const logosRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let animationDirection = 1; // 1 for forward, -1 for reverse
            let lastScroll = window.scrollY;

            const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0, scale: 0.8 } });

            gsap.to('.logos-slide', {
              xPercent: -100,
              scrollTrigger: {
                trigger: '.logos-slide',
                start: 'top top',
                end: '+=100%',
                scrub: true,
                onUpdate: () => {
                  const currentScroll = window.scrollY;
                  animationDirection = currentScroll > lastScroll ? 1 : -1;
                  lastScroll = currentScroll;
                },
              },
            });

            tl.from('.logos-slide img', {
              x: () => animationDirection === 1 ? '-=100%' : '+=100%',
              opacity: 0,
              scale: 0.5,
              delay: 1,
              duration: 1.5,
              stagger: 0.2,
              yoyo: true,
              ease: 'power4.out',
            });

            ScrollTrigger.create({
              trigger: '.logos-slide',
              animation: tl,
              start: 'top 80%',
              end: '+=100',
              scrub: true,
              once: false,
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (logosRef.current) {
      observer.observe(logosRef.current);
    }

    return () => {
      if (logosRef.current) {
        observer.unobserve(logosRef.current);
      }
    };
  }, []);

  return (
    <main id='sponsors' className='mb-20 select-none  text-center gap-20 w-full border-white border-t-[.5px] border-b-[.5px] overflow-hidden'>
      <h1 className='text-5xl py-12 md:text-7xl w-full'>Sponsors @ Lakshya'24</h1>
      <div ref={logosRef} className="logos bg-white">
        <div className="logos-wrap">
          <div className="logos-slide">
            <img src="/logos/3m.svg" />
            <img src="/logos/3m.svg" />
            <img src="/logos/barstool-store.svg" />
            <img src="/logos/budweiser.svg" />
            <img src="/logos/buzzfeed.svg" />
            <img src="/logos/forbes.svg" />
            <img src="/logos/macys.svg" />
            <img src="/logos/menshealth.svg" />
            <img src="/logos/mrbeast.svg" />
            {/* Duplicate the logos for smooth infinite scrolling */}
            <img src="/logos/3m.svg" />
            <img src="/logos/barstool-store.svg" />
            <img src="/logos/budweiser.svg" />
            <img src="/logos/buzzfeed.svg" />
            <img src="/logos/forbes.svg" />
            <img src="/logos/macys.svg" />
            <img src="/logos/menshealth.svg" />
            <img src="/logos/mrbeast.svg" />
          </div>
        </div>
      </div>
    </main>
  );
}
