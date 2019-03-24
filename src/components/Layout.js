import React from 'react';
import Helmet from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import 'typeface-playfair-display';
import 'typeface-pt-serif';
import 'typeface-lato';
import { StaticQuery, graphql } from 'gatsby';

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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
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
