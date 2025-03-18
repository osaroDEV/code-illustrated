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
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="relative w-full h-[350px] md:h-[500px]">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                sizes="100vw"
                priority={index === 0} 
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}