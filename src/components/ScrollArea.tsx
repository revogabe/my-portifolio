'use client'
import React from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { CardContainer } from './CardContainer'
import Link from 'next/link'
import { DashboardIcon } from '@radix-ui/react-icons'

export const ScrollContainer = () => {
  return (
    <ScrollArea.Root className="w-full h-full overflow-hidden px-4 ">
      <ScrollArea.Viewport className="select-none w-full h-full rounded pb-16 pt-4">
        <CardContainer
          className="mb-4"
          title="LoopyGo"
          description="Loopy is a completely Open Source Duolingo-style programming learning platform."
          link="#"
          variant="minimal"
        />
        <CardContainer
          className="mb-4"
          title="LoopyGo"
          description="Loopy is a completely Open Source Duolingo-style programming learning platform."
          link="#"
          variant="minimal"
        />
        <CardContainer
          className="mb-4"
          title="LoopyGo"
          description="Loopy is a completely Open Source Duolingo-style programming learning platform."
          link="#"
          variant="minimal"
        />
        <CardContainer
          className="mb-4"
          title="LoopyGo"
          description="Loopy is a completely Open Source Duolingo-style programming learning platform."
          link="#"
          variant="minimal"
        />
        <div className="flex w-full items-center justify-center">
          <Link
            href="/projects"
            className="text-zinc-600 font-bold flex items-center justify-center py-3 mt-4 rounded-lg px-4 gap-2 bg-zinc-900/25 hover:bg-zinc-900 hover:text-emerald-400 duration-200 ease-out active:scale-95"
          >
            <DashboardIcon width={20} height={20} />
            See more
          </Link>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-blackA8" />
    </ScrollArea.Root>
  )
}
