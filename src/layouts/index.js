import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { NavLink } from "../components/utils/Links"
import Nav from "../components/Nav"
import { ThemeProvider } from "styled-components"
import siteTheme from "../components/utils/siteTheme"
import "./global.css"
import Footer from "../components/Footer";


// we create a wrapper for index.html content
const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Kayla A. Patel</title>
        </Helmet>
        <ThemeProvider theme={siteTheme}>
            <div>
                {children()}
                <Nav alignRight></Nav>
                <Footer></Footer>
            </div>

        </ThemeProvider>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper