import React from 'react';
import Helmet from 'react-helmet';
import 'typeface-playfair-display';
import 'typeface-pt-serif';
import 'typeface-lato';
import { StaticQuery, graphql } from 'gatsby';

const IndexLayout = ({ children }) => (
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
        <Helmet title={data.site.siteMetadata.title}>
          <meta charSet="utf-8" />
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 500,
            padding: '100px .7em',
          }}
        >
          {children}
        </div>
      </>
    )}
  />
);

export default IndexLayout;
