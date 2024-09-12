import { ReactNode, useId, useState } from 'react'
import './Collapse.sass'
import { IoIosArrowUp } from 'react-icons/io'
import { IconContext } from 'react-icons'

export interface PropsCollapses {
  className?: string,
  id?: string,
  children?: ReactNode,
  name: string,
  text: string | JSX.Element | JSX.Element[]
}

function Collapses({ name, text }: PropsCollapses) {
  const collapsesId: string = useId()
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <div className='collapse'>
        <div className='collapse-bar'>
          <div>{name}</div>



          <IconContext.Provider value={{}}>
            <button className={visible ? 'collapse-btn collapse-btn__rot' : 'collapse-btn'} onClick={() => setVisible(!visible)}
              aria-expanded={visible}
              aria-controls={`collapse-${collapsesId}`} aria-label="Collapse arrow">
              <IoIosArrowUp />

            </button>
          </IconContext.Provider>
        </div>

        <div className={visible ? 'collapse-content collapse-content__anim' : 'collapse-content'}>
          <div id={`collapse-${collapsesId}`} className='collapse-content-text'>
            <div className='collapse-content-text-margin'>{text}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collapses
