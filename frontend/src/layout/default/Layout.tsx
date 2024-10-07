import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import './Layout.sass'
import { ReactNode, useEffect } from 'react'

function Layout({ children }: { children: ReactNode }) {

  useEffect(() => {
    try {
      const html: HTMLHtmlElement | null = document.querySelector<HTMLHtmlElement>('html')
      const root: Element | null = document.querySelector<Element>('#root')
      if (html && root) {
        html.setAttribute('lang', 'fr')
        html.classList.add('layout')
        document.body.classList.add('layout-body')
        root.classList.add('layout-body-root')
      } else {
        throw new Error('Element html and root not exist.')
      }

    } catch (error) {
      console.error(error)
    }

    if (!window.location.hash) {
      window.scrollTo({ behavior: 'smooth', top: 0 })
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout