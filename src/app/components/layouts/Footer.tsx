import { capitalizer } from '@/libs/capitalizer'
import { brands, customerCare, help, quickLinks, year } from '@/locales/es-ES/footer.json'
import type { TFooterSection } from '@/types/footer-section'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../icons'
import './footer.css'

function FooterSection({ section }: { section: TFooterSection }) {
  return (
    <div className='df jcc'>
      <div>
        <h4>{capitalizer(section.title)}</h4>
        <ul>
          {section.links.map((l, idx) => (
            <li key={idx} className='fs08 h-c-b_p teio'>
              <a href={l.url} target="_blank" rel="noopener noreferrer">{capitalizer(l.title)}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className='container mb1'>
      <div className='footer__inner'>
        <FooterSection section={quickLinks} />
        <FooterSection section={brands} />
        <FooterSection section={customerCare} />
        <div className='df jcc'>
          <div>
            <div className='help'>
              <h4>{capitalizer(help.title)}</h4>
              <ul>
                <li className='fs08'>
                  <span>{help.tell.codeCountry}</span>{help.tell.number}
                </li>
                <li className='fs08'>
                  {help.email.address}
                </li>
                <li className='fs08'>
                  {help.direction.address}
                </li>
              </ul>
            </div>
            <div>
              <ul className="df fdr g1">
                <li><FacebookIcon width={18} height={18} /></li>
                <li><InstagramIcon width={18} height={18} /></li>
                <li><TwitterIcon width={18} height={18} /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className='w-full db tac fs06 c-s'>{year}</span>
    </footer>
  )
};