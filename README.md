
[![Netlify Status](https://api.netlify.com/api/v1/badges/b4611f60-865d-4387-a096-125d89c96228/deploy-status)](https://app.netlify.com/sites/elegant-sinoussi-21cfec/deploys)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_dfweb&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_dfweb)

# Dfweb

Second version of my portfolio website with Gatsby instead of plain HTML.

Uses Tailwind and PurgeCSS for styling.

First version is located here: https://github.com/w3bdesign/dfweb-v1

## Features:

- Gatsby as main project dependency
- GSAP and Framer Motion for animations 
- Cypress E2E testing through Netlify build plugins and netlify-plugin-cypress
- FontAwesome SVG icons for project icons (@FortAwesome)
- Tailwind CSS for styling
- React Helmet for modifying HTML header
- Google fonts with Gatsby plugin for prefetching
- Gatsby plugin for generating robots.txt and sitemap.xml
- UUID for unique IDs for mapped elements
- Scrollreveal for smooth reveal of content
- React-pdf for displaying PDF CV

## TODO

- Replace PROJECTS.json constant with a Apollo Graphql backend (No Markdown parsing)
- Add React Spring animations for portfolio (click for flip)
