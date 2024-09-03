import './ImgOpti.sass'

export interface PropsImgOpti {
  className?: string,
  id?: string,
  srcset: string,
  src: string,
  alt: string,
  sizes: string
}

function ImgOpti({ className, id, srcset, src, alt, sizes }: PropsImgOpti) {
  return (
    <img id={id ?? ''} className={`card-img  ${className ?? ''}`}
      srcSet={srcset}
      sizes={sizes}
      src={src}
      alt={alt}
      width={1024} height={512}>
    </img>
  )
}

export default ImgOpti
