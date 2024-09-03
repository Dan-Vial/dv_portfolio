import { useRouteError } from 'react-router-dom'

import ContentError from '../pages/Error/Error'
import Layout from '../layout/default/Layout'

export interface ContentPageError {
  text: string,
  link: {
    href: string,
    text: string
  }
}

const contentPageError = {
  text: 'Oups! La page que vous demandez n\'existe pas.',
  link: {
    href: '/',
    text: 'Retourner sur la page d’accueil'
  }
}

function ErrorPage() {
  return (
    <Layout>
      <ContentError contentPageError={contentPageError} error={useRouteError()} />
    </Layout>
  )
}

export default ErrorPage
