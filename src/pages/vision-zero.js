import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const VisionZeroPage = props => (
  <Layout>
    <h1>Vision Zero Crash Map.</h1>
    <div>
      <p>hub bub</p>
      <hr />
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '1em',
      }}
    >
      <div>
        <Img fluid={props.data.visionZero.childImageSharp.fluid} />
        <p>raa tata</p>
      </div>
    </div>
  </Layout>
);

export default VisionZeroPage;

export const VisionZeroImage = graphql`
  fragment vzFluidImg on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const ProjectImgs = graphql`
  query {
    visionZero: file(relativePath: { eq: "vz-screen-shot.png" }) {
      ...earthFluidImg
    }
  }
`;
