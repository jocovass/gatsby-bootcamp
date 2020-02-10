/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Jozsef Vass',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful', // with this plugin we can fetch post to our blog from a CMS like contentful in our case
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem', // loads files from file system
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark', // transforms markdown files int html
      options: {
        plugins: [
          'gatsby-remark-relative-images', // import images from our files system
          {
            resolve: 'gatsby-remark-images', // images from markdown files into html image element
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    }
  ]
}
