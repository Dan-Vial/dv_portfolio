import './Vitrine.sass'
import Collapse from '../../components/collapse/Collapse'
import Carrousel from '../../components/carrousel/Carrousel'
import Tag from '../../components/tag/Tag'
// import UserAvatar from '../../components/userAvatar/UserAvatar'
// import Rating from '../../components/rating/Rating'
// import TitleBg from '../../components/titleBg/TitleBg'
import Section from '../../components/section/Section'
import { PropsImgOpti } from '../../components/ImgOpti/ImgOpti'
// import { Link } from 'react-router-dom'

export interface PropsVitrines {
  logement: {
    href: string,
    dataId: number,
    pictures: PropsImgOpti[],
    host: {
      picture: string,
      name: string
    },
    equipments: string[] | JSX.Element[],
    tags: string[],
    title: string,
    location: string | JSX.Element | JSX.Element[],
    rating: number,
    description: string | JSX.Element | JSX.Element[]
  }
}

export type Logement = PropsVitrines['logement']

function ContentLogement({ logement }: PropsVitrines) {
  const { pictures, equipments, tags } = logement
  let count: number = 0

  return (
    <div className='content-logement'>
      {/* <TitleBg className={'title-bg_error'} title={'BOOKI'} srcset={''}></TitleBg> */}

      <Section className={'section-content_col1'} num={count++}>
        <Carrousel pictures={pictures} />

        <div className='content-logement-info'>
          <div>
            <h2 className='content-logement-h2'>{logement.title}</h2>
            {/* <span>
              Visite page web: <Link to={logement.location} target={'_blank'} >{logement.location}</Link>
            </span> */}


            <div className='content-logement-tag-list'>
              {tags.map((value, index) =>
                <Tag key={index} text={value} />
              )}
            </div>
          </div>

          {/* <div className='content-logement-ratinguser'>
            <UserAvatar host={host} />
            <Rating rating={logement.rating} />
          </div> */}
        </div>

        <div className='content-logement-collapse-list'>
          <Collapse name='Description' text={logement.description} />
          <Collapse name='Liens' text={equipments.map((value, index) => <div key={index}> {value} </div>)} />
        </div>
      </Section>

    </div>
  )
}

export default ContentLogement
