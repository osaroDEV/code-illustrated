'use client'
import * as React from "react"
import Image from 'next/image'

export function CarouselImages() {
  const images = [
    "https://res.cloudinary.com/dlahyjhur/image/upload/v1747656973/online-class2_zurjc7.jpg",
    "https://res.cloudinary.com/dlahyjhur/image/upload/v1747656968/girl-count_lkut6i.jpg",
    "https://res.cloudinary.com/dlahyjhur/image/upload/v1747656967/online-class1_vjzohm.jpg",
    "https://res.cloudinary.com/dlahyjhur/image/upload/v1747656967/blurred-gadgets_jrridt.jpg",
    "https://res.cloudinary.com/dlahyjhur/image/upload/v1747656964/online-tutor_a0reae.jpg",
    'https://res.cloudinary.com/dlahyjhur/image/upload/v1747656124/pointing-at-laptop_k74oyb.jpg'
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