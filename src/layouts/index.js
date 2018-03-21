import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { ThemeProvider } from "styled-components"
import siteTheme from "../components/utils/siteTheme"
import "./global.css"

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
            </div>
        </ThemeProvider>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper