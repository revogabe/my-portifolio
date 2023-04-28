import Image from 'next/image'

export const StacksOverlay = () => {
  return (
    <div className="relative flex w-full flex-col items-start justify-start gap-6 self-start">
      <h2 className=" text-xl font-bold text-emerald-500">🔥 Featured Stack</h2>
      <div className="grid h-full w-full flex-1 grid-cols-3 items-start justify-center gap-4 ">
        <div
          title="React"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out  hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/react.svg"
            width={200}
            height={200}
            className="h-full w-max  object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="React Logo"
          />
        </div>
        <div
          title="PrismaORM"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/prisma.svg"
            width={200}
            height={200}
            className="h-full w-max  object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="Prisma Logo"
          />
        </div>
        <div
          title="Next.js"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out  hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/next.svg"
            width={42}
            height={42}
            className="h-full w-max  object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="Next.js Logo"
          />
        </div>
        <div
          title="React Query"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out  hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/react-query.svg"
            width={42}
            height={42}
            className="h-full w-max  object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="React Query Logo"
          />
        </div>
        <div
          title="Tailwind CSS"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out  hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/tailwind.svg"
            width={42}
            height={42}
            className="h-full w-max object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="Tailwind CSS Logo"
          />
        </div>
        <div
          title="Node.js"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out  hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/node.svg"
            width={42}
            height={42}
            className="h-full w-max  object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="Node.js Logo"
          />
        </div>
        <div
          title="TypeScript"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out  hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/types.svg"
            width={42}
            height={42}
            className="h-full w-max  object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="TypeScript Logo"
          />
        </div>
        <div
          title="Go"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out  hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/golang.svg"
            width={42}
            height={42}
            className="h-full w-max  object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="Go Logo"
          />
        </div>
        <div
          title="MySQL"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out  hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/mysql.svg"
            width={42}
            height={42}
            className="h-full w-max  object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="MySQL Logo"
          />
        </div>
        <div
          title="Styled Components"
          className="group flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900  px-6 py-3 duration-150 ease-out  hover:scale-105 hover:bg-zinc-200"
        >
          <Image
            src="/logos-port/styled-components.svg"
            width={42}
            height={42}
            className="h-full w-max  object-contain invert saturate-0 duration-150 ease-out group-hover:invert-0 group-hover:saturate-100"
            alt="Styled Components Logo"
          />
        </div>
      </div>
    </div>
  )
}
