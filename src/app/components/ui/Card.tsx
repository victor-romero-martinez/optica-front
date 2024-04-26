import { capitalizer } from '@/libs/capitalizer';
import type { TData } from '@/types/card';
import Image from "next/image";

export default function Card({
  data,
  background,
  shadow,
  eager
}: {
  data: TData,
  background?: boolean,
  shadow?: boolean
  eager?: boolean
}) {
  const imgLoading = eager ? 'eager' : 'lazy';
  return (
    <article className={`h-ts1 teio cp br03 ofh ${shadow ? 'h-bs' : ""}`} style={{
      maxWidth: "240px",
      padding: ".6rem",
      backgroundColor: background ? 'var(--c-white)' : 'transparent'
    }}>
      <Image
        loading={imgLoading}
        src={data.src}
        alt={`Producto ${data.title}`}
        width={210}
        height={140}
        className='br01 ofc'
      />
      <div>
        <h4 className='fw6'>{capitalizer(data.title)}</h4>
        <div className='df fdr fww' style={{
          columnGap: '.5em'
        }}>
          {
            data.badge.map((b, idx) => (
              <span key={idx} className='fs06 fw2'>
                #{b}
              </span>
            ))
          }
        </div>
        <span className='db' style={{
          marginTop: ".6em"
        }}>
          <span className='fs2 fw6'>{data.price} </span>
          <span className='fs08 fw6 c-s'>{data.currency}</span>
        </span>
      </div>
    </article>
  )
};