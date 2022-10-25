import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
      {props.data.work.edges.map(({ node }) => {
        const image = getImage(node.frontmatter.thumbnail.childImageSharp);
        return (
          <div key={node.id}>
            <Link to={node.frontmatter.path} className="projectLink">
              <GatsbyImage
                image={image}
                style={{ border: '1px solid #cccccc', borderRadius: '3px' }}
              />
              <h2>{node.frontmatter.title}</h2>
              <h3>{node.frontmatter.myRole}</h3>
            </Link>
          </div>
        );
      })}
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
      {props.data.fun.edges.map(({ node }) => {
        const isInternalLink = /^\/(?!\/)/.test(node.frontmatter.path);
        const image = getImage(node.frontmatter.thumbnail.childImageSharp);
        if (isInternalLink) {
          return (
            <div key={node.id}>
              <Link to={node.frontmatter.path} className="projectLink">
                <GatsbyImage
                  image={image}
                  style={{ border: '1px solid #cccccc', borderRadius: '3px' }}
                />
                <h2>{node.frontmatter.title}</h2>
                <h3>{node.frontmatter.myRole}</h3>
              </Link>
            </div>
          );
        }
        return (
          <div key={node.id}>
            <a href={node.frontmatter.path} className="projectLink">
              <GatsbyImage
                image={image}
                style={{ border: '1px solid #cccccc', borderRadius: '3px' }}
              />
              <h2>{node.frontmatter.title}</h2>
              <h3>{node.frontmatter.myRole}</h3>
            </a>
          </div>
        );
      })}
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
                gatsbyImageData(
                  width: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
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
                gatsbyImageData(
                  width: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
