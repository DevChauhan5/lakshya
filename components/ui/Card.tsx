import React, { Suspense } from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Cardbox({ src, title, href }: { src: string, title: string, href: string }) {
  return (

    <Card
      isFooterBlurred
      radius="lg"
      className="border-none h-[500px] w-[350px]"
    >
      <Link href={href}>
        <Suspense fallback={<h1 className="text-5xl text-center tracking-wide">Loading...</h1>}>
          <Image
            isBlurred
            src={src}
            alt={`${title} Image`}
            height={450}
            width={350}
            className="object-cover"
          />
        </Suspense>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-lg text-white/80">{title}</p>
          <div className="text-sm text-white bg-black/20 p-2 rounded-xl">
            See More..
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
