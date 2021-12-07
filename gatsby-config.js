/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
     { 
       resolve: `gatsby-source-mongodb`,
       options: { dbName: `test`, collection: [`messages`] },
       server: `mongodb://localhost:27017/test`
    },
  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/MD-projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `competences`,
        path: `${__dirname}/src/MD-competences/`,
      },
    },
        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata : {
    title: `Jeff van Straelen Portfolio`,
    description: `Jeff van Straelen Portfolio d\'un dev avec Gatsby.Js`,
    copyright: `Site réalisé en React.js && Gatsby.js par Jean-François van Straelen`,
    contact: `jeffvanstraelen@gmail.com`,
    history:  `Après trois ans à mon compte en tant que Photographe ainsi qu'une
    dizaine d'années en management dans la restauration, j'ai voulu me lancer
    dans une nouvelle Aventure. Je me suis naturellement orienté vers un secteur
    me tendant les bras : le développement web. Pour cette raison, j'ai suivi une
    formation bootcamp en distanciel au Bocal Academy de Nice`
  }
}
