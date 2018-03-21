import React from "react"
import Link from "gatsby-link"
import { PageTitle, Punctuation } from "../components/utils/PageTitle"
import { Paragraph, Highlight } from "../components/utils/Paragraph"
import Nav from "../components/utils/Nav"
import { NavLink, ParagraphLink, IconLink } from "../components/utils/Links"
import StyledContact from "../components/utils/StyledContact"
import Footer from "../components/Footer"
import { Twitter, Github, Mail } from "react-feather"

const IndexPage = () => (  
    <div>
        <PageTitle alignRight>Welcome<Punctuation>!</Punctuation></PageTitle>
        <Paragraph alignRight>I’m Kayla, and I build solutions that help governments and organizations better serve their users.</Paragraph>
        <Paragraph alignRight>My academic background is in geospatial science, and my career: <Highlight>public sector tech.</Highlight></Paragraph>
        <Nav alignRight>
            <NavLink to="projects.js">Projects</NavLink>
            <NavLink to="about.js">About</NavLink>
            <NavLink to="projects.js">Notes</NavLink>
            <NavLink to="projects.js">Resume</NavLink>
        </Nav>
        <StyledContact>
            <IconLink href="https://twitter.com/paylakatel" target="_blank"><Mail></Mail></IconLink>
            <IconLink href="https://twitter.com/paylakatel" target="_blank"><Twitter></Twitter></IconLink>
            <IconLink href="https://twitter.com/paylakatel" target="_blank"><Github></Github></IconLink> 
        </StyledContact>
    </div>
)

export default IndexPage

// TODO: change Wrap StyledContact up into Footer component
//       figure out how to pass props (alignCenter) from Footer to 
//       Styled Component