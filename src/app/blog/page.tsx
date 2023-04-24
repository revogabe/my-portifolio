import { CardContainer } from '@/components/CardContainer'

export default function Blog() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <CardContainer
        link="/"
        variant="default"
        title="Work in progress"
        description="This page is under construction, but you can see the progress in the
        repository below."
      />
    </main>
  )
}
