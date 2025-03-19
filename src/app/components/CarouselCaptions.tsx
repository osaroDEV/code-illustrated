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

export function CarouselCaptions() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  
  const captions = [
    {header: "Unlock Your Coding Potential", note: "Master essential skills and build projects that stand out. Start your journey today!"},
    {header: "From Beginner to Builder", note: "Our courses guide you through every step, with hands-on practice and expert support. Level up your career!"},
    {header: "Dive into the World of Code", note: "Learn in-demand languages like React, JavaScript, and more. Flexible schedules and interactive lessons await!"},
    {header: "Future-Proof Your Skills", note: "Join our community of passionate coders and gain the expertise to thrive in the tech industry. Enroll now and transform your future!"},
  ]
  
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {captions.map((caption,index) => (
          <CarouselItem key={index} className="w-full">
            <div className="relative flex flex-col gap-4 w-full h-[350px] md:h-[500px] bg-[#C31D24] text-white p-5">
              <h2 className='text-[1.75rem] leading-[1.2]'>{caption.header}</h2>
              <h3 className='text-[1.125rem] leading-[1.3]'>{caption.note}</h3>
              <button className='outline-0 p-3 mx-auto inline-block text-[#ffe747] bg-transparent border-[.125rem] hover:border-[.25rem] border-[#ffe747] cursor-pointer'>Enquire Now</button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}