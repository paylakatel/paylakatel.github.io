import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Nav, NavLink } from "../components/Nav"
import { Footer, IconLink } from "../components/Footer";
import { Mail, Twitter, Github } from "react-feather"
import { ThemeProvider } from "styled-components"
import siteTheme from "../components/siteTheme"
import "./global.css"
import favicon from '../favicon.ico';

import { injectGlobal } from 'styled-components'


injectGlobal`
    @font-face {
        src: url('${props => props.theme.fontsURL}');
    }
`

// create a wrapper for index.html content
const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Kayla A. Patel</title>
            <link rel="icon" href={favicon} type="image/x-icon" />
        </Helmet>
        <ThemeProvider theme={siteTheme}>
            <div>
                {children()}
                <Nav>
                    <NavLink to="/">About</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="projects">Resume</NavLink> 
                </Nav>
                <Footer>
                    <IconLink to="https://twitter.com/paylakatel" target="_blank"><Mail></Mail></IconLink>
                    <IconLink to="https://twitter.com/paylakatel" target="_blank"><Twitter></Twitter></IconLink>
                    <IconLink to="https://twitter.com/paylakatel" target="_blank"><Github></Github></IconLink>
            </Footer>
            </div>
        </ThemeProvider>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper