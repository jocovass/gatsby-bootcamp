import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/head';


const About = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h2>Thechnologies I'm using HTML, CSS, JS, REACT to make beautiful websites.</h2>
            <p>Do you have any further questions? <Link to="/contact">Contact me!</Link></p>
        </Layout>
    );
};

export default About;