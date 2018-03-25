import React from "react"
import styled from "styled-components"
import ParagraphLink from "./utils/ParagraphLink"
import tachyons from "tachyons"

const NavLink = ParagraphLink.extend.attrs({
    className: "f3 lh-copy ml5"
})`
    @font-face {
        font-family: ${props => props.theme.displayFont};
        src: url('${props => props.theme.fontsURL}');
    }
    font-family: ${props => props.theme.displayFont};
    font-weight: 300;
`

const Nav = styled.div.attrs({
    className: "pa2 mh4 mt4 f4 ml7-l f3-ns mh6-ns"
})`
    text-align: ${props => props.alignRight ? "right" : "center"};
`

module.exports = { Nav, NavLink }