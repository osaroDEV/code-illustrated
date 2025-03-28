'use client'
import React from 'react'
import './styles.css'
import Navbar from '@/app/components/Navbar'
import Menu from '@/app/components/Menu'
import Footer from '@/app/components/Footer'
import useModalStore from '@/lib/store/useModal'

// export const metadata = {
//   description: 'An online school for coding and programming',
//   title: 'Home: Code Illustrated',
// }

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const { isMenuOpen } = useModalStore()

  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        
        {isMenuOpen && <Menu />}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
