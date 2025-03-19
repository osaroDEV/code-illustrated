import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-full h-18 bg-white flex items-center justify-center p-4 shadow-[0_0_10px_#00000026]">
      <div className="w-full flex items-center justify-between">
        <Link href="/">
          <Image src="/code-ill.svg" alt="logo" width={64} height={64} />
        </Link>
        <button className="h-[3.125rem] w-[3.125rem] bg-[#a20f24] rounded-full flex items-center justify-center">
          <RxHamburgerMenu className="text-white text-2xl" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
