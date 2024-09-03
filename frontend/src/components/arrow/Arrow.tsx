import './Arrow.sass'
import { IconContext } from 'react-icons'
import { PiArrowFatLinesDownFill } from 'react-icons/pi'

function Arrow() {
  return (
    <div className='title-bg-arrow'>
      <IconContext.Provider value={{ size: '4em' }}>
        <div>
          {<PiArrowFatLinesDownFill />}
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default Arrow