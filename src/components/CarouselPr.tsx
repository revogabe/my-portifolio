/* eslint-disable tailwindcss/no-custom-classname */
'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CardContainer } from './CardContainer'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-8 ">
          <div className="embla__slide ml-8 min-w-full">
            <CardContainer
              title="feat: add default value prop"
              prNumber="123"
              libName="pacocoursey / cmdk"
              statusPr="open"
              libLink="https://github.com/pacocoursey/cmdk"
              description="In this PR, I added the optional prop of default value, which, when passing the item's value to the default value, makes this item active. Otherwise, the function of activating the first item on the list continues."
              link="https://github.com/pacocoursey/cmdk/pull/123"
              variant="pr"
            />
          </div>
          <div className="embla__slide min-w-full">
            <CardContainer
              title="Translate add-react-to-an-existing-project"
              prNumber="659"
              libName="reactjs / pt-br.react.dev"
              statusPr="merged"
              libLink="https://github.com/reactjs/pt-br.react.dev"
              description="In this PR I am translating the page that I was designated called 'add-react-to-an-existing-project' I also saw that in the open issue this page is described with the old name."
              link="https://github.com/reactjs/pt-br.react.dev/pull/659"
              variant="pr"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
