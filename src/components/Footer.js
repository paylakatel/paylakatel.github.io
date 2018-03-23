import React from "react"
import { IconLink } from "../components/utils/Links"
import styled from "styled-components"
import { Mail, Twitter, Github } from "react-feather"

// add an aligned right property to move the Nav to the right of the page
const StyledFooter = styled.div.attrs({
    className: "pa2 mh4 mt4 f4 ml7-l f3-ns mh6-ns"
})`
    text-align: ${props => props.alignCenter ? 'center' : 'right'};
`

const Footer = () => {
    return(
        <StyledFooter>
            <IconLink href="https://twitter.com/paylakatel" target="_blank"><Mail></Mail></IconLink>
            <IconLink href="https://twitter.com/paylakatel" target="_blank"><Twitter></Twitter></IconLink>
            <IconLink href="https://twitter.com/paylakatel" target="_blank"><Github></Github></IconLink> 
        </StyledFooter>
    )
}

export default Footer