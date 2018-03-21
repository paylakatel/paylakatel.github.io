import React from "react"
import styled from "styled-components"
import { IconLink } from "./Links"
import { Paragraph } from "./Paragraph"

// we create styled component with para of alignVertical

const StyledContact = styled.div.attrs({
    className: "pa2 mh4 mt4 f4 ml7-l f3-ns mh6-ns"
})`
    text-align: ${props => props.alignCenter ? 'center' : 'right'};
`

export default StyledContact 
