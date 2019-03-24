import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const VisionZeroPage = props => (
  <Layout>
    <h1>
      Vision Zero Crash Map
      <span className="punctuation">.</span>
    </h1>
    <div>
      <p>
        Vision Zero is an international road saftey effort with the goal of
        ending fatalities and serious injuries related to road traffic.{' '}
        <a href="https://www.boston.gov/transportation/vision-zero">
          Vision Zero Boston
        </a>{' '}
        is the City’s local program. As part of that effort, the City tracks
        traffic crashes and fatalities on the{' '}
        <a href="https://apps.boston.gov/vision-zero/">Vision Zero Crash Map</a>
        .
      </p>

      <p>
        In Summer 2018, we re-built the crash map to bring it inline with{' '}
        <a href="https://www.boston.gov/departments/innovation-and-technology/brand-guidelines">
          Boston’s branding
        </a>
        , modernize the technology stack, and automate the updating process. The
        map now leverages <a href="https://postgis.net/">PostGIS</a>,{' '}
        <a href="https://www.mapbox.com/mapbox-gl-js/api/">Mapbox GL JS</a>, and{' '}
        <a herf="https://nextjs.org/">React/NextJS</a>.
      </p>

      <p>
        The{' '}
        <a href="https://data.boston.gov/dataset/vision-zero-crash-records">
          crash
        </a>{' '}
        and{' '}
        <a href="https://data.boston.gov/dataset/vision-zero-fatality-records">
          fatality
        </a>{' '}
        data can be found on{' '}
        <a href="https://data.boston.gov/">Analyze Boston</a>, the City’s open
        data portal.
      </p>

      <p>
        The code for the map can be found on{' '}
        <a href="https://github.com/CityOfBoston/vision-zero">github</a>.
      </p>
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
        <a href="https://apps.boston.gov/vision-zero/">
          <Img
            className="image"
            fluid={props.data.visionZero.childImageSharp.fluid}
          />
        </a>
        <hr />
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
