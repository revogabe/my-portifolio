import { ReactNode } from 'react'
import '../styles/globals.css'
import { Lato } from 'next/font/google'
import { Header } from '@/components/Header'
import Providers from './Provider'
import { CommandMenu } from '@/components/CommandMenu'

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
      <body className="text-zinc-300 w-screen min-h-screen bg-zinc-950 px-6 overflow-x-hidden">
        <Providers>
          <Header />
          <div className="w-full max-w-5xl mx-auto">
            {children}
            <CommandMenu />
          </div>
        </Providers>
      </body>
    </html>
  )
}
