'use client'
import type { TData } from '@/types/card'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Card from '../Card'
import { DotButton, useDotButton } from './Dot'

type PropType = {
  slides: TData[],
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 'auto' }, [Autoplay()])


  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((d, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Card eager={index < 3} background data={d} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            type="button"
            title={index === selectedIndex ? 'Actual' : "Siguiente"}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </section>
  )
}

export default EmblaCarousel
