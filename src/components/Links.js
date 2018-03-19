import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const NavLink = styled(Link).attrs({
    className: "f3 lh-copy ma3"
})`
    color: ${props => props.theme.accentColor};
    text-decoration: none;
    @font-face {
        font-family: ${props => props.theme.displayFont};
        src: url('${props => props.theme.fontsURL}');
    }
    font-family: ${props => props.theme.displayFont};
    font-weight: ${props => props.theme.linkFontWeight};
    display: inline-block;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -1px;
        left: 0;
        background-color: ${props => props.theme.accentColor};
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.2s ease-in-out 0s;
        transition: all 0.2s ease-in-out 0s;
    }
      
    &:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }

    &:hover {
        color: black;
    }
`

const ParagraphLink = NavLink.extend`
    color: purple;
`

module.exports = { NavLink, ParagraphLink }