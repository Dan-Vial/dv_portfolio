/**
 * Routes agnostique [ createBrowserRouter / createStaticRouter (SSR) ]
 */

import Accueil from '@routes/Accueil'
import ErrorPage from '@routes/Error-page'
import Vitrine from '@routes/Vitrine'
import MentionsLegales from '@routes/Mentions_legales'
import PolitiqueDeConfidentialite from '@routes/Politique_de_confidentialite'
import Cv from '@routes/Cv'
import { cards } from '@data/Data'

const routesGaleries: {
  path: string,
  element: JSX.Element,
}[] = []

for (const card of cards) {
  routesGaleries.push(
    {
      path: card.href,
      element: <Vitrine key={card.dataId} logement={card} />,
    },
  )
}

const routes = [
  {
    path: '/',
    element: <Accueil />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
  },
  {
    path: '/politique-de-confidentialite',
    element: <PolitiqueDeConfidentialite />
  },
  {
    path: '/cv',
    element: <Cv />,
  },
  ...routesGaleries,
]

export default routes