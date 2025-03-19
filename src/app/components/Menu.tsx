'use client'
import Image from 'next/image'
import Link from 'next/link'
import useModalStore from '@/lib/store/useModal'
import { IoMdClose } from "react-icons/io";

const Menu = () => {
  const { closeMenu } = useModalStore()
  const handleMenu = () => {
    closeMenu()
  }

  return <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-[#1a596c]">
    <div className="w-full h-18 flex items-center justify-center p-4 shadow-[0_0_10px_#00000026]">
      <div className="w-full flex items-center justify-between">
        <Link href="/">
          <Image src="/code-ill.svg" alt="logo" width={64} height={64} />
        </Link>
        <button
          className="h-[3.125rem] w-[3.125rem] bg-white hover:bg-grey-100 shadow-[0_3px_5px_rgba(0,0,0,0.2)]  hover:shadow-[0_4px_6px_rgba(0,0,0,0.4)]  transition-shadow duration-300 ease-in-out rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleMenu}
        >
          <IoMdClose className="text-2xl" />
        </button>
      </div>
    </div>
  </div>
}

export default Menu
