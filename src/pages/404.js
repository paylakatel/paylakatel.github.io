import React from 'react';
import Layout from '../components/Layout';
import PageHead from '../components/PageHead';

export const Head = () => <PageHead />;

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
