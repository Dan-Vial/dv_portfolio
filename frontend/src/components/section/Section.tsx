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
      if (num === 3) return 'section_i_1'
      if (num === 5) return 'section_i_2'
      return 'section_i'
    } else {
      return 'section_p'
    }
  }

  return (
    <section id={id} className={`section ${numIsPair(num)}`} >
      {title ? <h2 className='title'>{title}</h2> : ''}
      <div className={`section-content ${className ?? ''}`}>
        {children}
      </div>
    </section>
  )
}

export default Section
