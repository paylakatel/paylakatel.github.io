import React from "react"
import Link from "gatsby-link"

const StlyedNav = styled.div`
    text-align: center;
`

const Nav = ({ children }) => {
    return (
        <StlyedNav>
            {children}
        </StlyedNav>
    )
}