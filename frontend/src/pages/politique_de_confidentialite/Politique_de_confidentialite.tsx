import { Section } from '@components/section/Section'
import './Politique_de_confidentialite.sass'

function ContentPolitiqueDeConfidentialite() {
  return (
    <div className='content-logement'>
      <Section className={'politique-de-confidentialite'} num={0} title='Politique de confidentialité'>
        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>RGPD</p>
            <div >

              <p>
                Les informations recueillies via ce formulaire sont traitées par le serveur dans le but de générer un email. La base légale du traitement est le consentement de l&apos;utilisateur.
              </p>
              <p>
                Les données collectées seront transmises uniquement à Dan VIAL à l&apos;adresse email <a href="mailto:contact@dvpro.fr">contact@dvpro.fr</a>. Aucune donnée n&apos;est stockée sur le serveur après la génération de l&apos;email.
              </p>
              <p>
                Les emails générés à partir de vos données seront conservés pendant une durée de 1 an dans la boîte mail. Vous avez le droit de demander à tout moment la rectification ou l&apos;effacement de vos données, ou d&apos;exercer votre droit à la limitation du traitement.

              </p>
              <p>
                En fonction de la base légale du traitement, vous pouvez également retirer votre consentement au traitement de vos données à tout moment. Vous pouvez aussi exercer votre droit à la portabilité des données, c&apos;est-à-dire obtenir une copie de vos données dans un format structuré et lisible par machine.
              </p>
              <p>
                Pour toute demande relative à vos droits, merci de nous contacter à l&apos;adresse <a href="mailto:contact@dvpro.fr">contact@dvpro.fr</a>
              </p>
              <p>
                Vous avez également le droit de déposer une réclamation auprès de la <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">CNIL</a> si vous estimez que vos droits n&apos;ont pas été respectés.
              </p>
            </div>
          </div>
        </div>

      </Section>
    </div>
  )
}

export default ContentPolitiqueDeConfidentialite