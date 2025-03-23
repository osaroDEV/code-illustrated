import React from 'react'
import { CarouselImages } from './CarouselImages'
import { CarouselCaptions } from './CarouselCaptions'

const Carousels = () => {
  return (
    <div className="">
      <div className="">
        <section className="flex md:hidden bg-white h-16 justify-center items-center">
          <span className="lhs-caption">Learn. Build.</span>&nbsp;
          <span className="rhs-caption">Succeed.</span>
        </section>
        <CarouselImages />
      </div>
      <div className="md:relative">
        <section className="hidden z-[100] md:flex md:absolute md:bottom-[-2rem] md:right-8 md:px-8 bg-white h-16 justify-center items-center">
          <span className="lhs-caption">Learn. Build.</span>&nbsp;
          <span className="rhs-caption">Succeed.</span>
        </section>
        <CarouselCaptions />
      </div>
    </div>
  )
}

export default Carousels
