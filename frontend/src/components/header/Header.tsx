import './Header.sass'
import Nav from '../nav/Nav'
import { nav } from '../../data/Data'

function Header() {
  return (
    <>
      <header className='header'>
        <div className='header-content'>
          <div className="header-title"><h1>Dan VIAL</h1></div>
          <div className='header-wave-content'>
            <div className='header-wave'></div>
            <div className='header-wave header-wave_1'></div>
            <div className='header-wave header-wave_2'></div>
            <div className='header-wave header-wave_3'></div>
          </div>
          <Nav nav={nav} />
        </div>
      </header>
    </>
  )
}

export default Header
