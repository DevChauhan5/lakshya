'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e: any) => {
            gsap.to(cursorRef.current, {
                x: e.clientX - 3,
                y: e.clientY - 3,
                duration: 0.1,
            });
        };
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div ref={cursorRef} className="hidden sm:flex fixed z-[99] mix-blend-difference top-0 left-0 pointer-events-none items-center justify-center p-4 transform rotate-[-90]">🢁</div>
    );
}