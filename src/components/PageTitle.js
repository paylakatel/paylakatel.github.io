import React from "react";
import styled from "styled-components"
import tachyons from "tachyons"
import siteTheme from "./siteTheme"

const PageTitle = styled.h1.attrs({
    className: "mt6 mh4 f1 f-subheadline-ns mh6-ns mt6-ns",
})`
    @font-face {
        font-family: ${props => props.theme.displayFont};
        src: url('${props => props.theme.fontsURL}');
    }
    font-family: ${props => props.theme.displayFont};
    font-weight: ${props => props.theme.displayFontWeight}
    text-align: ${props => props.alignRight ? 'right;' : 'left;'};
`

const Punctuation = styled.span`
    color: ${props => props.theme.accentColor};
`

module.exports = { PageTitle, Punctuation }
