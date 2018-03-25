import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const IconLink = styled(Link).attrs({
    className: "ml3"
})`
    color: black;

    &:hover {
        color: black;
    }
`

const Footer = styled.div.attrs({
    className: "pa2 mh4 mt4 f4 mb6 ml7-l f3-ns mh6-ns"
})`
    text-align: ${props => props.alignRight ? 'right' : 'center'};
`
module.exports = { Footer, IconLink }