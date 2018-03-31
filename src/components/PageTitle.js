import React from "react";
import styled from "styled-components"
import tachyons from "tachyons"
import siteTheme from "./siteTheme"

const PageTitle = styled.h1.attrs({
    className: "pa2 ma3 mt6 f1 f-subheadline-ns ml6-ns",
})`
    font-family: ${props => props.theme.displayFont};
    font-weight: ${props => props.theme.displayFontWeight};
    text-align: ${props => props.alignRight ? 'right;' : 'left;'};
`

const Punctuation = styled.span`
    color: ${props => props.theme.accentColor};
`

module.exports = { PageTitle, Punctuation }
