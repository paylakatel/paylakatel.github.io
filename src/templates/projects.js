import React from 'react';
import Helmet from 'react-helmet';
import { PageTitle, Punctuation, SectionHeader } from '../components/PageTitle';
import { Paragraph, Highlight } from '../components/Paragraph';
import styled from 'styled-components';
import rehypeReact from 'rehype-react';
import ParagraphLink from '../components/ParagraphLink';
import { ImgWrapper, ImgDiv } from '../components/ImgWrapper';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'paragraph-link': ParagraphLink,
    'section-header': SectionHeader,
    'img-wrapper': ImgWrapper,
    'img-div': ImgDiv,
  },
}).Compiler;

const ProjectParagraph = styled.div.attrs({
  className: 'f4 lh-copy',
})`
  font-family: ${props => props.theme.paragraphFont};
  font-weight: ${props => props.theme.paragraphFontWeight};
`;

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    return (
      <div>
        <Helmet title={`${post.frontmatter.title}`} />
        <div>
          <PageTitle>
            {post.frontmatter.title}
            <Punctuation>.</Punctuation>
          </PageTitle>
          <Paragraph> {renderAst(post.htmlAst)} </Paragraph>
        </div>
      </div>
    );
  }
}

export default ProjectTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
