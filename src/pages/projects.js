import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import ParagraphLink from '../components/ParagraphLink';
import styled from 'styled-components';
import { PageTitle, Punctuation } from '../components/PageTitle';

const ProjectsWrapper = styled.div.attrs({
  className: 'flex flex-wrap',
})``;

const Project = styled.div.attrs({
  className: 'mr4 mb4',
})``;

const ProjectImg = styled(Img).attrs({
  className: 'ba b--black-10 br1',
})`
  max-width: 100%;
`;

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <PageTitle>
        Projects<Punctuation>.</Punctuation>
      </PageTitle>
      <ProjectsWrapper>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Project key={post.id}>
                <Link to={post.frontmatter.path}>
                  <ProjectImg
                    resolutions={
                      post.frontmatter.image.childImageSharp.resolutions
                    }
                  />
                </Link>
                <ParagraphLink to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </ParagraphLink>
              </Project>
            );
          })}
      </ProjectsWrapper>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___id] }) {
      edges {
        node {
          frontmatter {
            id
            title
            path
            image {
              childImageSharp {
                resolutions(width: 300) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`;
