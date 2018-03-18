import React from "react";
import styled, { ThemeProvider } from "styled-components"

const PageTitle = styled.h1`
    color: ${props => props.theme.accentColor};
    font-size: 5em;
`
export default PageTitle