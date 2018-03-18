import React from "react"
import Link from "gatsby-link"
import { PageTitle, Punctuation } from "../components/PageTitle"
import Paragraph from "../components/Paragraph"

const IndexPage = () => (  
    <div>
        <PageTitle alignRight>Welcome<Punctuation>!</Punctuation></PageTitle>
        <Paragraph alignRight>I’m Kayla, and I build solutions that help governments and organizations better serve their users.</Paragraph>
        <Paragraph alignRight>My academic background is in geospatial science, and my career: public sector tech.</Paragraph>
    </div>
)

export default IndexPage