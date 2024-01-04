'use client'
import React, { useRef, useEffect } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import gsap from "gsap";


export default function EventCard({ name, image, desc }: { image: string, name: string, desc: string }) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const descriptionRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        const card = cardRef.current;
        const description = descriptionRef.current;

        if (card && description) {
            const tl = gsap.timeline({ paused: true });

            tl.to(card.children, { opacity: 0, duration: 0.5 });
            tl.fromTo(
                description,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 }
            );

            card.addEventListener("mouseenter", () => tl.play());
            card.addEventListener("mouseleave", () => tl.reverse());

            return () => {
                card.removeEventListener("mouseenter", () => tl.play());
                card.removeEventListener("mouseleave", () => tl.reverse());
            };
        }
    }, []);

    return (
        <main>
            <Card
                ref={cardRef}
                className="py-4 relative cursor-pointer"
                isHoverable={true}
                // isPressable={true}
                // onClick={() => console.log(name)}
            >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large tracking-wider">{name}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        isZoomed
                        isBlurred
                        width={240}
                        src={image}
                        alt="Event image"
                    />
                </CardBody>
                <p ref={descriptionRef} className="absolute top-0 left-0 opacity-0 p-4 tracking-wide">
                    {desc}
                </p>
            </Card>
        </main>
    );
}