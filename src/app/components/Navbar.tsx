'use client'
import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link'
import useModalStore from '@/lib/store/useModal'

const Navbar = () => {
  const { openMenu } = useModalStore()

  const handleMenu = () => {
    openMenu()
  }
  return (
    <div className="w-full h-18 bg-white flex items-center justify-center p-4 shadow-[0_0_10px_#00000026]">
      <div className="w-full flex items-center justify-between">
        <Link href="/">
          <Image src="/code-ill.svg" alt="logo" width={64} height={64} />
        </Link>
        <button
          className="h-[3.125rem] w-[3.125rem] bg-[#C31D24] hover:bg-[#a20f24] shadow-[0_3px_5px_rgba(0,0,0,0.2)]  hover:shadow-[0_4px_6px_rgba(0,0,0,0.4)]  transition-shadow duration-300 ease-in-out rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleMenu}
        >
          <RxHamburgerMenu className="text-white text-2xl" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
