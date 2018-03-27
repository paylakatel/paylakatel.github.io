import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const IconLink = styled(Link).attrs({
    className: "pr3"
})`
    color: black;

    &:hover {
        color: black;
    }
`

const Footer = styled.div.attrs({
    className: "pa2 ma3 f4 mt3 f3-ns ml6-ns"
})`
    text-align: ${props => props.alignRight ? 'right' : 'left'};
`
module.exports = { Footer, IconLink }