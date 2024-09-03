import './TitleBg.sass'
import ImgOpti from '../ImgOpti/ImgOpti'
import { ReactNode } from 'react'

export interface PropsTitleBg {
  className?: string,
  id?: string,
  children?: ReactNode,
  title: string,
  srcset?: string,
  src?: string,
  alt?: string,
  sizes?: string
}

function TitleBg({ className, id, children, title, srcset, src, alt, sizes }: PropsTitleBg) {
  return (
    <div id={id ?? ''} className={`title-bg ${className ?? ''}`}>

      {
        src ?
          <ImgOpti className='title-bg-img' srcset={srcset ?? ''} src={src} alt={alt ?? ''} sizes={sizes ?? ''} /> :
          ''
      }

      <h2 className='title-bg-h2'>{title}</h2>

      {children}
    </div>
  )
}

export default TitleBg
