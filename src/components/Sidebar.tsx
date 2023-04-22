import { LinkSide } from './LinkSide'

export function Sidebar() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[240px]">
      <li className="flex flex-col gap-2 items-start justify-start">
        <LinkSide href="/about#about">About me</LinkSide>
        <LinkSide href="/about#journey">Journey</LinkSide>
        <LinkSide href="/about#experience">Experience</LinkSide>
        <LinkSide href="/about#dreams">Dreams</LinkSide>
        <LinkSide href="/about#extra">Extra</LinkSide>
      </li>
    </div>
  )
}
