import Link from 'next/link'
import { LinkToPage } from './LinkToPage'
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto flex h-max w-full max-w-5xl px-4 backdrop-blur-md">
      <div className="flex  w-full items-center justify-between py-4">
        <Link href="/">
          <div className="flex items-center justify-start gap-2">
            <CodeBracketSquareIcon
              width={32}
              height={32}
              className="text-zinc-200"
            />
            <h1 className="text-xl font-extrabold text-zinc-200 max-sm:hidden">
              Revogabe
            </h1>
          </div>
        </Link>
        <div className="flex w-max items-center justify-end">
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
