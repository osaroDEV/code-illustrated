import React from 'react'
import { courses } from '@/lib/data/courses'
import clsx from 'clsx'

const Courses = () => {
  return (
    <div className="bg-[#1a596c] flex flex-wrap items-center justify-center px-4 py-8 md:px-8 md:py-12 xl:px-12 xl:py-16">
      <div className="w-full">
        <h2 className="my-4 text-center tracking-[.235em] uppercase text-white">courses</h2>
        <div>
            {courses.map((course) => (
                <div key={course.id} className={clsx (" w-full flex flex-col justify-center items-center gap-4 text-white py-12", {
                    "bg-[#af3344]": course.id === 1,
                    "bg-[#26365e]": course.id === 2,
                    "bg-[#05668f]": course.id === 3,
                    "bg-[#464f6d]": course.id === 4,
                    "bg-[#EA580B]": course.id === 5,
                })}>
                    <h3 className="w-max-[70%] text-xs">{course.header}</h3>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
