import './Carrousel.sass'
import { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'
import ImgOpti, { PropsImgOpti } from '../ImgOpti/ImgOpti'


function Carrousel({ pictures }: { pictures: PropsImgOpti[] }) {
  const [positionInArray, setPositionInArray] = useState<number>(0)
  const [debouncedValue, setDebouncedValue] = useState<boolean>(true)


  function changeLeft(): void {
    if (positionInArray === 0) {
      setPositionInArray(pictures.length - 1)
    } else {
      setPositionInArray(positionInArray - 1)
    }
  }

  function changeRight(): void {
    if (positionInArray === pictures.length - 1) {
      setPositionInArray(0)
    } else {
      setPositionInArray(positionInArray + 1)
    }
  }

  function slide(pos: number): string | undefined {
    if (pos === positionInArray) return 'carrousel-slide-img__selected'

    if (positionInArray === 1 && pos === 0) return 'carrousel-slide-img__left'
    if (positionInArray === pictures.length - 2 && pos === pictures.length - 1) return 'carrousel-slide-img__right carrousel-slide-img__down'

    if (positionInArray === 0 && pos === pictures.length - 1) return 'carrousel-slide-img__left'
    if (positionInArray === pictures.length - 1 && pos === 0) return 'carrousel-slide-img__right carrousel-slide-img__up'

    if (pos > positionInArray) {
      if (pos === pictures.length - 1 || pos === 0) return 'carrousel-slide-img__left carrousel-slide-img__opac'
      return 'carrousel-slide-img__right'
    }

    if (pos < positionInArray) {
      if (pos === pictures.length - 1 || pos === 0) return 'carrousel-slide-img__right carrousel-slide-img__opac'
      return 'carrousel-slide-img__left'
    }
  }

  function debounce(callback: VoidFunction, delay = 1000) {
    let debounceInterval: NodeJS.Timeout
    if (debouncedValue) {
      setDebouncedValue(false)
      callback()
      debounceInterval = setInterval(() => {
        setDebouncedValue(true)
        clearInterval(debounceInterval)
      }, delay)
    }
  }

  useEffect(() => {
    if (pictures.length > 1) {

      const animInterval = setInterval(() => {
        changeRight()
      }, 5000)

      return () => {
        clearInterval(animInterval)
      }
    }
  }, [positionInArray])

  return (
    <div className='carrousel'>
      {
        pictures.length === 1 ? '' :
          <>
            <div className='carrousel-input carrousel-input__left' onClick={() => debounce(changeLeft)}>
              <IconContext.Provider value={{}}>
                <IoIosArrowBack />
              </IconContext.Provider>
            </div>

            <div className='carrousel-numpicture'>{`${positionInArray + 1}/${pictures.length}`}</div>

            <div className='carrousel-input carrousel-input__right' onClick={() => debounce(changeRight)}>
              <IconContext.Provider value={{}}>
                <IoIosArrowForward />
              </IconContext.Provider>
            </div>
          </>
      }

      <div className='carrousel-slide' >
        {
          pictures.map((picture, index) =>
            <ImgOpti className={`carrousel-slide-img ${slide(index)}`} key={index} src={picture.src} alt={picture.alt} srcset={picture.srcset} sizes={'90vw'}></ImgOpti>
            // <img className={`carrousel-slide-img ${slide(index)}`} key={index} src={picture} alt={(picture.split('/')).pop()} />
          )
        }
      </div>
    </div>
  )
}

export default Carrousel
