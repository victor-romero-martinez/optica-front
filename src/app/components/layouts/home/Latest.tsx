import '@/app/components/ui/embla/embla.css';
import { capitalizer } from '@/libs/capitalizer';
import data from '@/locales/es-ES/home/latest.json';
import mockCard from '@/locales/es-ES/mockCard.json';
import Section from "../../ui/Section";
import Carousel from '../../ui/embla/Carousel';

import './latest.css';

export default function Latest() {
  return (
    <Section>
      <div className='pr br03 latest__section'>
        <div className='pa p-m df w-full'>

          <div className='f1'>
            <span className='ttu fs08 c-s'>{data.subtitle}</span>
            <h1 className='ttu fs20 latest__title'>
              {data.title}
            </h1>
            <p className='pb1 c-p latest__description'>
              {capitalizer(data.description)}
            </p>
            <a href={data.callAction.url} className='db w-fit h-ts1 teio ttu pb04 pi1 b-s c-w fw6 br03'>{data.callAction.title}</a>
          </div>

          <Carousel slides={mockCard} />
        </div>
      </div>
    </Section>
  )
};