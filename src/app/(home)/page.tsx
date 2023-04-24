import { ScrollContainer } from '@/components/ScrollArea'
import { Star } from '@/components/Star'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mt-32 flex h-screen w-full flex-col items-center justify-start gap-8">
      <div className="flex w-full items-center justify-between gap-6">
        <div className="flex w-full items-center justify-start gap-6">
          <Image
            src="https://github.com/revogabe.png"
            alt=""
            width={400}
            height={400}
            className="h-24 w-24 rounded-lg object-contain"
          />
          <div className="flex flex-col gap-1">
            <h1 className=" text-3xl font-bold text-zinc-200">
              Daniel Gabriel
            </h1>
            <p className="group rounded-md text-base font-normal text-zinc-400 transition-all duration-200 ease-out">
              I&apos;m a{' '}
              <span className="mr-1 text-zinc-400 group-hover:text-emerald-400 duration-150 ease-out">
                Software Developer.
              </span>{' '}
              Specializing in NextJS
            </p>
          </div>
        </div>
        <div>
          <Star />
        </div>
      </div>
      <div className="flex w-full rounded-lg gap-6  items-center justify-start">
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/daniel-gabriel-70a565267/"
            draggable={false}
            target="_blank"
            className="gap-2 flex items-center justify-center text-zinc-300 bg-zinc-950 rounded-md px-4 py-2 hover:bg-zinc-900 duration-200 ease-out active:scale-95 hover:scale-105 hover:text-emerald-400"
            rel="noreferrer"
          >
            <LinkedInLogoIcon width={20} height={20} />
            Linkedin
          </a>
          <a
            href=""
            draggable={false}
            target="_blank"
            className="gap-2 flex items-center justify-center text-zinc-300 bg-zinc-950 rounded-md px-4 py-2 hover:bg-zinc-900 duration-200 ease-out active:scale-95 hover:scale-105 hover:text-emerald-400"
          >
            <GitHubLogoIcon width={20} height={20} />
            Github
          </a>
          <a
            href=""
            draggable={false}
            target="_blank"
            className="gap-2 flex items-center justify-center text-zinc-300 bg-zinc-950 rounded-md px-4 py-2 hover:bg-zinc-900 duration-200 ease-out active:scale-95 hover:scale-105 hover:text-emerald-400"
          >
            <TwitterLogoIcon width={20} height={20} />
            Twitter
          </a>
          <a
            href=""
            draggable={false}
            target="_blank"
            className="gap-2 flex items-center justify-center text-zinc-300 bg-zinc-950 rounded-md px-4 py-2 hover:bg-zinc-900 duration-200 ease-out active:scale-95 hover:scale-105 hover:text-emerald-400"
          >
            <EnvelopeClosedIcon width={20} height={20} />
            Email
          </a>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-6">
        <div className="flex flex-col h-96 max-w-xl  relative w-full border overflow-hidden rounded-lg border-zinc-900 ">
          <div className="absolute z-30 pointer-events-none bottom-0 h-14 w-full bg-gradient-to-b from-transparent to-zinc-950" />
          <ScrollContainer />
        </div>
        <div className="w-full flex-1">Stacks</div>
      </div>
    </main>
  )
}
