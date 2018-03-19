import React from "react"
import { NavLink } from "./Links"

const StlyedNav = styled.div.attrs({
    className="pa2"
})`
`

const Nav = ({ children }) => {
    return (
        <StlyedNav>
            {children}
        </StlyedNav>
    )
}