import './Footer.sass'
import { IconContext } from 'react-icons'
import { GiSmartphone } from 'react-icons/gi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaInstagram, FaRegCopyright } from 'react-icons/fa6'
import { coordonnees, nav } from '@data/Data'
import Nav from '@components/nav/Nav'
import { Link } from 'react-router-dom'

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
              <a className="button" href={`tel:${coordonnees.tel}`}>{coordonnees.tel}</a>
            </div>
            <div className='footer-picto-button'>
              <IconContext.Provider value={{ size: '3em', style: { verticalAlign: 'middle' } }}>
                <span>
                  <MdOutlineAlternateEmail />
                </span>
              </IconContext.Provider>
              <a className="button" href={`mailto:${coordonnees.email}`} target={'_blank'} rel="noreferrer">{coordonnees.email}</a>
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
              <Link className="button button-disabled" to="#" target="_blank">
                Instagram
              </Link>
            </div>

          </nav>
        </div>
        <div>
          <h3>Mentions légales</h3>
          <nav className='footer-nav'>
            <Link className="button" to="/mentions-legales">Mentions légales</Link>
            <Link className="button" to="/politique-de-confidentialite">Politique de confidentialité</Link>
            <Link className="button button-disabled" to="#/conditions-d-utilisation">Conditions générales d’utilisation</Link>
            <Link className="button button-disabled" to="#/conditions-générales-de-vente">Conditions générales de vente</Link>
          </nav>
        </div>

        <div>
          <h3>Liens utiles</h3>
          <div className='footer-nav'>
            <a className="button" href="https://www.ardeche.fr/3317-a2c-ardeche-campus-connecte.htm" target="_blank" rel="noopener noreferrer">Lieu de formation A2C</a>
            <a className="button" href="https://www.formapedia.com/" target="_blank" rel="noopener noreferrer">Formation Formapedia</a>
            <a className="button" href="https://openclassrooms.com/fr/paths" target="_blank" rel="noopener noreferrer">Formation OpenClassrooms</a>
          </div>
        </div>

      </div>
      <div>
        <IconContext.Provider value={{ size: '1em', style: { verticalAlign: 'top' } }}>
          <span>
            <FaRegCopyright />
          </span>
        </IconContext.Provider> Dan VIAL 2024
      </div>
    </footer >
  )
}

export default Footer
