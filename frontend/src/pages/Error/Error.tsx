import { Link } from 'react-router-dom'
import './ContentError.sass'
import { ContentPageError } from '../../routes/Error-page'
import TitleBg from '../../components/titleBg/TitleBg'
import Section from '../../components/section/Section'

function ErrorPage({ contentPageError, error }: { contentPageError: ContentPageError, error: unknown }) {
  const { text, link } = contentPageError
  let count: number = 0

  return (
    <div id="error-page" className="error-page">
      <TitleBg className={'title-bg_error'} title={'Error 404'}>
      </TitleBg>

      <Section className={'section-content_col1'} num={count++} title={'Error 404'}>
        <p className="error-page-p">{text}</p>
        <p>{(error as { statusText?: string })?.statusText}</p>
        <Link className="error-page-a" to={link.href}>{link.text}</Link>
      </Section>


    </div>
  )
}

export default ErrorPage
