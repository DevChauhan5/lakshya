'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef(null);
    const cursorTextRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e: any) => {
            gsap.to(cursorRef.current, {
                x: e.clientX - 3,
                y: e.clientY - 3,
                duration: 0.1,
            });
        };

        const onMouseEnter = (e:any) => {
            gsap.to(cursorRef.current, {
                scale: 1.8,
                duration: 0.1,
                ease: "power1.inOut", // Add ease-in-out effect
            });

            if (e.target.classList.contains('click')) {
                cursorTextRef.current.innerText = 'Click';
            } else if (e.target.classList.contains('music')) {
                cursorTextRef.current.innerText = 'Play';
            } else if (e.target.classList.contains('open')) {
                cursorTextRef.current.innerText = 'Open';
            }

            cursorTextRef.current.classList.remove('hidden');
        };

        const onMouseLeave = (e:any) => {
            gsap.to(cursorRef.current, {
                scale: 1,
                duration: 0.1,
                ease: "power1.inOut", // Add ease-in-out effect
            });

            cursorTextRef.current.innerText = '';
            cursorTextRef.current.classList.add('hidden');
        };

        window.addEventListener('mousemove', onMouseMove);

        const clickableElements = document.querySelectorAll('.click');
        clickableElements.forEach((element) => {
            element.addEventListener('mouseenter', onMouseEnter);
            element.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            clickableElements.forEach((element) => {
                element.removeEventListener('mouseenter', onMouseEnter);
                element.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className='hidden sm:flex bg-white w-6 h-6 fixed rounded-full z-[99] mix-blend-difference top-0 left-0 pointer-events-none items-center justify-center p-4'
        >
            <div ref={cursorTextRef} className='cursorText text-sm font-semibold tracking-wider text-black'></div>
        </div>
    );
}