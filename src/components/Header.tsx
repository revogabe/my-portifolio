import Link from 'next/link'
import { LinkToPage } from './LinkToPage'
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'

export function Header() {
  return (
    <header className=" fixed inset-0 z-30 flex h-max items-center justify-center backdrop-blur-md">
      <div className="flex w-full max-w-5xl items-center justify-between py-4 px-4">
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
        <div>
          <li className="flex gap-4">
            <LinkToPage href="/about">About me</LinkToPage>
            <LinkToPage href="/projects">Projects</LinkToPage>
            <LinkToPage href="/blog">Blog</LinkToPage>
          </li>
        </div>
      </div>
      {/* <div className="flex gap-4">
          <GitHubLogoIcon width={34} height={34} className="text-zinc-200" />
          <LinkedInLogoIcon width={34} height={34} className="text-zinc-200" />
        </div> */}
    </header>
  )
}
