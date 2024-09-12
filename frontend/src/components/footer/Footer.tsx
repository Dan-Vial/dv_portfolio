import './Footer.sass'
import { IconContext } from 'react-icons'
import { GiSmartphone } from 'react-icons/gi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaInstagram, FaRegCopyright } from 'react-icons/fa6'
import { coordonnees, nav } from '@data/Data'
import Nav from '@components/nav/Nav'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div>
          <h3>Navigation</h3>
          <Nav nav={nav} cssClass={'footer-nav'} />
        </div>

        <div>
          <h3>Contact</h3>
          <address className='footer-nav'>
            <div className='footer-picto-button'>
              <IconContext.Provider value={{ size: '3em', style: { verticalAlign: 'middle' } }}>
                <span>
                  <GiSmartphone />
                </span>
              </IconContext.Provider>
              <a className="button" href={`tel:${coordonnees.tel}`}>{`${coordonnees.tel}`}</a>
            </div>
            <div className='footer-picto-button'>
              <IconContext.Provider value={{ size: '3em', style: { verticalAlign: 'middle' } }}>
                <span>
                  <MdOutlineAlternateEmail />
                </span>
              </IconContext.Provider>
              <a className="button" href={`mailto:${coordonnees.email}`} target={'_blank'}>{`${coordonnees.email}`}</a>
            </div>
            <strong>{`${coordonnees.firstName} ${coordonnees.lastName}`}</strong>
            <div>{`${coordonnees.voie}, ${coordonnees.rue}`}</div>
            <div>{`${coordonnees.codePostal} ${coordonnees.ville}`}</div>
            <div>{`${coordonnees.departement}, ${coordonnees.paye}`}</div>
          </address>
        </div>
        <div>
          <h3>Réseaux sociaux</h3>
          <nav className='footer-nav'>
            <div className='footer-picto-button'>
              <IconContext.Provider value={{ size: '3em', style: { verticalAlign: 'middle' } }}>
                <span>
                  <FaInstagram />
                </span>
              </IconContext.Provider>
              <a className="button button-disabled" href="#" target="_blank">
                Instagram
              </a>
            </div>

          </nav>
        </div>
        <div>
          <h3>Mentions légales</h3>
          <nav className='footer-nav'>
            <a className="button button-disabled" href="#/mentions-légales">Mentions légales</a>
            <a className="button button-disabled" href="#/politique-de-confidentialite">Politique de confidentialité</a>
            <a className="button button-disabled" href="#/conditions-d-utilisation">Conditions générales d’utilisation</a>
            <a className="button button-disabled" href="#/conditions-générales-de-vente">Conditions générales de vente</a>
          </nav>
        </div>
        <div>
          <IconContext.Provider value={{ size: '1em', style: { verticalAlign: 'top' } }}>
            <span>
              <FaRegCopyright />
            </span>
          </IconContext.Provider> Dan VIAL 2024
        </div>
      </div>
    </footer >
  )
}

export default Footer
