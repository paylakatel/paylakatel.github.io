import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import 'typeface-playfair-display';
import 'typeface-pt-serif';
import 'typeface-lato';

const Layout = ({ children }) => (
  <>
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
);

export default Layout;
