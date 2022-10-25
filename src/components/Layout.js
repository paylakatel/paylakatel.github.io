import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import 'typeface-playfair-display';
import 'typeface-pt-serif';
import 'typeface-lato';
import { StaticQuery, graphql } from 'gatsby';

const Head = ({ title, description }) => {
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <html lang="en" />
  </>;
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Head
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <NavBar />
        <div
          style={{
            margin: '0 auto',
            padding: '1em',
            minHeight: 'calc(100vh - 120px)',
            maxWidth: 850,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
);

export default Layout;
