import React from "react";
import styled from "styled-components"
import tachyons from "tachyons"
import siteTheme from "./siteTheme"

// we create styled paragraph element with alignRight property
const Paragraph = styled.p.attrs({
    className: "pa2 ph4 f4",
})`
    @font-face {
        font-family: ${props => props.theme.paragraphFont};
        src: url('${props => props.theme.fontsURL}');
    }
    font-family: ${props => props.theme.paragraphFont};
    font-weight: ${props => props.theme.paragraphFontWeight}
    text-align: ${props => props.alignRight ? 'right;' : 'left;'};
`

export default Paragraph