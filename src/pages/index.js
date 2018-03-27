import React from "react"
import { PageTitle, Punctuation } from "../components/utils/PageTitle"
import { Paragraph, Highlight } from "../components/utils/Paragraph"


const IndexPage = () => (  
    <div>
        <PageTitle>Welcome<Punctuation>!</Punctuation></PageTitle>
        <Paragraph>I’m Kayla, and I build solutions that help governments and organizations better serve their users.</Paragraph>
        <Paragraph>My academic background is in geospatial science, and my career: <Highlight>public sector tech.</Highlight></Paragraph>
    </div>
)

export default IndexPage

// TODO: make nav default to two columns when bigger