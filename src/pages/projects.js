import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
//import { Link } from 'gatsby';

import Layout from '../components/Layout';

const ProjectsPage = props => (
  <Layout>
    <h1>
      Projects
      <span className="punctuation">.</span>
    </h1>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridGap: '1em',
      }}
    >
      <div>
        <Link to="/article">
          <Img fluid={props.data.article.childImageSharp.fluid} />
          <p>Extraction in Ghana</p>
        </Link>
      </div>
      <div>
        <Link to="vision-zero">
          <Img fluid={props.data.visionZero.childImageSharp.fluid} />
          <p>Vision Zero</p>
        </Link>
      </div>
      <div>
        <Link to="earth-img">
          <Img fluid={props.data.earthImg.childImageSharp.fluid} />
          <p>Earth Images</p>
        </Link>
      </div>
      {/* <div>
        <Link to="longreads">
          <Img fluid={props.data.longreads.childImageSharp.fluid} />
          <p>Longreads</p>
        </Link>
      </div> */}
    </div>
  </Layout>
);

export default ProjectsPage;

export const ImgQuery = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const ProjectImgs = graphql`
  query {
    article: file(relativePath: { eq: "article.png" }) {
      ...fluidImage
    }
    earthImg: file(relativePath: { eq: "earth_images.jpg" }) {
      ...fluidImage
    }
    visionZero: file(relativePath: { eq: "visionZero.jpg" }) {
      ...fluidImage
    }
    longreads: file(relativePath: { eq: "visionZero.jpg" }) {
      ...fluidImage
    }
  }
`;
