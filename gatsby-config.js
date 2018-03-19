module.exports = {
    siteMetadata: {
        title: `Kayla A. Patel`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/src/pages`,
            },
          },
    ],
}