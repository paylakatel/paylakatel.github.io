import React from 'react'
import styled from 'styled-components'

// we add an aligned right property to move the Nav to the right of the page
const Nav = styled.div.attrs({
    className:"pa2 ph4"
})`
    text-align: ${props => props.alignRight ? 'right;' : 'left;'};
`

export default Nav
//text-align: ${props => props.alignRight ? 'right;' : 'left;'};