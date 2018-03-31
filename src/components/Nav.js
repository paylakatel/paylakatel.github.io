import React from "react"
import styled from "styled-components"
import ParagraphLink from "./ParagraphLink"
import tachyons from "tachyons"

const NavLink = ParagraphLink.extend.attrs({
    className: "lh-copy mr4"
})`
    @font-face {
        font-family: ${props => props.theme.displayFont};
        src: url('${props => props.theme.fontsURL}');
    }
    font-family: ${props => props.theme.displayFont};
    font-weight: 300;
    font-size: 1.75rem;
`

const Nav = styled.div.attrs({
    className: "pa2 ma3 f4 f3-ns ml6-ns"
})`
    text-align: ${props => props.alignRight ? "right" : "left"};
`

module.exports = { Nav, NavLink }