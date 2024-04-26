import { capitalizer } from '@/libs/capitalizer';
import { srcSet, testimony, title } from '@/locales/es-ES/home/testimony.json';
import Section from "../../ui/Section";
import TestimonyCarousel from '../../ui/embla-testimony/TestimonyCarousel';
import './testimony.css';

export default function Testimony() {
  return (
    <Section>
      <div className='pr br03 testimony__background' style={{
        backgroundImage: `linear-gradient(to right, transparent 55%, var(--c-white) 65%), url(${srcSet.medium})`
      }}>
        <div className='pa p-m df jcsb aic w-full'>
          <div className="testimony__title-container">
            <h2 className='c-w fw8 testimony__title'>
              {capitalizer(title)}
            </h2>
          </div>
          <div className='b-t br03 testimony__customer-container'>
            <div className="br01 testimony__customer">
              <TestimonyCarousel data={testimony} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
};