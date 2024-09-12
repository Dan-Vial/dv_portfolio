
import Layout from '@layout/default/Layout'
import PageVitrine, { PropsVitrines } from '@pages/vitrine/Vitrine'

function Vitrine({ logement }: PropsVitrines) {
  return (
    <>
      <Layout>
        <PageVitrine logement={logement} />
      </Layout>
    </>
  )
}

export default Vitrine
