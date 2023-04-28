'use client'
import { ReactNode } from 'react'

type LinkSideProps = {
  children: ReactNode
  href: string
}

export function LinkSide({ children, href }: LinkSideProps) {
  return (
    <a
      className="w-full rounded px-4 py-2 text-zinc-200 transition-all duration-100 ease-out hover:bg-zinc-900 hover:text-emerald-500 hover:brightness-110 data-checked:bg-zinc-900 data-checked:text-emerald-400"
      href={href}
    >
      {children}
    </a>
  )
}
