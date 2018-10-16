import React from 'react';
import Helmet from 'react-helmet';

//import './global.css';

const IndexLayout = ({ children }) => (
  <>
    <Helmet
      title="Kayla A. Patel"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
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
);

export default IndexLayout;
