import React from "react";
import styled from "styled-components"
import tachyons from "tachyons"
import siteTheme from "./siteTheme"

// we create styled paragraph element with alignRight property
const Paragraph = styled.p.attrs({
    className: "pa2 ma3 f4 f3-ns ml6-ns",
})`
    @font-face {
        font-family: ${props => props.theme.paragraphFont};
        src: url('${props => props.theme.fontsURL}');
    }
    font-family: ${props => props.theme.paragraphFont};
    font-weight: ${props => props.theme.paragraphFontWeight}
    text-align: ${props => props.alignRight ? 'right;' : 'left;'};
    max-width: ${props => props.noMaxWidth ? 'none' : '35rem'}
`

const Highlight = styled.span`
    color: ${props => props.theme.accentColorLight};
    margin: 0;
    padding: 0;
`

module.exports = { Paragraph, Highlight }