import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Accueil from '@routes/Accueil'
import ErrorPage from '@routes/Error-page'
import Vitrine from '@routes/Vitrine'
import { cards, headData } from '@data/Data'
import Head from '@components/head/Head'

Head(headData)

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />,
    errorElement: <ErrorPage />,
  },
  ...routesGaleries,
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
