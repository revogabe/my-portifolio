import { ReactNode } from 'react'
import '../styles/globals.css'
import { Lato } from 'next/font/google'
import { Header } from '@/components/Header'
import Providers from './Provider'

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
      <body className="mx-auto w-full max-w-5xl bg-zinc-950 px-6">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
