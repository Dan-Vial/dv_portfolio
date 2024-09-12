import './Rating.sass'
import star from '@assets/star.svg'
import star_colored from '@assets/star_colored.svg'
import { ReactNode } from 'react'

export interface PropsRating {
  className?: string,
  id?: string,
  children?: ReactNode,
  rating: number
}

function Rating({ className, id, children, rating }: PropsRating) {

  const stars = (nb: number): JSX.Element[] => {
    const content = []
    for (let i = 0; i < 5; i++) {
      if (i < nb) {
        content.push(<img key={i} className='rating-star' src={star_colored} alt='rating-star' />)
      } else {
        content.push(<img key={i} className='rating-star' src={star} alt='rating-star' />)
      }
    }
    return content
  }

  return (
    <div id={id} className={`rating ${className ?? ''}`}>
      {stars(rating)}
      {children ?? ''}
    </div>
  )
}

export default Rating