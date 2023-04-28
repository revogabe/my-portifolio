'use client'
import { Command } from 'cmdk'
import { useEffect, useState } from 'react'

export const CommandMenu = () => {
  const [open, setOpen] = useState(false)

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.ctrlKey) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-start justify-center bg-zinc-950/75 px-4 pt-36 backdrop-blur-[1px]"
    >
      <Command className="flex w-full max-w-md flex-col items-start justify-start gap-3 rounded-lg border border-zinc-800 bg-zinc-950/90 p-4 text-zinc-300 backdrop-blur-sm">
        <Command.Input
          className="w-full rounded-lg border border-zinc-900 bg-transparent px-4 py-2 text-base font-bold text-zinc-300 placeholder:text-zinc-700"
          placeholder="What do you need?"
        />
        <Command.List className="w-full">
          <Command.Empty className="flex w-full items-center justify-center py-4 font-bold text-zinc-300">
            No results found.
          </Command.Empty>

          <Command.Group
            className="flex w-full flex-col gap-2 text-sm font-bold text-zinc-500"
            heading="Sessions"
          >
            <Command.Item className="mb-2 w-full rounded-md px-3 py-2 text-base duration-100 ease-out hover:bg-zinc-900 hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300">
              About me
            </Command.Item>
            <Command.Item className="mb-2 w-full rounded-md px-3 py-2 text-base duration-100 ease-out hover:bg-zinc-900 hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300">
              Projects
            </Command.Item>
            <Command.Item
              disabled
              className="mb-2 w-full rounded-md px-3 py-2 text-base opacity-30 duration-100 ease-out hover:bg-zinc-950 hover:text-zinc-800 "
            >
              Blog
            </Command.Item>
          </Command.Group>
          <Command.Group
            className="flex w-full flex-col gap-2 text-sm font-bold text-zinc-500"
            heading="Social"
          >
            <Command.Item className="mb-2 w-full rounded-md px-3 py-2 text-base duration-100 ease-out hover:bg-zinc-900 hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300">
              Linkedin
            </Command.Item>
            <Command.Item className="mb-2 w-full rounded-md px-3 py-2 text-base duration-100 ease-out hover:bg-zinc-900 hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300">
              Github
            </Command.Item>
            <Command.Item className="mb-2 w-full rounded-md px-3 py-2 text-base duration-100 ease-out hover:bg-zinc-900 hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300">
              Twitter
            </Command.Item>
            <Command.Item className="mb-2 w-full rounded-md px-3 py-2 text-base duration-100 ease-out hover:bg-zinc-900 hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300">
              Email
            </Command.Item>
            <Command.Item className="mb-2 w-full rounded-md px-3 py-2 text-base duration-100 ease-out hover:bg-zinc-900 hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300">
              Twitch
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </Command.Dialog>
  )
}
