import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/Layout';
import blogStyles from './blog.module.scss';

const BlogPage = ({ path }) => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title,
    //                         date
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
            sort: {
                fields: publishedDate,
                order: ASC,
            }
            ) {
            edges {
                node {
                title
                slug
                publishedDate(formatString: "MMMM Do, YYYY")
                }
            }
            }
        }
    `);

    function renderList() {
        return data.allContentfulBlogPost.edges.map((val, i) => {
            return (
                <li key={val.node.id} className={blogStyles.post}>
                    <Link to={`${path}${val.node.slug}`}>
                        <h2>{val.node.title}</h2>
                        <p>{val.node.publishedDate}</p>
                    </Link>
                </li>
            );
        })
    }

    console.log(data);

    return (
        <Layout>
            <Head title="Blog" />
            <h2>Blog</h2>
            <ol className={blogStyles.posts}>
                {renderList()}
            </ol>
        </Layout>
    );
};

export default BlogPage;