import React from 'react';
import 'typeface-playfair-display';
import 'typeface-pt-serif';
import 'typeface-lato';

const IndexLayout = ({ children }) => (
  <>
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
