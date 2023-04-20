'use client'
import Link from 'next/link'
import { ReactNode } from 'react'

type LinkSideProps = {
  children: ReactNode
  href: string
}

export function LinkSide({ children, href }: LinkSideProps) {
  return (
    <Link
      className="w-full hover:bg-zinc-900 text-zinc-200 px-4 py-2 hover:text-emerald-500 hover:brightness-110 ease-out transition-all duration-100 data-checked:bg-zinc-900 data-checked:text-emerald-400 rounded"
      href={href}
    >
      {children}
    </Link>
  )
}
