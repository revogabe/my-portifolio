import { LanguageAbout } from '@/components/LanguageAbout'
import { Sidebar } from '@/components/Sidebar'

export default function About() {
  return (
    <main className="mb-24  mt-32 flex h-full w-full items-start justify-between gap-6 ">
      <div className="hidden flex-1 md:flex">
        <Sidebar />
      </div>
      <div className="prose prose-invert w-full">
        <LanguageAbout />
      </div>
    </main>
  )
}
