import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const EarthImgPage = props => (
  <Layout>
    <h1>
      Earth Images
      <span className="punctuation">.</span>
    </h1>
    <div>
      <p>
        Below are a series of images I’ve taken next to the same location
        captured by one of our Earth observing satellites, mainly{' '}
        <a href="">Landsat-8</a> or <a href="">Sentinel-2</a>. I make these for
        no other reason than to enjoy the difference in perspective they offer
        and play around with satellite imagery.
      </p>
      <p />
      <p>
        In putting them together, I mainly follow the workflow laid out in this{' '}
        <a href="https://medium.com/@robsimmon/making-sense-of-satellite-data-an-open-source-workflow-accessing-data-8f7f3c30f151">
          series of articles
        </a>{' '}
        written by <a href="https://twitter.com/rsimmon">Rob Simmon</a>. It
        involves using <a href="">GDAL</a>, a library for working with
        geospatial data, to process the raw satellite data, and{' '}
        <a href="">GIMP</a>, and open-source image editing software, to further
        enhance the image. I then use Instagram to stick them next to an image
        I’ve taken.
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
        <Img
          className="image"
          fluid={props.data.venice.childImageSharp.fluid}
        />
        <p>
          <span style={{ fontWeight: '600' }}>
            Venice, Italy <br />
          </span>
          Left: Landsat-8 564 false color image captured 4/19/2015; Right: me
          08/2015 right after I got pooped on by a pigeon.
        </p>
      </div>
      <div>
        <Img
          className="image"
          fluid={props.data.denali.childImageSharp.fluid}
        />
        <p>
          <span style={{ fontWeight: '600' }}>
            Denali, AK
            <br />
          </span>
          A typically cloud-covered Denali from up there and down here. Top: a
          very luck me on 07/23/2017 Bottom: a similarly lucky Landsat-8 on
          07/22/2017.
        </p>
      </div>
      <div>
        <Img
          className="image"
          fluid={props.data.boston.childImageSharp.fluid}
        />
        <p>
          <span style={{ fontWeight: '600' }}>
            Boston, MA
            <br />
          </span>
          Hometown from far from the ground and farther from the ground. Top:
          true color composite (432) courtesy of Landsat 8 OLI on August 30,
          2016. Bottom: me from a plane.
        </p>
      </div>
      <div>
        <Img
          className="image"
          fluid={props.data.plumbIsland.childImageSharp.fluid}
        />
        <p>
          <span style={{ fontWeight: '600' }}>
            Plumb Island, MA
            <br />
          </span>
          OH those summer nights Top: me late summer 2017 Bottom: False color
          composite (652) captured by Sentinel-2 on September 27, 2017.
        </p>
      </div>
      <div>
        <Img
          className="image"
          fluid={props.data.leonDormido.childImageSharp.fluid}
        />
        <p>
          <span style={{ fontWeight: '600' }}>
            Leon Dormido, Ecuador
            <br />
          </span>
          Top: Leon Dormido sitting off the coast of San Cristóbal Island,
          Galapagos as viewed by Landsat-8. Bottom: me from a boat.
        </p>
      </div>
      <div>
        <Img
          className="image"
          fluid={props.data.capeCod.childImageSharp.fluid}
        />
        <p>
          <span style={{ fontWeight: '600' }}>
            Cape Cod, MA
            <br />
          </span>
          True color composite (432). Landsat 8 OLI; October 8, 2015.
        </p>
      </div>
    </div>
  </Layout>
);

export default EarthImgPage;

export const EarthImages = graphql`
  fragment earthFluidImg on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const ProjectImgs = graphql`
  query {
    venice: file(relativePath: { eq: "earth-img-venice.jpg" }) {
      ...earthFluidImg
    }
    denali: file(relativePath: { eq: "earth-img-denali.jpg" }) {
      ...earthFluidImg
    }
    boston: file(relativePath: { eq: "earth-img-boston.jpg" }) {
      ...earthFluidImg
    }
    plumbIsland: file(relativePath: { eq: "earth-img-plumbIsland.jpg" }) {
      ...earthFluidImg
    }
    leonDormido: file(relativePath: { eq: "earth-img-leonDormido.jpg" }) {
      ...earthFluidImg
    }
    capeCod: file(relativePath: { eq: "earth-img-provincetown.jpg" }) {
      ...earthFluidImg
    }
  }
`;
