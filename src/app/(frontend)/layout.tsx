import React from 'react'
import './styles.css'
import Navbar from '@/app/components/Navbar'

export const metadata = {
  description: 'An online school for coding and programming',
  title: 'Home: Code Illustrated',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
