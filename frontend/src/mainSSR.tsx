import ReactDOMServer from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server'
import routes from './routes'
import { StrictMode } from 'react'

async function reactApp(fetchRequest: Request) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { query, dataRoutes, } = createStaticHandler(routes)
  const context = await query(fetchRequest)

  if (context instanceof Response) {
    throw new Error(JSON.stringify(context))
  }

  const router = createStaticRouter(dataRoutes, context)

  const reactApp: string = ReactDOMServer.renderToString(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} />
    </StrictMode>,
  )

  return reactApp
}

export default reactApp