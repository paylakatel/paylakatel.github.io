import React from "react"
import styled from "styled-components"
import { Twitter, Github, Mail } from "react-feather"
import { IconLink } from "./Links"

// we create styled component with para of alignVertical
const StyledContact = styled.div.attrs({
    className: "flex flex-column fl justify-around ml4 mt4"
})`
`

const Contact = () => {
    return (
        <StyledContact>
            <IconLink href="https://twitter.com/paylakatel" target="_blank"><Mail className="ma3"></Mail></IconLink>
            <IconLink href="https://twitter.com/paylakatel" target="_blank"><Twitter className="ma3"></Twitter></IconLink>
            <IconLink href="https://twitter.com/paylakatel" target="_blank"><Github className="ma3"></Github></IconLink>
        </StyledContact>
    )
}

export default Contact