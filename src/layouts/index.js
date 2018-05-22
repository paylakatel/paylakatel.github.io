import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Nav, NavLink } from '../components/Nav';
import { Footer, IconLink } from '../components/Footer';
import { Mail, Twitter, Github } from 'react-feather';
import { ThemeProvider } from 'styled-components';
import siteTheme from '../components/siteTheme';
import './global.css';
import favicon from '../favicon.ico';
// eslint-disable-next-line
import tachyons from 'tachyons';

// create a wrapper for index.html content
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kayla A. Patel</title>
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
    <ThemeProvider theme={siteTheme}>
      <div className="pa4 pa6-l">
        {children()}
        <Nav>
          <NavLink to="/">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="projects">Resume</NavLink>
        </Nav>
        <Footer>
          <IconLink to="https://twitter.com/paylakatel" target="_blank">
            <Mail />
          </IconLink>
          <IconLink to="https://twitter.com/paylakatel" target="_blank">
            <Twitter />
          </IconLink>
          <IconLink to="https://twitter.com/paylakatel" target="_blank">
            <Github />
          </IconLink>
        </Footer>
      </div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
