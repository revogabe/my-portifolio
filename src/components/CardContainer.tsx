import Image from 'next/image'
import Link from 'next/link'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { BranchOpen } from './icons/branch-open'
import { LibIcon } from './icons/lib'
import { BranchMerged } from './icons/branch-merged'

type CardProps = {
  title: string
  description: string
  banner?: string
  link: string
  prNumber?: string
  libLink?: string
  libName?: string
  statusPr?: 'open' | 'merged'
  code?: string
  variant: 'default' | 'pr' | 'minimal'
  className?: string
}

export const CardContainer = ({
  title,
  banner,
  description,
  link,
  prNumber,
  statusPr,
  libLink,
  libName,
  code,
  variant,
  className,
}: CardProps) => {
  return (
    <>
      {variant === 'default' && (
        <div
          className={`group h-max flex flex-col gap-6 border bg-zinc-900/25 duration-200 ease-out  border-zinc-800 py-8 rounded-lg px-8 items-start justify-center w-full ${className}`}
        >
          {banner && (
            <div className="w-full overflow-hidden">
              <Image
                src={banner}
                alt=""
                width={400}
                height={400}
                className="w-full h-32 rounded-md hover:scale-105 duration-300 ease-out hover:brightness-110 brightness-75 -mb-3 object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-zinc-200">{title}</h1>
            <p
              title={description}
              className="text-base line-clamp-2 font-normal text-zinc-400"
            >
              {description}
            </p>
          </div>
          <div className="flex md:flex-row flex-col w-full gap-3">
            <a
              href={link}
              draggable={false}
              className="flex w-full bg-zinc-900 hover:bg-zinc-800 duration-200 ease-out px-4 rounded-md active:scale-95  py-3 items-center justify-center gap-2 text-base text-white"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon width={20} height={20} /> Github
            </a>
            <Link
              className="flex w-full bg-zinc-900 hover:bg-zinc-800 duration-200 ease-out px-4 rounded-md active:scale-95  py-3 items-center justify-center gap-2 text-base text-white"
              href="#"
            >
              📖 Read more
            </Link>
          </div>
        </div>
      )}
      {variant === 'pr' && (
        <div className="group cursor-pointer h-max flex md:flex-row flex-col gap-6 border bg-zinc-900/25 duration-200 ease-out  border-zinc-800 py-8 rounded-lg px-8 items-start justify-center w-full">
          <div className=" w-full flex flex-col gap-6 items-start justify-center">
            <div className="flex gap-4 items-center justify-start">
              {statusPr === 'open' && (
                <div
                  draggable={false}
                  className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-emerald-500 px-6 w-max py-2 rounded-full"
                >
                  <BranchOpen />
                  <p>Open</p>
                </div>
              )}
              {statusPr === 'merged' && (
                <div
                  draggable={false}
                  className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-purple-500 px-6 w-max py-2 rounded-full"
                >
                  <BranchMerged />
                  <p>Merged</p>
                </div>
              )}
              <div
                draggable={false}
                className="flex items-center justify-center gap-2 text-sm text-zinc-400 hover:bg-zinc-800 duration-200 ease-out cursor-pointer w-max bg-zinc-900 px-4 rounded-md py-2"
              >
                <LibIcon />
                <a
                  draggable={false}
                  href={libLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {libName}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <h1 className="text-2xl font-bold text-zinc-200">
                {title}{' '}
                <a
                  href={link}
                  target="_blank"
                  className="underline text-emerald-400 text-xl"
                  rel="noreferrer"
                >{`#${prNumber}`}</a>
              </h1>
              <p
                title={description}
                className="text-base line-clamp-2 font-normal text-zinc-400"
              >
                {description}
              </p>
            </div>
            <code className="flex w-full items-center justify-start duration-300 ease-out text-white bg-zinc-900 p-6 rounded-md">
              {code}
            </code>
          </div>
          <div className="flex md:flex-col h-full items-start justify-start flex-row w-full md:max-w-[220px] gap-4">
            <a
              href={link}
              draggable={false}
              className="flex w-full bg-zinc-900 hover:bg-zinc-800 duration-200 ease-out px-4 rounded-md active:scale-95  py-3 items-center justify-center gap-2 text-base text-white"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon width={20} height={20} /> Github
            </a>
            <Link
              className="flex w-full bg-zinc-900 hover:bg-zinc-800 duration-200 ease-out px-4 rounded-md active:scale-95  py-3 items-center justify-center gap-2 text-base text-white"
              href="#"
            >
              📖 Read more
            </Link>
          </div>
        </div>
      )}
      {variant === 'minimal' && (
        <Link
          draggable={false}
          href={link}
          className={`group hover:bg-zinc-900 h-max flex flex-col gap-6 border bg-zinc-900/25 duration-200 ease-out  border-zinc-800 py-3 rounded-lg px-6 items-start justify-center w-full ${className}`}
        >
          <div className="flex-1">
            <h1 className="text-xl font-bold text-zinc-200 group-hover:text-emerald-400">
              {title}
            </h1>
            <p
              title={description}
              className="text-sm line-clamp-2 font-normal text-zinc-400"
            >
              {description}
            </p>
          </div>
        </Link>
      )}
    </>
  )
}
