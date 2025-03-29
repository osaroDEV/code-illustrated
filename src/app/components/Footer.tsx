'use client'

import React, { useState } from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import {
  MdOutlineExpandMore,
  MdOutlineExpandLess,
} from 'react-icons/md'
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  const [isContactExpand, setIsContactExpand] = useState(false)
  const [isHelpExpand, setIsHelpExpand] = useState(false)
  const [isLearnMoreExpand, setIsLearnMoreExpand] = useState(false)
  const [isJoinUsExpand, setIsJoinUsExpand] = useState(false)

  const handleContactExpand = () => {
    setIsContactExpand((prev) => !prev)
  }

  const handleHelpExpand = () => {
    setIsHelpExpand((prev) => !prev)
  }

  const handleLearnMoreExpand = () => {
    setIsLearnMoreExpand((prev) => !prev)
  }

  const handleJoinUsExpand = () => {
    setIsJoinUsExpand((prev) => !prev)
  }

  return (
    <div className="p-4 bg-[#4f4f4f] text-white">
      <section className="flex flex-col md:flex-row flex-wrap mb-8 md:mb-4">
        <div className="h-auto md:h-[200px] w-full md:w-[50%] lg:w-[25%] p-2">
          <div className="flex md:block justify-between items-center">
            <h2 className="uppercase font-bold tracking-[2px]">contact us</h2>
            <span onClick={handleContactExpand} className="md:hidden text-2xl">
              {isContactExpand ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
            </span>
          </div>
          <div className="md:hidden">
            {isContactExpand ? (
              <div>
                <section className="text-[14px] lg:text-[16px] leading-[1.7]">
                  <p>Tel: +44 20 1234 5678</p>
                  <p>Email: admin@codeillustrated.com</p>
                </section>
                <section className="w-[200px] flex flex-row">
                  <span className="flex justify-center items-center w-[25%] md:w-full h-[50px]">
                    <FaFacebookF className="text-[#3b5998]" />
                  </span>
                  <Link href="https://x.com/codeillustrated" className="flex justify-center items-center w-[25%] md:w-full h-[50px]">
                    <BsTwitter className="text-[#1da1f2] cursor-pointer" />
                  </Link>
                  <span className="flex justify-center items-center w-[25%] md:w-full h-[50px]">
                    <BsInstagram className="text-[red]" />
                  </span>
                  <span className="flex justify-center items-center w-[25%] md:w-full h-[50px]">
                    <IoLogoYoutube className="text-[#ff0033] text-2xl" />
                  </span>
                </section>
              </div>
            ) : null}
          </div>
          <div className="hidden md:block">
            <section className="text-[14px] lg:text-[16px] leading-[1.7]">
              <p>Tel: +44 20 1234 5678</p>
              <p>Email: admin@codeillustrated.com</p>
            </section>
            <section className="w-[12.5rem] flex flex-row">
              <span className="flex justify-center items-center w-[25%] md:w-full h-[50px]">
                <FaFacebookF className="text-[#3b5998]" />
              </span>
              <Link href="https://x.com/codeillustrated" className="flex justify-center items-center w-[25%] md:w-full h-[50px]">
                <BsTwitter className="text-[#1da1f2] cursor-pointer" />
              </Link>
              <span className="flex justify-center items-center w-[25%] md:w-full h-[50px]">
                <BsInstagram className="text-[red]" />
              </span>
              <span className="flex justify-center items-center w-[25%] md:w-full h-[50px]">
                <IoLogoYoutube className="text-[#ff0033] text-2xl" />
              </span>
            </section>
          </div>
        </div>
        <div className="h-auto md:h-[12.5rem] w-full md:w-[50%] lg:w-[25%] p-2">
          <div className="flex md:block justify-between items-center">
            <h2 className="uppercase font-bold tracking-[2px]">help</h2>
            <span onClick={handleHelpExpand} className="md:hidden text-2xl">
              {isHelpExpand ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
            </span>
          </div>
          <div>
            {isHelpExpand ? (
              <section className="md:hidden text-[14px] lg:text-[16px] leading-[1.7]">
                <p>
                  <Link href="/terms">Terms</Link>
                </p>
                <p>
                  <Link href="/refund-policy">Refund Policy</Link>
                </p>
              </section>
            ) : null}
          </div>
          <section className="hidden md:block text-[14px] lg:text-[16px] leading-[1.7]">
            <p>
              <Link href="/terms">Terms</Link>
            </p>
            <p>
              <Link href="/refund-policy">Refund Policy</Link>
            </p>
          </section>
        </div>
        <div className="h-auto md:h-[200px] w-full md:w-[50%] lg:w-[25%] p-2">
          <div className="flex md:block justify-between items-center">
            <h2 className="uppercase font-bold tracking-[2px]">learn more</h2>
            <span onClick={handleLearnMoreExpand} className="md:hidden text-2xl font-thin">
              {isLearnMoreExpand ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
            </span>
          </div>
          <div>
            {isLearnMoreExpand ? (
              <section className="md:hidden text-[14px] lg:text-[16px] leading-[1.7]">
                <p>
                  <Link href="/about-us">About Us</Link>
                </p>
                <p>
                  <Link href="/blog">Blog</Link>
                </p>
                <p>
                  <Link href="/contact-us">Contact</Link>
                </p>
              </section>
            ) : null}
          </div>
          <section className="hidden md:block text-[14px] lg:text-[16px] leading-[1.7]">
            <p>
              <Link href="/about-us">About Us</Link>
            </p>
            <p>
              <Link href="/blog">Blog</Link>
            </p>
            <p>
              <Link href="/contact-us">Contact</Link>
            </p>
          </section>
        </div>
        {/* <div className='h-auto md:h-[200px] w-full md:w-[50%] lg:w-[25%] p-2'>
          <div className='flex md:block justify-between items-center'>
            <h2 className='uppercase font-bold tracking-[2px]'>join us</h2>
            <span onClick={handleJoinUsExpand} className='md:hidden text-2xl'>
              {isJoinUsExpand ? (
                <MdOutlineExpandLess />
              ) : (
                <MdOutlineExpandMore />
              )}
            </span>
          </div>
          <div>
            {isJoinUsExpand ? (
              <section className='md:hidden text-[14px] lg:text-[16px] leading-[1.7]'>
                <p>New subscribers get 30% off their first purchase</p>
                <div className='flex w-full'>
                  <input
                    type='text'
                    placeholder='your email'
                    className='w-[80%] border border-[rgba(0,0,0,0.1)] indent-3 outline-0'
                  />
                  <span className='flex justify-center items-center p-4 md:w-full h-[50px] bg-black'>
                    <MdOutlineMailOutline className='text-3xl text-white' />
                  </span>
                </div>
              </section>
            ) : null}
          </div>
          <section className='hidden md:block text-[14px] lg:text-[16px] leading-[1.7]'>
            <p>New subscribers get 30% off their first purchase</p>
            <div className='flex'>
              <input
                type='text'
                placeholder='your email'
                className='w-[80%] border border-[rgba(0,0,0,0.1)] indent-3 outline-0'
              />
              <span className='flex justify-center items-center p-4 h-[50px] bg-black w-[20%]'>
                <MdOutlineMailOutline className='text-3xl text-white' />
              </span>
            </div>
          </section>
        </div> */}
      </section>
      <hr className="border border-[rgba(0,0,0,0.3)] mb-[1rem]" />
      <span className="p-[1rem_0] text-[14px]">
        &copy; {new Date().getFullYear()}. Code Illustrated Online School
      </span>
    </div>
  )
}

export default Footer
