/* eslint-disable @next/next/no-img-element */
import { style, title } from '@/locales/es-ES/home/glasses-style.json';
import Section from "../../ui/Section";
import './glass-style.css';

export default function GlassStyle() {
  return (
    <Section title={title} id='style'>
      <div className='glass__container'>
        {
          style.map(d => (
            <article key={d.id} className='df jcc aic h-ts1 h-bs teio br03' >
              <a href={d.href}>
                <p className='tac ttu fw6 pb02'>{d.name}</p>
                <img
                  alt={d.alt}
                  srcSet={
                    `${d.srcSet.small} 120w,
                      ${d.srcSet.medium} 160w`
                  }
                  sizes="(max-width: 900px) 120px, 160px"
                  style={{
                    aspectRatio: '16/9'
                  }}
                />
              </a>
            </article>
          ))
        }
      </div>
    </Section>
  )
};
