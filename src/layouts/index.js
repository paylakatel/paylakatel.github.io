import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import siteTheme from "../components/Theme"

// const theme = {
//     accentColor: 'dodgerblue',
// }

const TemplateWrapper = ({ children }) => (
    <ThemeProvider theme={siteTheme}>
        <div>
            {children()}
        </div>
    </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper