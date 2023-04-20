import { SVGProps } from 'react'

export function BranchOpen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 5a3 3 0 0 1-2.5 2.959v4.082a3 3 0 1 1-1 0V7.96A3 3 0 1 1 8 5Zm3.854 1.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L10.707 4H12.5A3.5 3.5 0 0 1 16 7.5v4.67a3.001 3.001 0 1 1-1-.17V7.5A2.5 2.5 0 0 0 12.5 5h-1.793l1.147 1.146a.5.5 0 0 1 0 .708Z"
      ></path>
    </svg>
  )
}