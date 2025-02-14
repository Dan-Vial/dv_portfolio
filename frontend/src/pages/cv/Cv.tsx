import { ReactNode } from 'react'
import './Cv.sass'
import { Section } from '@components/section/Section'
import { curriculum } from '@data/Data'

// const LettreDeRecommandation = function ({ num }: { num: number }) {
//   return (
//     <Section className={'section-content_col1'} num={num}>

//       <div className='card card_pad'>

//         <embed style={{
//           width: '100%',
//           height: '320mm'
//         }} src="lettre_de_recommandation-Dan_VIAL.pdf" width="800" height="500" type="application/pdf" />

//       </div>
//     </Section>
//   )
// }

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
  let num = 0
  function clickPrint() {
    print()
  }
  return (
    <div className='content-cv'>
      <Section className={'section-content_col1'} num={num++}>

        <div className='nav'>
          <button className={'button test'} onClick={clickPrint}>Imprimer CV</button>

          {/* <a className={'button test'} href="lettre_de_recommandation-Dan_VIAL.pdf" target="_blank" rel="noopener noreferrer">lettre de recommandation</a> */}

          <strong>lettre de recommandation:</strong>
          <a className={'button test'} href="formapedia_lettre_de_recommandation-Dan_VIAL.pdf" target="_blank" rel="noopener noreferrer">FORMAPEDIA</a>

          <a className={'button test'} href="a2c_lettre_de_recommandation-Dan_VIAL.pdf" target="_blank" rel="noopener noreferrer">A2C</a>

          {/* <div id="summary" className={'button test'}>lettre de recommandation
            <div id="detail">
              <a className={'button test'} href="lettre_de_recommandation-Dan_VIAL.pdf" target="_blank" rel="noopener noreferrer">Formapidia</a>
              <a className={'button test'} href="lettre_de_recommandation-Dan_VIAL.pdf" target="_blank" rel="noopener noreferrer">A2C</a>
            </div>
          </div> */}

        </div>

        <div className='content-cv--page-a4'>

          <div className='content-cv--page-a4--col-left'>

            <div className='content-cv--page-a4--portrait'>
              <img className='content-cv--page-a4--photo' src={curriculum.info.img.href} alt={curriculum.info.img.alt} />
              {/* <h2 className='content-cv--page-a4--title2'>{curriculum.info.title}</h2> */}

              <blockquote>
                {curriculum.info.text}
              </blockquote>

            </div>

            <SectionCv title={'CONTACT'}>
              {curriculum.contact}
            </SectionCv>

            <SectionCv title={'PROFIL'}>
              {curriculum.profil}
            </SectionCv>

            <SectionCv title={'COMPÉTEMCES Numériques'}>
              {curriculum.competemces}
            </SectionCv>

            <SectionCv title={'CENTRES D\'INTÉRÊT'}>
              {curriculum.interet}
            </SectionCv>
          </div>

          <div className='content-cv--page-a4--col-right'>

            <h2 className='content-cv--page-a4--title2 content-cv--page-a4--title2__x3'>{curriculum.info.title}</h2>

            <div className=''>
              Après une carrière dans la menuiserie interrompue suite à une maladie, j’ai entrepris une reconversion réussie dans le développement web. Motivé à l’idée de rejoindre une équipe Agile, je souhaite mettre mes compétences en développement Full Stack NERD au service de la création de sites et applications Web modernes et innovants.
            </div>

            {/* Après une carrière professionnelle dans la menuiserie en fabrication bois interrompue suite à une maladie, j’ai rebondi sur une reconversion professionnelle dans le domaine du Web. J’aimerais intégrer une équipe de développeurs AGILE et participer à la création de sites et applications Web modernes et innovants. */}

            {/* Après une carrière professionnelle dans la menuiserie en fabrication bois interrompue suite à une maladie, j’ai entrepris une reconversion professionnelle réussie dans le domaine du Web. Motivé à l’idée de rejoindre une équipe de développeurs AGILE, je souhaite contribuer et mettre mes compétences au service de la création de sites et applications Web modernes et innovants. */}

            <SectionCv title={'FORMATION CONTINUE'}>

              {curriculum.formation_continue.map((value, index) =>
                <SectionCvLeft key={index} date={value.date} list={value.list} info={value.info} lieu={value.lieu}></SectionCvLeft>
              )}

            </SectionCv>

            <SectionCv title={'EXPERIENCES PROFESSIONELLES'}>

              {curriculum.experiences_professionelles.map((value, index) =>
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

      {/* <LettreDeRecommandation num={num++} /> */}

    </div >
  )
}

export default ContentCv
