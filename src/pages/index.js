import React from "react"
import Link from "gatsby-link"
import { PageTitle, Punctuation } from "../components/PageTitle"
import { Paragraph, Highlight } from "../components/Paragraph"
import Nav from "../components/Nav"
import { NavLink, ParagraphLink } from "../components/Links"
import Contact from "../components/Contact"

const IndexPage = () => (  
    <div>
        <Contact></Contact>
        <PageTitle alignRight>Welcome<Punctuation>!</Punctuation></PageTitle>
        <Paragraph alignRight>I’m Kayla, and I build solutions that help governments and organizations better serve their users.</Paragraph>
        <Paragraph alignRight>My academic background is in geospatial science, and my career: <Highlight>public sector tech.</Highlight></Paragraph>
        <Nav alignRight>
            <NavLink to="projects.js">Projects</NavLink>
            <NavLink to="about.js">About</NavLink>
            <NavLink to="projects.js">Notes</NavLink>
            <NavLink to="projects.js">Resume</NavLink>
        </Nav>
    </div>
)

export default IndexPage