import { CardContainer } from '@/components/CardContainer'
import { EmblaCarousel } from '@/components/CarouselPr'
import { HandIcon } from '@radix-ui/react-icons'

export default function Projects() {
  return (
    <main className="mt-32 pb-32 flex gap-12 flex-col min-h-screen w-full items-start justify-center">
      <div className="fixed bottom-0 z-30 pointer-events-none bg-gradient-to-t to-transparent from-zinc-950 w-full h-32" />
      <div className="w-full overflow-hidden ">
        <div
          draggable={false}
          className="flex cursor-default items-center justify-center gap-2 text-sm text-zinc-400 hover:bg-zinc-800 duration-200 ease-out w-max bg-zinc-900 px-4 rounded-md py-2 mb-4"
        >
          <HandIcon width={16} height={16} />
          <p className="select-none">Drag to The Side</p>
        </div>
        <EmblaCarousel />
      </div>
      <div className="h-px w-full bg-zinc-900" />
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="w-full flex flex-col items-center justify-start gap-6">
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            banner="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            banner="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            banner="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            link="https://github.com/LoopyGO"
            variant="default"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-6">
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            banner="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            banner="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            banner="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            link="https://github.com/LoopyGO"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            link="https://github.com/LoopyGO"
            variant="default"
          />
        </div>
      </div>
    </main>
  )
}
