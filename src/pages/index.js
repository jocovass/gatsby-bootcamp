import React from "react"
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/head';


const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )
};

export default IndexPage;
