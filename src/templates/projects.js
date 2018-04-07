import React from "react"
import Helmet from "react-helmet"
import { PageTitle, Punctuation } from "../components/PageTitle"
import { Paragraph, Highlight } from "../components/Paragraph"
import styled from "styled-components"

const ProjectParagraph = styled(Paragraph).attrs({
  className: "f4 f4-ns mr6-ns"
})``

export default function ProjectTemplate({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <div>
     <Helmet title={`${post.frontmatter.title}`} />
      <div>
        <PageTitle>{post.frontmatter.title}<Punctuation>.</Punctuation></PageTitle>
        <ProjectParagraph noMaxWidth dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;