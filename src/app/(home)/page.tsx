import { CardContainer } from '@/components/CardContainer'
import { StacksOverlay } from '@/components/StacksOverlay'
import { Star } from '@/components/Star'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mb-20 mt-32 flex min-h-screen w-full flex-col items-center  justify-start gap-4">
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
              <span className="mr-1 text-zinc-400 duration-150 ease-out group-hover:text-emerald-400">
                Software Developer.
              </span>{' '}
              Specializing in NextJS
            </p>
          </div>
        </div>
        <div className="hidden sm:flex">
          <Star />
        </div>
      </div>
      <div className="flex w-full items-center justify-start  gap-6 rounded-lg">
        <div className=" flex gap-3">
          <a
            href="https://www.linkedin.com/in/daniel-gabriel-70a565267/"
            draggable={false}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-zinc-300 duration-200 ease-out hover:scale-105 hover:bg-zinc-900 hover:text-emerald-400 active:scale-95"
            rel="noreferrer"
          >
            <LinkedInLogoIcon width={20} height={20} />
            Linkedin
          </a>
          <a
            href="https://github.com/revogabe"
            draggable={false}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-zinc-300 duration-200 ease-out hover:scale-105 hover:bg-zinc-900 hover:text-emerald-400 active:scale-95"
            rel="noreferrer"
          >
            <GitHubLogoIcon width={20} height={20} />
            Github
          </a>
          <a
            href="https://twitter.com/orevogabe"
            draggable={false}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-zinc-300 duration-200 ease-out hover:scale-105 hover:bg-zinc-900 hover:text-emerald-400 active:scale-95"
            rel="noreferrer"
          >
            <TwitterLogoIcon width={20} height={20} />
            Twitter
          </a>
          <a
            href="mailto:revogabe.dev@gmail.com"
            draggable={false}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-zinc-300 duration-200 ease-out hover:scale-105 hover:bg-zinc-900 hover:text-emerald-400 active:scale-95 max-sm:hidden"
            rel="noreferrer"
          >
            <EnvelopeClosedIcon width={20} height={20} />
            Email
          </a>
        </div>
      </div>
      <div className="mt-12 flex w-full flex-col items-start justify-start gap-2 rounded-lg border border-zinc-800 px-8 py-6">
        <h2 className="text-xl font-bold text-emerald-500">About me</h2>
        <p
          title="Hello, I am a technology enthusiast who is constantly seeking new
          opportunities to learn and grow professionally. Currently, I possess
          skills in Next, React, Node.js, among other cutting-edge stacks in the
          market. Currently, I am a Freelance Developer who performs live coding
          with the intention of helping my community with tips on React, Next,
          Node, and many other technologies. We are also creating an Open Source
          project among our community with a focus on gamification-style
          learning for beginner developers, using agile methodologies and git
          flow."
          className="line-clamp-4 leading-relaxed text-zinc-300"
        >
          Hello, I am a technology enthusiast who is constantly seeking new
          opportunities to learn and grow professionally. Currently, I possess
          skills in Next, React, Node.js, among other cutting-edge stacks in the
          market. Currently, I am a Freelance Developer who performs live coding
          with the intention of helping my community with tips on React, Next,
          Node, and many other technologies. We are also creating an Open Source
          project among our community with a focus on gamification-style
          learning for beginner developers, using agile methodologies and git
          flow.
        </p>
      </div>
      <div className="mt-12 flex w-full items-center justify-between gap-6 max-md:flex-col">
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-emerald-500">
              ⭐ My Favorite Projects
            </h2>
            <Link
              className="w-max rounded-md px-4 py-2 text-sm font-medium duration-150 ease-out hover:bg-zinc-900 hover:text-emerald-400"
              href="/projects"
            >
              See more
            </Link>
          </div>
          <div className="relative flex h-max w-full max-w-xl  flex-col gap-4 overflow-hidden rounded-lg ">
            <CardContainer
              title="JobsDev GO"
              description="This project is an API in Golang and Frontend in Next.js with the intention of studying more about Go and also helping the community with the job search in the market."
              link="https://github.com/revogabe/go-jobsdev"
              variant="minimal"
            />
            <CardContainer
              title="feat: add default value prop"
              description="In this PR, I added the optional prop of default value, which, when passing the item's value to the default value, makes this item active. Otherwise, the function of activating the first item on the list continues."
              link="https://github.com/pacocoursey/cmdk/pull/123"
              variant="minimal"
            />
            <CardContainer
              title="LoopyGo"
              description="Loopy is a completely Open Source Duolingo-style programming learning platform."
              link="https://github.com/LoopyGO/loopy-web"
              variant="minimal"
            />
            <CardContainer
              title="Br Devstreamers V2"
              description="redesign of the project conceived by falivjmendes which consists of bringing together the lives of br developers"
              link="https://github.com/revogabe/br-devstreamers-v2"
              variant="minimal"
            />
          </div>
        </div>
        <StacksOverlay />
      </div>
      <div className="mt-12 flex w-full flex-col items-start justify-start gap-2 rounded-lg border border-zinc-800 shadow-xl shadow-black/50">
        <iframe
          src="https://player.twitch.tv/?channel=revogabe&parent=revogabe.vercel.app"
          height="378"
          width="620"
          className="w-full rounded-lg lg:h-[620px]"
        ></iframe>
      </div>
    </main>
  )
}
