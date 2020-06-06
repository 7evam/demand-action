require('dotenv').config();
const PW = process.env.MONGO_PW
const USER = process.env.MONGO_USER
const HOST = process.env.MONGO_HOST

console.log('hey you see this')
console.log(USER)

module.exports = {
  siteMetadata: {
    title: `Demand Actions`,
    description: `Demand Action`,
    author: `@gatsbyjs`,
    siteUrl: `https://lucid-borg-01ca72.netlify.app/`
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-mongodb',
      options: {
          // Name of the database and collection where are books reside
          connectionString: `mongodb+srv://${USER}:${PW}@${HOST}`,
          dbName: 'action',
          collection: 'incidents',
          extraParams: {
              ssl: true
          }
      }
  },
  { resolve: `gatsby-transformer-remark` }
  ],
}
