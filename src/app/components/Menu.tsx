'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useModalStore from '@/lib/store/useModal'
import { IoMdClose } from 'react-icons/io'

const Menu = () => {
  const { isMenuOpen, closeMenu } = useModalStore()
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMenu = () => {
    closeMenu()
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu()
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 z-50 bg-[#1a596c] text-white transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isMenuOpen}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full h-18 flex items-center justify-center p-4 shadow-[0_0_10px_#00000026]">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <Image src="/code-ill.svg" alt="logo" width={64} height={64} />
          </Link>
          <button
            className="h-[3.125rem] w-[3.125rem] bg-white hover:bg-gray-100 shadow-[0_3px_5px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.4)] transition-shadow duration-300 ease-in-out rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleMenu}
          >
            <IoMdClose className="text-2xl text-black" />
          </button>
        </div>
      </div>
      <div
        ref={menuRef}
        className="flex flex-col items-center justify-center h-full space-y-8"
      >
        <Link href="/" className="text-2xl hover:underline" onClick={handleMenu}>
          Home
        </Link>
        <Link href="/about" className="text-2xl hover:underline" onClick={handleMenu}>
          About
        </Link>
        <Link href="/services" className="text-2xl hover:underline" onClick={handleMenu}>
          Services
        </Link>
        <Link href="/contact" className="text-2xl hover:underline" onClick={handleMenu}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Menu