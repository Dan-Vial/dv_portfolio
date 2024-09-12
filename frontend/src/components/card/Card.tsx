import './Card.sass'
import { Link } from 'react-router-dom'
import ImgOpti, { PropsImgOpti } from '@components/ImgOpti/ImgOpti'

export interface cardProps {
  href?: string,
  dataId?: number,
  title: string,
  img: PropsImgOpti
}

function Card({ href, dataId, title, img }: cardProps) {
  return (
    <Link to={href as string} data-id={dataId} className='card card_click'>
      <figure className='card-figure'>
        <ImgOpti src={img.src} srcset={img.srcset} sizes={img.sizes} alt={img.alt} />
        <figcaption className='card-figcaption'><p>
          {title}
        </p></figcaption>
      </figure>
    </Link >
  )
}

export default Card
