import { ReactNode } from 'react'
import '../styles/globals.css'
import { Lato } from 'next/font/google'
import { Header } from '@/components/Header'
import Providers from './Provider'
import { CommandMenu } from '@/components/CommandMenu'

export const metadata = {
  title: 'Revogabe | Portfolio',
  description: 'A portfolio of my projects, and a little bit about me.',
}

const lato = Lato({
  weight: ['400', '300', '100', '700', '900'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`scroll-pt-40 scroll-smooth ${lato.className}`}>
      <body className=" min-h-screen w-screen overflow-x-hidden bg-zinc-950 px-6 text-zinc-300">
        <Providers>
          <Header />
          <div className="mx-auto w-full max-w-5xl px-1">
            {children}
            <CommandMenu />
          </div>
        </Providers>
      </body>
    </html>
  )
}
