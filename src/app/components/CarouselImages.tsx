'use client'
import * as React from "react"
import Image from 'next/image'

export function CarouselImages() {
  const images = [
    "/images/flying.jpg",
    "/images/looking.jpg",
    "/images/smiling.jpg",
    "/images/shaking.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}