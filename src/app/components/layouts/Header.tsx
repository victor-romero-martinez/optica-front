'use client'
/* eslint-disable @next/next/no-img-element */
import { capitalizer } from '@/libs/capitalizer';
import { auth, logo, navbar } from '@/locales/es-ES/header.json';
import { CartIcon, CloseSquareIcon, MenuIcon, UserIcon } from '../icons';
import BtnWIcon from '../ui/BtnWIcon';

import { useState } from 'react';
import './header.css';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu((prev) => !prev)
  };

  return (
    <>
      <header className='container df mb1'>
        <img
          loading='eager'
          alt={logo.alt}
          srcSet={`
              ${logo.srcSet.small} 32w,
              ${logo.srcSet.medium} 64w
            `}
          sizes="(max-width: 599px) 32px, 64px"
          className='logo'
        />
        <div className='w-full df jcfe aic g1'>
          <DesktopNav />
          <div className="df g1">
            <BtnWIcon icon={<UserIcon width={18} height={18} />} text={auth.signin} />
            <BtnWIcon icon={<CartIcon width={18} height={18} />} text={`${auth.cart} (1)`} />
            <button
              type='button'
              title='Open menu'
              aria-label='open'
              className='h-c-b_p teio cp menu-btn'
              onClick={handleMenu}
            >
              <MenuIcon width={18} height={18} />
            </button>
          </div>
        </div>
      </header>
      <MobileNav isOpen={showMenu} click={handleMenu} />
    </>
  )
};

const DesktopNav = () => {
  return (
    <nav className='navbar__desk'>
      {
        navbar.map((n, idx) => (
          <a href={n.url} key={idx} className='c-p h-c-b_p teio fw6'>{capitalizer(n.name)}</a>
        ))
      }
    </nav>
  )
};

const MobileNav = ({ isOpen, click }: { isOpen: boolean, click: React.MouseEventHandler<SVGSVGElement | HTMLAnchorElement> }) => {

  return (
    <dialog data-open={isOpen} className='teio'>
      <CloseSquareIcon className='pa close__icon' onClick={click} />
      <nav className='df fdc g1 tac fs5'>
        {
          navbar.map((n, idx) => (
            <a href={n.url} key={idx} className='c-p h-c-b_p teio fw6' onClick={click}>{capitalizer(n.name)}</a>
          ))
        }
      </nav>
    </dialog>
  )
};
