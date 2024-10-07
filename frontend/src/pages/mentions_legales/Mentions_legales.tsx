import Section from '@components/section/Section'
import './Mentions_legales.sass'
import { coordonnees } from '@data/Data'

function ContentMentionsLegales() {

  return (
    <div className='content-logement mentions-legales'>
      <Section num={0} title='Mentions legales' >

        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>Éditeur du site</p>
            <div >
              <p><b>Nom : </b>{coordonnees.lastName}</p>
              <p><b>Prénom : </b>{coordonnees.firstName}</p>
              <p><b>Adresse : </b>{coordonnees.voie}, {coordonnees.rue}, {coordonnees.codePostal} {coordonnees.ville}, {coordonnees.departement}, {coordonnees.paye}</p>
              <p><b>Téléphone : </b><a href={`tel:${coordonnees.tel}`}>{coordonnees.tel}</a></p>
              <p><b>Email : </b><a href={`mailto:${coordonnees.email}`}>{coordonnees.email}</a></p>
              <p><b>Directeur de la publication :</b> {coordonnees.lastName} {coordonnees.firstName}</p>
            </div>
          </div>
        </div>

        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>Hébergement du site</p>
            <div >
              <p>Le site dvpro.fr est hébergé par o2switch, société SAS,</p>
              <p>Immatriculée au RCS de Clermont-Ferrand.</p>
              <p>Téléphone : <a href="tel:0444446040">04 44 44 60 40</a></p>
              <p>Site web : <a href="https://www.o2switch.fr/" target="_blank" rel="noopener noreferrer">https://www.o2switch.fr/</a></p>
            </div>
          </div>
        </div>

        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>Propriété intellectuelle</p>
            <div >
              <p>
                Le contenu du site dvpro.fr (textes, images, graphismes, logos, etc.) est la propriété exclusive de Dan VIAL, sauf mention contraire.
              </p>
              <p>
                Certaines photos utilisées sur ce site ne sont pas la propriété de Dan VIAL. Elles sont utilisées avec l'autorisation de leurs auteurs ou conformément aux licences applicables. Voici les crédits des photos concernées :
              </p>

              <div>
                <p>
                  constellations-2609647_1280.jpg :
                </p>
                <ul>
                  <li>Propriétaire/Auteur : <a href="https://pixabay.com/users/stocksnap-894430/" target="_blank" rel="noopener noreferrer">stocksnap</a></li>
                  <li>license : <a href="https://pixabay.com/service/license-summary/" target="_blank" rel="noopener noreferrer">pixabay license-summary</a></li>
                  <li>source : <a href="https://pixabay.com/photos/constellations-galaxy-stars-sky-2609647/" target="_blank" rel="noopener noreferrer">constellations-galaxy-stars-sky</a></li>
                </ul>
              </div>

              <div>
                <p>
                  universe-8147485_1280.jpg :
                </p>
                <ul>
                  <li>Propriétaire/Auteur : <a href="https://pixabay.com/fr/users/luminas_art-4128746/" target="_blank" rel="noopener noreferrer">Luminas_Art</a></li>
                  <li>license : <a href="https://pixabay.com/service/license-summary/" target="_blank" rel="noopener noreferrer">pixabay license-summary</a></li>
                  <li>source : <a href="https://pixabay.com/fr/illustrations/univers-espace-%C3%A9toiles-arc-en-ciel-8147485/" target="_blank" rel="noopener noreferrer">univers-espace-étoiles-arc-en-cie</a></li>
                </ul>
              </div>

              <p>
                Toute reproduction ou représentation, même partielle, de ces éléments est interdite sans autorisation préalable des auteurs respectifs.
              </p>
            </div>
          </div>
        </div>

        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>Responsabilité</p>
            <div >
              <p>
                Les informations présentes sur ce site sont fournies à titre informatif. Dan VIAL ne peut être tenu responsable des erreurs ou omissions, ni des dommages découlant de l'utilisation des informations fournies sur le site.
              </p>
            </div>
          </div>
        </div>

        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>Politique de confidentialité - RGPD</p>
            <div >
              <p>
                Pour ce qui concerne le traitement des données personnelles, merci de consulter notre <a href="/politique-de-confidentialite">Politique de confidentialité</a>.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ContentMentionsLegales
