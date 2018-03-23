import React from 'react'
import styled from 'styled-components'
import { NavLink } from "./utils/Links"

// we add an aligned right property to move the Nav to the right of the page
const StyledNav = styled.div.attrs({
    className:"pa2 mh4 mh6-ns"
})`
    text-align: ${props => props.alignRight ? 'right;' : 'left;'};
`

const Nav = () => {
    return(
        <StyledNav>
            <NavLink to="projects.js">Projects</NavLink>
            <NavLink to="about.js">About</NavLink>
            <NavLink to="projects.js">Notes</NavLink>
            <NavLink to="projects.js">Resume</NavLink> 
        </StyledNav>
    )
}

export default Nav