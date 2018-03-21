import React from "react";
import styled from "styled-components"
import tachyons from "tachyons"
import siteTheme from "./siteTheme"

// we create styled paragraph element with alignRight property
const Paragraph = styled.p.attrs({
    className: "pa2 mh4 f4 ml7-l pl7-l f3-ns mh6-ns",
})`
    @font-face {
        font-family: ${props => props.theme.paragraphFont};
        src: url('${props => props.theme.fontsURL}');
    }
    font-family: ${props => props.theme.paragraphFont};
    font-weight: ${props => props.theme.paragraphFontWeight}
    text-align: ${props => props.alignRight ? 'right;' : 'left;'};
`

const Highlight = styled.span`
    color: ${props => props.theme.accentColorLight};
    margin: 0;
    padding: 0;
`

module.exports = { Paragraph, Highlight }