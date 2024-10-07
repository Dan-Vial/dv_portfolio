const range = document.createRange()
const parent = document.head
function addHtml(stringHtml: string) {
  // parent.prepend(range.createContextualFragment(stringHtml))
  parent.append(range.createContextualFragment(stringHtml))
}

export interface headData {
  title: string;
  description: string;
  card: {
    site: string;
    type: string;
    card: string;
    url: string;
    image: string;
  };
  coordonnees: {
    firstName: string;
    lastName: string;
    voie: string;
    rue: string;
    ville: string;
    codePostal: string;
    paye: string;
    departement: string;
    tel: string;
    email: string;
  };
}

function Head(headData: headData, server: boolean = false) {
  const { card, coordonnees } = headData
  document.title = headData.title

  const head = `

    <-- <link rel="canonical" href="https://dvpro.fr"> -->
    <meta name="description" content="${headData.description}" />

    <meta property="og:site_name" content="${card.site}" />
    <meta property="og:type" content="${card.type}" />
    <meta property="og:title" content="${headData.title}" />
    <meta property="og:description" content="${headData.description}" />
    <meta property="og:url" content="${card.url}" />
    <meta property="og:image" content="${card.image}" />
    <meta content="fr_FR" property="og:locale">

    <meta name="twitter:card" content="${card.card}" />
    <meta name="twitter:site" content="${card.site}" />
    <meta name="twitter:title" content="${headData.title}" />
    <meta name="twitter:description" content="${headData.description}" />
    <meta name="twitter:url" content="${card.url}" />
    <meta name="twitter:image" content="${card.image}" />

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "image": "${card.image}",
        "name": "${coordonnees.firstName} ${coordonnees.lastName}",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "${coordonnees.rue}",
          "addressLocality": "${coordonnees.ville}",
          "postalCode": "${coordonnees.codePostal}",
          "addressRegion": "${coordonnees.departement}",
          "addressCountry": "fr"
        },
        "telephone": "${coordonnees.tel}",
        "url": "${card.url}",
        "sameAs": "",
        "openingHours": [
          "Mo,Tu,We,Th,Fr 10:00-18:00"
        ],
        "priceRange": ""
      }
    </script>`

  if (server) {
    return head
  }

  addHtml(head)
}

export default Head