import React from 'react';
import Helmet from 'react-helmet';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
//import './global.css';

const Layout = ({ children }) => (
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
    <NavBar />
    <div
      style={{
        margin: '0 auto',
        padding: '0.7em',
      }}
    >
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;
