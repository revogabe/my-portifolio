import Link from 'next/link'
import { LinkToPage } from './LinkToPage'
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'

export function Header() {
  return (
    <header className="z-30 max-w-5xl fixed top-0 left-0 right-0 bg-red-400 mx-auto flex w-full h-max backdrop-blur-md ">
      <div className="flex  w-full items-center justify-between py-4">
        <Link href="/">
          <div className="flex items-center justify-start gap-2">
            <CodeBracketSquareIcon
              width={32}
              height={32}
              className="text-zinc-200"
            />
            <h1 className="text-xl font-extrabold text-zinc-200">Revogabe</h1>
          </div>
        </Link>
        <div className="w-max flex items-center justify-end">
          <li className="flex gap-4">
            <LinkToPage href="/about">About me</LinkToPage>
            <LinkToPage href="/projects">Projects</LinkToPage>
            <LinkToPage href="/blog">Blog</LinkToPage>
          </li>
        </div>
      </div>
    </header>
  )
}
