import React from "react"
import Link from "gatsby-link"
import { PageTitle, Punctuation } from "../components/PageTitle"
import Paragraph from "../components/Paragraph"
import { NavLink, ParagraphLink } from "../components/Links"

// we query for folder names to populate the navigation
export const navQuery = graphql`
    query navQuery { 
        allDirectory {
        edges {
            node {
            name
            }
          }
        }
    }
`

const IndexPage = () => (  
    <div>
        <PageTitle alignRight>Welcome<Punctuation>!</Punctuation></PageTitle>
        <Paragraph alignRight>I’m Kayla, and I build solutions that help governments and organizations better serve their users.</Paragraph>
        <Paragraph alignRight>My academic background is in geospatial science, and my career: public sector tech.</Paragraph>
        <NavLink to="projects.js">Projects</NavLink>
        <NavLink to="projects.js">About</NavLink>
        <NavLink to="projects.js">Notes</NavLink>
        <ParagraphLink to="projects.js">testParagraphLink</ParagraphLink>
    </div>
    
)

export default IndexPage