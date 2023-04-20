import { Star } from '@/components/Star'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mt-32 flex h-screen w-full flex-col items-center justify-start gap-4">
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
            <h1 className="text-3xl font-bold text-zinc-200">Daniel Gabriel</h1>
            <p className="group rounded-md text-base font-normal text-zinc-400 transition-all duration-200 ease-out hover:bg-zinc-900 hover:py-2 hover:px-4">
              I&apos;m a{' '}
              <span className="mr-1 group-hover:text-emerald-400">
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
    </main>
  )
}
