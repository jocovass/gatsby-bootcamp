import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/head';

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h2>Contact me</h2>
            <p>If you like what you see, don't hesitate get in touch.</p>
            <p>The best way to contact me is via <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        </Layout>
    );
};

export default Contact;