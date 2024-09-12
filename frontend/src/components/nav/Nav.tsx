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

  useEffect(() => {
    handleLinkClick(window.location.href)
  }, [])

  function handleClick(): void {
    setEnableNav(!enableNav)

    if (ref.current && !enableNav) {
      const fer = ref.current
      setTimeout(() => {
        fer.focus()
      }, 300)
    }
  }

  function handleLinkClick(idCible: string): void {
    const url = new URL(idCible)
    if (url.hash) {
      const cible: HTMLElement | null = document.getElementById(url.hash)
      if (cible) {
        cible.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.scrollTo({ behavior: 'smooth', top: 0 })
    }
    setEnableNav(false)
  }

  return (
    < nav className={'nav'} >

      <button onClick={handleClick} className="button nav-toggle" aria-expanded={enableNav} aria-controls={`nav-list-${navId}`} aria-label="Menu">
        <IconContext.Provider value={{ size: '1.5em' }}>
          <div>
            {enableNav ? <TiTimes /> : <TiThMenu />}
          </div>
        </IconContext.Provider></button>

      <div id={`nav-list-${navId}`} className={`${cssClass ?? 'nav-list'} ${enableNav ? 'nav-enabled' : ''}`}
      // id="nav-list"
      >
        {nav.map((link, index) =>
          <Link ref={index === 0 ? ref : null} to={link.href} className='button' key={index} onClick={() => { handleLinkClick(link.href) }}>
            {link.text}
          </Link >
        )}
      </div>

    </nav >
  )
}

export default Nav
