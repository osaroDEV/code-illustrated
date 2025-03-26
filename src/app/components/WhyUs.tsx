import Link from 'next/link'
import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'

const WhyUs = () => {
  return (
    <div className="bg-white p-8 md:p-12 xl:p-16">
      <h1 className="text-2xl xl:text-3xl font-bold text-center">Start Your New Career Today</h1>
      <div className="flex flex-col gap-4 text-sm xl:text-[1rem] text-center mt-4 leading-6">
        <p>
          Our comprehensive online coding program provides a structured pathway to developing
          in-demand skills in Web, Software, and App Development. Through step-by-step modules,
          you'll learn front-end and back-end coding, build practical projects, and prepare for
          industry-recognized certifications. Construct a strong portfolio showcasing your
          abilities.
        </p>
        <p>
          This online program is designed to be completed within 6-12 months, offering flexibility
          for career changers and aspiring developers. Benefit from expert tutor support throughout
          your learning journey.
        </p>
      </div>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeg4jkELUAaKIVla7BLOro9vT1G7X69aYG2EUtEGshL8uPr4w/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 sm:mt-8 w-full md:w-1/2 outline-0 flex py-2 px-3 mx-auto items-center justify-center gap-2 text-[#ffe747] bg-[#C31D24] border-[.125rem] hover:border-[.25rem] border-[#ffe747] cursor-pointer"
      >
        Enquire Now{' '}
        <span>
          <AiOutlineDoubleRight />
        </span>
      </Link>
    </div>
  )
}

export default WhyUs
