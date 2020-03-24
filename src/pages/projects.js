import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

const ProjectsPage = props => (
  <Layout>
    <h1>
      For work
      <span className="punctuation">.</span>
    </h1>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gridGap: '1em',
      }}
    >
      {props.data.work.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.path} className="projectLink">
            <Img
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              style={{ border: '1px solid #cccccc', borderRadius: '3px' }}
            />
            <h2>{node.frontmatter.title}</h2>
            <h3>{node.frontmatter.myRole}</h3>
          </Link>
        </div>
      ))}
    </div>
    <h1>
      For fun
      <span className="punctuation">.</span>
    </h1>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gridGap: '1em',
      }}
    >
      {props.data.fun.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.path} className="projectLink">
            <Img
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              style={{ border: '1px solid #cccccc', borderRadius: '3px' }}
            />
            <h2>{node.frontmatter.title}</h2>
            <h3>{node.frontmatter.myRole}</h3>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

export default ProjectsPage;

export const query = graphql`
  {
    work: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "work" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            myRole
            path
            type
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    fun: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "fun" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            myRole
            path
            type
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
