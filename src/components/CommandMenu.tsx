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
      className="z-50 fixed top-0 px-4 bg-zinc-950/75 backdrop-blur-[1px] left-0 pt-36 w-screen h-screen flex items-start justify-center"
    >
      <Command className="text-zinc-300 flex flex-col items-start justify-start gap-3 w-full max-w-md bg-zinc-950/90 border border-zinc-800 backdrop-blur-sm p-4 rounded-lg">
        <Command.Input
          className="w-full bg-transparent border border-zinc-900 px-4 py-2 rounded-lg text-zinc-300 text-base placeholder-zinc-700 font-bold"
          placeholder="What do you need?"
        />
        <Command.List className="w-full">
          <Command.Empty className="w-full text-zinc-300 font-bold items-center justify-center flex py-4">
            No results found.
          </Command.Empty>

          <Command.Group
            className="text-sm font-bold text-zinc-500 w-full flex flex-col gap-2"
            heading="Sessions"
          >
            <Command.Item className="hover:bg-zinc-900 w-full px-3 text-base hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300 py-2 mb-2 rounded-md duration-100 ease-out">
              About me
            </Command.Item>
            <Command.Item className="hover:bg-zinc-900 w-full px-3 text-base hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300 py-2 mb-2 rounded-md duration-100 ease-out">
              Projects
            </Command.Item>
            <Command.Item
              disabled
              className="opacity-30 w-full px-3 text-base hover:bg-zinc-950 hover:text-zinc-800 duration-100 ease-out py-2 mb-2 rounded-md "
            >
              Blog
            </Command.Item>
          </Command.Group>
          <Command.Group
            className="text-sm font-bold text-zinc-500 w-full flex flex-col gap-2"
            heading="Social"
          >
            <Command.Item className="hover:bg-zinc-900 w-full px-3 text-base hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300 py-2 mb-2 rounded-md duration-100 ease-out">
              Linkedin
            </Command.Item>
            <Command.Item className="hover:bg-zinc-900 w-full px-3 text-base hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300 py-2 mb-2 rounded-md duration-100 ease-out">
              Github
            </Command.Item>
            <Command.Item className="hover:bg-zinc-900 w-full px-3 text-base hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300 py-2 mb-2 rounded-md duration-100 ease-out">
              Twitter
            </Command.Item>
            <Command.Item className="hover:bg-zinc-900 w-full px-3 text-base hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300 py-2 mb-2 rounded-md duration-100 ease-out">
              Email
            </Command.Item>
            <Command.Item className="hover:bg-zinc-900 w-full px-3 text-base hover:text-zinc-300 active:bg-zinc-900 active:text-zinc-300 py-2 mb-2 rounded-md duration-100 ease-out">
              Twitch
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </Command.Dialog>
  )
}
