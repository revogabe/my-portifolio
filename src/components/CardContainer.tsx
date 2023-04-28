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
  variant: 'default' | 'pr' | 'minimal'
  className?: string
  deploy?: string
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
  variant,
  className,
  deploy,
}: CardProps) => {
  return (
    <>
      {variant === 'default' && (
        <div
          className={`group flex h-max w-full flex-col items-start justify-center gap-6 rounded-lg  border border-zinc-800 bg-zinc-900/25 p-8 duration-200 ease-out${className}`}
        >
          {banner && (
            <div className="w-full overflow-hidden rounded-md">
              <Image
                src={banner}
                alt=""
                width={400}
                height={400}
                quality={100}
                className="-mb-3 h-32 w-full rounded-md object-cover object-top brightness-75 duration-300 ease-out hover:h-40 hover:scale-105 hover:brightness-110"
              />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-zinc-200">{title}</h1>
            <p
              title={description}
              className="line-clamp-2 text-base font-normal text-zinc-400"
            >
              {description}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 md:flex-row">
            <a
              href={link}
              draggable={false}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-3  text-base text-white duration-200 ease-out hover:bg-zinc-800 active:scale-95"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon width={20} height={20} /> Github
            </a>
            {deploy && (
              <Link
                className="flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-3  text-base text-white duration-200 ease-out hover:bg-zinc-800 active:scale-95"
                href={deploy}
              >
                🌐 Deploy
              </Link>
            )}
          </div>
        </div>
      )}
      {variant === 'pr' && (
        <div className="group flex h-max w-full cursor-pointer flex-col items-start justify-center gap-6 rounded-lg border  border-zinc-800 bg-zinc-900/25 p-8 duration-200 ease-out md:flex-row">
          <div className=" flex w-full flex-col items-start justify-center gap-6">
            <div className="flex items-center justify-start gap-4">
              {statusPr === 'open' && (
                <div
                  draggable={false}
                  className="flex w-max items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-2 text-sm font-bold text-white"
                >
                  <BranchOpen />
                  <p>Open</p>
                </div>
              )}
              {statusPr === 'merged' && (
                <div
                  draggable={false}
                  className="flex w-max items-center justify-center gap-2 rounded-full bg-purple-500 px-6 py-2 text-sm font-bold text-white"
                >
                  <BranchMerged />
                  <p>Merged</p>
                </div>
              )}
              <div
                draggable={false}
                className="flex w-max cursor-pointer items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm text-zinc-400 duration-200 ease-out hover:bg-zinc-800"
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
                  className="text-xl text-emerald-400 underline"
                  rel="noreferrer"
                >{`#${prNumber}`}</a>
              </h1>
              <p
                title={description}
                className="line-clamp-2 text-base font-normal text-zinc-400"
              >
                {description}
              </p>
            </div>
          </div>
          <div className="flex h-full w-full flex-row items-start justify-start gap-4 md:max-w-[220px] md:flex-col">
            <a
              href={link}
              draggable={false}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-3  text-base text-white duration-200 ease-out hover:bg-zinc-800 active:scale-95"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon width={20} height={20} /> Github
            </a>
            <button
              disabled
              className="flex w-full items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-3 text-base text-white duration-200 ease-out hover:bg-zinc-800 active:scale-95 disabled:opacity-50"
            >
              📖 Read more
            </button>
          </div>
        </div>
      )}
      {variant === 'minimal' && (
        <Link
          draggable={false}
          href={link}
          target="_blank"
          className={`group flex h-max w-full flex-col items-start justify-center gap-6 rounded-lg border  border-zinc-800 bg-zinc-900/25 px-6 py-3 duration-200 ease-out hover:bg-zinc-900 ${className}`}
        >
          <div className="flex-1">
            <h1 className="text-xl font-bold text-zinc-200 group-hover:text-emerald-400">
              {title}
            </h1>
            <p
              title={description}
              className="line-clamp-2 text-sm font-normal text-zinc-400"
            >
              {description}
            </p>
          </div>
        </Link>
      )}
    </>
  )
}
