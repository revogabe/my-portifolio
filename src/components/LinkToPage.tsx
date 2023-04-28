'use client'
import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type LinkToPageProps = {
  children: ReactNode
  href: string
}

export function LinkToPage({ children, href }: LinkToPageProps) {
  const isActive = usePathname()

  return (
    <Link
      data-li={isActive === href ? 'checked' : ''}
      href={href}
      className="rounded bg-transparent px-3 py-2 text-base font-bold text-zinc-600 transition-all duration-200 ease-out hover:bg-zinc-900 hover:text-zinc-200 data-checked:text-zinc-200 "
    >
      {children}
    </Link>
  )
}
