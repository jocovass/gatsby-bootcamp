const path = require('path');

// we create something called slug, which is basically the name of the mardown files,
// these slugs will be accessible through allMarkdownRemark API/query
// module.exports.onCreateNode = ({ node, actions}) => {
//     const { createNodeField } = actions;

//     if(node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md');

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug,
//         });
//     }
// };

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions;
    const blogTamplates = path.resolve('./src/templates/blog.js');
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTamplates,
            path: `/blog/${edge.node.slug}`,
            context: { //passing down the slug to the component which can than load the contnent later on.
                slug: edge.node.slug,
            }
        });
    });
}