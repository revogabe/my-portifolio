import { ReactNode } from 'react'
import '../styles/globals.css'
import { Lato } from 'next/font/google'
import { Header } from '@/components/Header'

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio website built with Next.js and Tailwind CSS',
}

const lato = Lato({
  weight: ['400', '300', '700', '900'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={lato.className}>
      <body className="mx-auto max-w-5xl bg-black/95">
        <Header />
        {children}
      </body>
    </html>
  )
}
