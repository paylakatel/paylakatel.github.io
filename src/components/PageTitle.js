import React from "react";
import styled from "styled-components"
import tachyons from "tachyons"
import siteTheme from "./siteTheme"

const PageTitle = styled.h1.attrs({
    className: "pa3 f1 lh-title pa6-ns",
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
//export default PageTitle
