/* eslint-disable @next/next/no-img-element */
import { category, title } from '@/locales/es-ES/home/discover.json';
import Section from "../../ui/Section";
import './discover.css';

export default function Discover() {
  return (
    <Section title={title} id='collections'>
      <div className="df fdr jcc fww g1">
        {
          category.map(c => (
            <article key={c.id} className='discover__article br03 ofh'>
              <img
                loading='lazy'
                decoding='async'
                alt={c.alt}
                sizes="(max-width: 400px) 240px, 300px"
                srcSet={
                  `${c.srcSet.medium} 300w,
                   ${c.srcSet.small} 240w`
                }
                style={{
                  aspectRatio: '3/2'
                }}
                className='teio'
              />
              <p className="tac ttu fw6 pb1">{c.name}</p>
            </article>
          ))
        }
      </div>
    </Section>
  )
};