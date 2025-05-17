'use client'

import useModalStore from '@/lib/store/useModal'
import Menu from '../components/Menu'

export default function ClientLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const { isMenuOpen } = useModalStore()

  return (
    <div className="relative">
      {isMenuOpen && <Menu />}
      <main>{children}</main>
    </div>
  )
}