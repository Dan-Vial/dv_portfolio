import { ReactNode } from 'react'
import './Cv.sass'
import Section from '@components/section/Section'
import { curriculum } from '@data/Data'

const SectionCv = function ({ title, children }: { title: string, children?: ReactNode }) {
  return (
    <div>
      <h2 className='content-cv--page-a4--title2'>{title}</h2>
      {children}
    </div>
  )
}

const SectionCvLeft = function ({ date, list, info, lieu }: { date: string, list: string[], info: string, lieu: string }) {
  return (
    <div>
      {/* <div className='content-cv--page-a4--part'> */}
      <p>
        <b>{date} - {info}</b><br />
        {lieu}
      </p>

      <ul>
        {list.map((value, index) =>
          <li key={index}>{value}</li>
        )}
      </ul>

    </div>
  )
}

function ContentCv() {
  function clickPrint() {
    print()
  }
  return (
    <div className='content-cv'>
      <Section className={'section-content_col1'} num={0}>

        <div>
          <button className={'button test'} onClick={clickPrint}>Imprimer CV</button>
        </div>

        <div className='content-cv--page-a4'>

          <div className='content-cv--page-a4--col-left'>

            <div className='content-cv--page-a4--portrait'>
              <img className='content-cv--page-a4--photo' src={curriculum.info.img.href} alt={curriculum.info.img.alt} />
              <h2 className='content-cv--page-a4--title2'>{curriculum.info.title}</h2>

              <blockquote style={{ fontSize: '1.3em' }}>
                {curriculum.info.text}
              </blockquote>

            </div>

            <SectionCv title={'CONTACT'}>
              {curriculum.contact}
            </SectionCv>

            <SectionCv title={'PROFIL'}>
              {curriculum.profil}
            </SectionCv>

            <SectionCv title={'COMPÉTEMCES Numérique'}>
              {curriculum.competemces}
            </SectionCv>

            <SectionCv title={'CENTRES D\'INTÉRÊT'}>
              {curriculum.interet}
            </SectionCv>
          </div>

          <div className='content-cv--page-a4--col-right'>
            <SectionCv title={'EXPERIENCES PROFESSIONELLES'}>

              {curriculum.experiences_professionelles.map((value, index) =>
                <SectionCvLeft key={index} date={value.date} list={value.list} info={value.info} lieu={value.lieu}></SectionCvLeft>
              )}

            </SectionCv>

            <SectionCv title={'FORMATION CONTINUE'}>

              {curriculum.formation_continue.map((value, index) =>
                <SectionCvLeft key={index} date={value.date} list={value.list} info={value.info} lieu={value.lieu}></SectionCvLeft>
              )}

            </SectionCv>

            <SectionCv title={'FORMATION INITIALE'}>

              {curriculum.formation_initiale.map((value, index) =>
                <SectionCvLeft key={index} date={value.date} list={value.list} info={value.info} lieu={value.lieu}></SectionCvLeft>
              )}

            </SectionCv>

          </div>
        </div >

      </Section >
    </div >
  )
}

export default ContentCv
