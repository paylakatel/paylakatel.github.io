import React from "react"
import Link from "gatsby-link"
import { PageTitle, Punctuation } from "../components/utils/PageTitle"
import { Paragraph, Highlight } from "../components/utils/Paragraph"
import { Nav, NavLink } from "../components/Nav"


const IndexPage = () => (  
    <div>
        <PageTitle alignRight>Welcome<Punctuation>!</Punctuation></PageTitle>
        <Paragraph alignRight>I’m Kayla, and I build solutions that help governments and organizations better serve their users.</Paragraph>
        <Paragraph alignRight>My academic background is in geospatial science, and my career: <Highlight>public sector tech.</Highlight></Paragraph>
    </div>
)

export default IndexPage

// TODO: make nav default to two columns when bigger