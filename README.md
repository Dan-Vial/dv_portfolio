# 🏅 dv_portfolio

dv_portfolio est un site web conçu pour présenter vos compétences, valoriser votre parcours, et exposer vos projets. Il se compose de plusieurs sections :

- À propos : Un espace dédié à votre présentation, idéalement accompagné d'une image portrait.
- Galerie : Une collection de cartes interactives comprenant une image et un titre.
- Compétences : Liste de vos savoir-faire.
- Services : Détail des prestations offertes.
- Contact : Formulaire ou informations pour vous joindre.

Ce site n’est pas un Content Management System (CMS), mais propose une base de code flexible pour organiser le contenu à votre convenance. Il intègre une structure Responsive Web Design (RWD) avec des composants optimisés.

Pour un aperçu : [dvpro](https://dvpro.fr)

## installation
```shell
# term01
cd backend && npm i
# term02
cd frontend && npm i
```
## utilisation

> [!IMPORTANT]
> L'étape 1 est IMPORTANT pour initialiser.

1. build ./frontend and ./backend 

    `npm run build`
1. développement
    - frontend (vite.js use proxi)
      - accès API start backend: `npm run dev`
      - `npm run dev` 
    - backend
      - `npm run dev` 
1. preview prod en local
    - clean/build/start server web: `npm run serve`

## Spécifications
...en construction.

| Besoin | Solution |
| - | - |
| base serveur web | Express JS |
| backend form | muter |
| logger | morgan rotating-file-stream |
| green-it | compression |
| CSP | helmet cors |
| détection robots | express-useragent |
| authentification | jsonwebtoken bcrypt |
| data base | postgres pg |
| ORM | ... |
| caching | ... |
| image opt. | sharp |
| documatation API REST | swagger |
| typage | TypeScript |
| frontend langage | JavaScript ESM |
| backend langage | Node.js ESM |
| linter | eslint stylistic |
| frontend builder | vite.js |
| backend builder | rollup |
| frontend type APP | react react-dom react-router-dom |
| icons lib | react-icons |
| print PDF | print natif, media query |
| css | sass BEM |
| protection action | recaptcha |
| logger | ... |


## Améliorations
...en construction.

vite.js: config proxy

## 📝 License
This project is licensed under the **MIT License**.