import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white flex items-center justify-center p-4 shadow-[0_0_10px_#00000026]">
      <div className="w-full flex items-center justify-between">
        
          <Link href='/'><Image src="/code-ill.svg" alt="logo" width={80} height={80} /></Link>
          
        
          {/* <div className='leading-0 uppercase h-10'>
            <h2 className='text-3xl'>code</h2>
            <h3 className='text-[.5rem]'>illustrated school</h3>
          </div> */}

        <button className="h-[3.125rem] w-[3.125rem] bg-[#a20f24] rounded-full flex items-center justify-center"><RxHamburgerMenu className='text-white text-2xl' /></button>
      </div>
    </div>
  )
}

export default Navbar
