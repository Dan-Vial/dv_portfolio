import { useEffect, useId, useRef, useState } from 'react'
import './Nav.sass'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { TiThMenu, TiTimes } from 'react-icons/ti'

export interface NavProps {
  href: string,
  text: string,
}

function Nav({ nav, cssClass }: { nav: NavProps[], cssClass?: string }): JSX.Element {
  const ref: React.MutableRefObject<HTMLAnchorElement | null> = useRef(null)
  const navId: string = useId()
  const [enableNav, setEnableNav] = useState<boolean>(false)
  const [hashEffect, sethashEffect] = useState<boolean>(false)

  useEffect(() => {
    if (enableNav) {
      ref.current?.focus()
    }

    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ behavior: 'smooth', top: 0 })
    }
  }, [enableNav, hashEffect])

  function handleClickMenu(): void {
    setEnableNav(!enableNav)
  }

  function handleClickNav() {
    setEnableNav(false)
    sethashEffect(!hashEffect)
  }

  return (
    < nav className={'nav'} >

      <button onClick={handleClickMenu} className="button nav-toggle" aria-expanded={enableNav} aria-controls={`nav-list-${navId}`} aria-label="Menu">
        <IconContext.Provider value={{ size: '1.5em' }}>
          <div>
            {enableNav ? <TiTimes /> : <TiThMenu />}
          </div>
        </IconContext.Provider></button>

      <div id={`nav-list-${navId}`} className={`${cssClass ?? 'nav-list'} ${enableNav ? 'nav-enabled' : ''}`}
      >
        {nav.map((link, index) =>
          <Link ref={index === 0 ? ref : null} to={link.href} className='button' key={index} onClick={handleClickNav}>
            {link.text}
          </Link >
        )}
      </div>

    </nav >
  )
}

export default Nav
