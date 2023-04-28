import { CardContainer } from '@/components/CardContainer'
import { EmblaCarousel } from '@/components/CarouselPr'
import { HandIcon } from '@radix-ui/react-icons'

export default function Projects() {
  return (
    <main className="mt-32 flex min-h-screen w-full flex-col items-start justify-center gap-12 pb-32">
      <div className="pointer-events-none fixed bottom-0 z-30 h-32 w-full bg-gradient-to-t from-zinc-950 to-transparent" />
      <div className="w-full overflow-hidden ">
        <div
          draggable={false}
          className="mb-4 flex w-max cursor-default items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm text-zinc-400 duration-200 ease-out hover:bg-zinc-800"
        >
          <HandIcon width={16} height={16} />
          <p className="select-none">Drag to The Side</p>
        </div>
        <EmblaCarousel />
      </div>
      <div className="h-px w-full bg-zinc-900" />
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex w-full flex-col items-center justify-start gap-6">
          <CardContainer
            title="Br Devstreamers V2"
            description="redesign of the project conceived by falivjmendes which consists of bringing together the lives of br developers"
            link="https://github.com/revogabe/br-devstreamers-v2"
            deploy="https://br-devstreamers-v2.vercel.app/"
            variant="default"
          />
          <CardContainer
            title="LoopyGo"
            description="Loopy is a completely Open Source Duolingo-style programming learning platform."
            banner="/looppy.png"
            link="https://github.com/LoopyGO/loopy-web"
            deploy="https://loopygo.app/"
            variant="default"
          />
          <CardContainer
            title="Frontend Wheelo"
            description="Frontend for a technical test that aimed to be a registration and management of cars and jwt authentication"
            link="https://github.com/revogabe/front-wheelo"
            variant="default"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-start gap-6">
          <CardContainer
            title="JobsDev GO"
            description="This project is an API in Golang and Frontend in Next.js with the intention of studying more about Go and also helping the community with the job search in the market."
            banner="/jobsdev.png"
            link="https://github.com/revogabe/go-jobsdev"
            deploy="https://jobsdev-go.vercel.app/"
            variant="default"
          />
          <CardContainer
            title="Backend Wheelo"
            description="Node backend for a technical test that aimed to be a registration and management of cars and jwt authentication"
            link="https://github.com/revogabe/backend-wheelo"
            variant="default"
          />
          <CardContainer
            title="My Portifolio"
            description="My own portfolio about me and my projects made in next.js and mongoDB"
            link="https://github.com/revogabe/my-portifolio"
            deploy="https://revogabe.vercel.app/"
            variant="default"
          />
        </div>
      </div>
    </main>
  )
}
