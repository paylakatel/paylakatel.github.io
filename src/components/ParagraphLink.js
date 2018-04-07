import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const ParagraphLink = styled(Link).attrs({
    className: "f5 f4-ns"
})`
    color: ${props => props.theme.accentColor};
    text-decoration: none;
    font-family: ${props => props.theme.paragraphFont};
    font-weight: 300;
    display: inline-block;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0px;
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

export default ParagraphLink