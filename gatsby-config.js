module.exports = {
  siteMetadata: {
    title: "Portefølje",
    siteUrl: "https://dev.dfweb.no",
    titleTemplate: "%s · Daniel Fjeldstad",
    description:
      "Portefølje for Daniel Fjeldstad, en utvikler som kan PHP, Javascript, Wordpress, React med mer.",
    url: "https://www.dfweb.no", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DFWeb",
        short_name: "DFWeb",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/svg/favicon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Lato",
            variants: ["400", "700", "900"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        ignore: ["fontawesome-svg-core/"],
      },
    },
    "gatsby-plugin-react-svg",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
  ],
}