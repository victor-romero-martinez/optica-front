'use client'
import { banner_top } from '@/locales/es-ES/bannerPromo.json';
import Link from "next/link";
import { CSSProperties, useState } from 'react';
import { CloseSquareIcon } from '../icons';

export default function BannerPromoDiscount() {
  const [show, setShow] = useState(true)

  const hiddenHandler = () => setShow(false)
  return (
    <>
      {
        show && (
          <div className='df fdr aic pr pb02 b-p'>
            <div className="w-full df jcc aic c-w fs08 banner-top">
              <Link href={banner_top.url}>{banner_top.title}</Link>
            </div>
            <button type='button' className='cp df aic c-w pa' title='Cerrar banner' aria-label='cerrar' style={btn} onClick={hiddenHandler}>
              <CloseSquareIcon width={20} height={20} />
            </button>
          </div>
        )
      }
    </>
  )
};

const btn: CSSProperties = {
  right: "2rem",
}