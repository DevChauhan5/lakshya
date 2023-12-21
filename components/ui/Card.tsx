import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function Cardbox({ src, title, href }: { src: string, title: string, href: string }) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        isZoomed
        alt="Card image"
        className="object-fill"
        height={600}
        src={src}
        width={400}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-lg text-white/80">{title}</p>
        <Link href={href}>
          <Button className="text-sm text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            See More..
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
