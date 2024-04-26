'use client'
import type { TTestimony } from '@/types/testimony-card'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { DotButton, useDotButton } from '../embla/Dot'

import './testimony-carousel.css'

export default function TestimonyCarousel({ data }: { data: Array<TTestimony> }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div className='embla-testimony' ref={emblaRef}>
      <article className="embla__container-testimony">
        {
          data.map((t, idx) => (
            <div key={idx} className="embla__slide-testimony">
              <p className='fw4'>{t.message}</p>
              <cite className='db tac pb1 fs08'>@{t.name}</cite>
              <figure className='tac'>
                <Image src={t.avatar} alt={`Avatar de ${t.name}`} width={32} height={32} />
              </figure>
            </div>
          ))
        }
      </article>
      <div className="df jcc dot-testimony">
        {scrollSnaps.map((_, idx) => (
          <DotButton
            key={idx}
            type='button'
            title={idx === selectedIndex ? 'Actual' : "Siguiente"}
            onClick={() => onDotButtonClick(idx)}
            className={'embla__dot'.concat(
              idx === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div>
  )
};