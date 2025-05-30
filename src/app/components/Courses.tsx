import React from 'react'
import { courses } from '@/lib/data/courses'
import Image from 'next/image'
import clsx from 'clsx'

const Courses = () => {
  return (
    <div className="bg-[#1a596c] flex items-center justify-center px-4 py-8 md:px-8 md:py-12 xl:px-12 xl:py-16">
      <div className="w-full flex flex-col gap-15 lg:gap-[109px]">
        {/* <h2 className="my-4 text-center md:text-left tracking-[.235rem] uppercase text-white sm:text-xl md:text-2xl">
          courses
        </h2> */}
        <div className="w-full lg:w-[528px] h-[118px] lg:h-[97px] flex flex-col gap-[20px] lg:gap-[30px] justify-center items-center mx-auto">
          <div className="w-[174px] lg:w-[189px] flex justify-center items-center gap-[15px]">
            <span className="w-[4px] h-[4px] bg-[#007AFF]"></span>
            <h2 className="uppercase text-[10px] lg:text-[11px] text-white">Courses</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-[10px] px-3">
            <h2 className="text-white text-center text-[18px] lg:text-[22px] font-semibold leading-[21.6px]">
            What Our Offerings Include
            </h2>
            <p className="text-white text-center text-[13px] lg:text-[15px] leading-[15.6px] font-medium">
            Explore our diverse range of courses designed to empower you with in-demand skills and knowledge.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {courses.map((course) => (
            <div
              key={course.id}
              className={clsx(
                'relative w-full sm:w-1/2 md:w-1/3 flex justify-center items-center gap-4 text-white hover:text-[#ffe747] py-12 sm:py-16 opacity-95 transition-opacity duration-300 ease-in-out',
                {
                  // 'bg-[#af3344]': course.id === 1,
                  'bg-[#af3344]': course.id === 1,
                  'bg-[#26365e]': course.id === 2,
                  'bg-[#05668f]': course.id === 3,
                  'bg-[#464f6d]': course.id === 4,
                  'bg-[#EA580B]': course.id === 5,
                },
              )}
            >
              <div className="absolute inset-0 z-[-1]">
                <Image
                  className="w-full h-full object-cover"
                  src={course.image}
                  alt={course.header}
                  fill
                  sizes="100vw"
                />
              </div>
              <h3 className="w-max-[70%] text-center sm:text-xl font-extrabold">{course.header}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
