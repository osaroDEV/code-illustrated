'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselMod() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const images = [
    "/images/flying.jpg",
    "/images/looking.jpg",
    "/images/smiling.jpg",
    "/images/shaking.jpg",
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="w-full h-[350px] border border-red-500">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
