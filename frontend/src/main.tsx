import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { headData } from '@data/Data'
import Head from '@components/head/Head'
import routes from './routes'

Head(headData)

const router = createBrowserRouter(routes)
const root = document.querySelector('#root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
} else {
  console.log('id root was not found')
}
