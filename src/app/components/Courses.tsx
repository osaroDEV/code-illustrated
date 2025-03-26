import React from 'react'
import { courses } from '@/lib/data/courses'
import clsx from 'clsx'

const Courses = () => {
  return (
    <div className="bg-[#1a596c] flex items-center justify-center px-4 py-8 md:px-8 md:py-12 xl:px-12 xl:py-16">
      <div className="w-full">
        <h2 className="my-4 text-center md:text-left tracking-[.235rem] uppercase text-white sm:text-xl md:text-2xl">courses</h2>
        <div className="flex flex-wrap">
          {courses.map((course) => (
            <div
              key={course.id}
              className={clsx(
                'w-full sm:w-1/2 md:w-1/3 flex justify-center items-center gap-4 text-white hover:text-[#ffe747] py-12 sm:py-16',
                {
                  'bg-[#af3344]': course.id === 1,
                  'bg-[#26365e]': course.id === 2,
                  'bg-[#05668f]': course.id === 3,
                  'bg-[#464f6d]': course.id === 4,
                  'bg-[#EA580B]': course.id === 5,
                },
              )}
            >
              <h3 className="w-max-[70%] text-center sm:text-xl">{course.header}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
