/* eslint-disable @next/next/no-img-element */
import { capitalizer } from '@/libs/capitalizer';
import { auth, logo, navbar } from '@/locales/es-ES/header.json';
import { CartIcon, UserIcon } from '../icons';
import BtnWIcon from '../ui/BtnWIcon';

export default function Header() {
  return (
    <header className='container df mb1'>
      <img
        loading='eager'
        alt={logo.alt}
        srcSet={`
            ${logo.srcSet.small} 32w,
            ${logo.srcSet.medium} 64w
          `}
        sizes="(max-width: 599px) 32px, 64px"
        style={{
          aspectRatio: "1/1"
        }} />

      <div className='w-full df jcfe aic'>
        <nav className='df g1'>
          {
            navbar.map((n, idx) => (
              <a href={n.url} key={idx} className='c-p h-c-b_p teio fw6'>{capitalizer(n.name)}</a>
            ))
          }
        </nav>
        <BtnWIcon icon={<UserIcon width={18} height={18} />} text={auth.signin} />
        <BtnWIcon icon={<CartIcon width={18} height={18} />} text={`${auth.cart} (1)`} />
      </div>
    </header>
  )
};

