import React from 'react'
import './styles.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import useModalStore from '@/lib/store/useModal'
import ClientLayout from './client-layout'

export const metadata = {
  description: 'An online school for coding and programming',
  title: 'Home: Code Illustrated',
  icons: {
    icon: "/code-ill.svg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  )
}
