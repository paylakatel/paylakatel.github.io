import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const ProjectTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>
          {post.frontmatter.title}
          <span className="punctuation">.</span>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        myRole
      }
    }
  }
`;
