import { capitalizer } from "@/libs/capitalizer"

export default function Section(
  {
    id,
    title,
    children,
    className

  }: Readonly<{
    id?: string,
    title?: string,
    children: React.ReactNode,
    className?: string
  }>) {
  return (
    <section id={id} className={`container pb3${className ? " " + className : ''}`}>
      {title && (<h2 className='tac fw7 pbt2'>{capitalizer(title)}</h2>)}
      {children}
    </section>
  )
};