module.exports = {
  siteMetadata: {
    title: `Change this at gatsby-config.js`,
    description: `Change this at gatsby-config.js`,
    author: `Change this at gatsby-config.js`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@components': `src/components`,
          '@routesComponents': `src/routesComponents`,
          '@actions': `src/store/actions`,
          '@hooks': `src/hooks`,
          '@helpers': `src/helpers`,
          '@interfaces': `src/interfaces`,
          '@sharedInterfaces': `src/interfaces/SharedInterfaces.tsx`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `react-hooks-redux-boilerplate-ts`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-stylus`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-ramda`,
    `gatsby-plugin-typescript`,
  ],
}
