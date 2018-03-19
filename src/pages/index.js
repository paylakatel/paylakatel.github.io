import React from "react"
import Link from "gatsby-link"
import { PageTitle, Punctuation } from "../components/PageTitle"
import Paragraph from "../components/Paragraph"
import Nav from "../components/Nav"
import { NavLink, ParagraphLink } from "../components/Links"

const IndexPage = () => (  
    <div>
        <PageTitle alignRight>Welcome<Punctuation>!</Punctuation></PageTitle>
        <Paragraph alignRight>I’m Kayla, and I build solutions that help governments and organizations better serve their users.</Paragraph>
        <Paragraph alignRight>My academic background is in geospatial science, and my career: public sector tech.</Paragraph>
        <Nav alignRight>
            <NavLink to="projects.js">Projects</NavLink>
            <NavLink to="projects.js">About</NavLink>
            <NavLink to="projects.js">Notes</NavLink>
        </Nav>
    </div>
)

export default IndexPage