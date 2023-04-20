import { LanguageAbout } from '@/components/LanguageAbout'
import { Sidebar } from '@/components/Sidebar'

export default function About() {
  return (
    <main className="w-full h-full mt-32 gap-6 px-6 mb-24 flex items-start justify-between">
      <div className="flex flex-1">
        <Sidebar />
      </div>
      <div className="prose prose-invert w-full">
        <LanguageAbout />
      </div>
    </main>
  )
}
