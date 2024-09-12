import './Acueil.sass'
import Section from '@components/section/Section'
import Card from '@components/card/Card'
import { sections, cards, coordonnees } from '@data/Data'
import FormContact from '@components/formContact/FormContact'
import TitleBg from '@components/titleBg/TitleBg'
import images from '@public/images/baliseHTMLimg.json'
import Arrow from '@components/arrow/Arrow'
import { IconContext } from 'react-icons'
import Tag from '@components/tag/Tag'
import Collapses from '@components/collapse/Collapse'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { GiSmartphone } from 'react-icons/gi'

function ContentAcueil() {
  let count: number = 0
  const imgTitle = images['./images/pc/pc.png']
  const cardList: JSX.Element[] = cards.map<JSX.Element>(card => {
    card.pictures[0].sizes = '50vw'
    return <Card key={card.dataId} href={card.href} dataId={card.dataId} title={card.title} img={card.pictures[0]} />
  })

  return (
    <div className='content-acueil'>

      <TitleBg title={'Développeur web'} src={imgTitle.src} srcset={imgTitle.srcset} sizes={imgTitle.sizes} alt={imgTitle.alt}>

        <Arrow />

      </TitleBg>

      <Section className={'apropos-card_text'} id={sections['A Propos'].id} num={count++} title={sections['A Propos'].title}>

        {sections['A Propos'].children}

      </Section>

      <Section id='#galerie' num={count++} title={'Galerie'}>

        {cardList}

      </Section>

      <Section id='#competences' num={count++} title={'Compétences'}>

        {
          sections['Compétences'].map((card, indexCard) =>
            <div key={indexCard} className='card card_pad'>
              <div className='apropos-card'>
                <p>{card.title}</p>
                <div className='competences'>

                  {
                    card.skills.map((skill, indexSkill) =>
                      <Tag key={indexSkill} text={skill} />
                    )
                  }
                </div>
              </div>
            </div>
          )
        }

      </Section>

      <Section id='#services' num={count++} title={'Services'}>

        {
          sections['Services'].map((collapse, indexCollapse) =>
            <Collapses key={indexCollapse} name={collapse.title} text={collapse.text} />
          )
        }

      </Section>

      {/* <Section id='#mentor' num={count++} title={'Mentor'}>
        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>Mentor</p>
          </div>
        </div>
        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>OpenClassRooms</p>
          </div>
        </div>
      </Section> */}

      <Section id='#contact' num={count++} title={'Contact'}>
        <div className='card card_pad'>

          <div className='form-contact'>
            <strong>{`${coordonnees.title} ${coordonnees.firstName} ${coordonnees.lastName}`}</strong>
            <div className='footer-picto-button'>
              <IconContext.Provider value={{ size: '3em', style: { verticalAlign: 'middle' } }}>
                <span>
                  <GiSmartphone />
                </span>
              </IconContext.Provider>
              <a className="button button_50p" href={`tel:${coordonnees.tel}`}>{`${coordonnees.tel}`}</a>
            </div>
            <div className='footer-picto-button'>
              <IconContext.Provider value={{ size: '3em', style: { verticalAlign: 'middle' } }}>
                <span>
                  <MdOutlineAlternateEmail />
                </span>
              </IconContext.Provider>
              <a className="button button_50p" href={`mailto:${coordonnees.email}`} target={'_blank'}>{`${coordonnees.email}`}</a>
            </div>
            <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5680.915429571118!2d4.7201558765091045!3d44.60811579014894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b53ff955cc7f63%3A0x982e2e9e2221c128!2s2%20Pl.%20des%20%C3%89coles%2C%2007400%20Meysse!5e0!3m2!1sfr!2sfr!4v1724781970264!5m2!1sfr!2sfr" style={{ border: 0, width: '100%', height: '100%', minHeight: '350px' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
        <div className='card card_pad'>
          <FormContact />
        </div>
      </Section >

      {/* <Section id='#chartegraphique' num={count++} title={'Charte graphique'}>
        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>colors fg</p>
          </div>
        </div>
        <div className='card card_pad'>
          <div className='apropos-card'>
            <p>colors bg</p>
          </div>
        </div>
      </Section> */}

    </div >
  )
}

export default ContentAcueil
