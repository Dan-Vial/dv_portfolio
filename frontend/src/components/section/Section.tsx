import './Section.sass'
import { ReactNode } from 'react'

export interface PropsSection {
  className?: string,
  id?: string,
  children?: ReactNode,
  num: number,
  title?: string
}

function Section({ id, className, children, num, title }: PropsSection) {

  function numIsPair(num: number): string {
    if (num & 1) {
      return 'section_i'
    } else {
      return 'section_p'
    }
  }

  return (
    <section id={id} className={`section ${numIsPair(num)}`} >
      <h2>{title}</h2>
      <div className={`section-content ${className ?? ''}`}>
        {children}
      </div>
    </section>
  )
}

export default Section
