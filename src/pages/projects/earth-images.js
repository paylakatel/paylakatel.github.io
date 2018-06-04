import React from 'react';
import { PageTitle, Punctuation } from '../../components/PageTitle';
import { Paragraph } from '../../components/Paragraph';
import { ImgDiv, ImgWrapper } from '../../components/ImgWrapper';
import Img from 'gatsby-image';

class EarthImagesPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>
          Earth Images<Punctuation>.</Punctuation>
        </PageTitle>
        <Paragraph>
          A few images I took next to the same location captured by one of our
          hard working Earth-observing satellites. How I put these together.
        </Paragraph>
        <Paragraph />

        <hr />

        <ImgWrapper>
          <ImgDiv>
            <Img sizes={this.props.data.venice.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>
                Venice, Italy <br />
              </span>
              Left: Landsat-8 564 false color image captured 4/19/2015; Right:
              me 08/2015 right after I got pooped on by a pigeon.
            </Paragraph>
          </ImgDiv>

          <ImgDiv>
            <Img sizes={this.props.data.denali.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>
                Denali, AK<br />
              </span>
              A typically cloud-covered Denali from up there and down here. Top:
              a very luck me on 07/23/2017 Bottom: a similarly lucky Landsat-8
              on 07/22/2017.
            </Paragraph>
          </ImgDiv>

          <ImgDiv>
            <Img sizes={this.props.data.boston.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>
                Boston, MA<br />
              </span>
              Hometown from far from the ground and farther from the ground.
              Top: true color composite (432) courtesy of Landsat 8 OLI on
              August 30, 2016. Bottom: me from a plane.
            </Paragraph>
          </ImgDiv>

          <ImgDiv>
            <Img sizes={this.props.data.plumbisland.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>
                Plumb Island, MA<br />
              </span>
              OH those summer nights Top: me late summer 2017 Bottom: False
              color composite (652) captured by Sentinel-2 on September 27,
              2017.
            </Paragraph>
          </ImgDiv>

          <ImgDiv>
            <Img sizes={this.props.data.leondormido.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>
                Leon Dormido, Ecuador<br />
              </span>
              Top: Leon Dormido sitting off the coast of San Cristóbal Island,
              Galapagos as viewed by Landsat-8. Bottom: me from a boat.
            </Paragraph>
          </ImgDiv>
        </ImgWrapper>
      </div>
    );
  }
}

// eslint-disable-next-line
export const pageQuery = graphql`
  query earthImgsQuery {
    venice: imageSharp(id: { regex: "/earth-img_venice/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    denali: imageSharp(id: { regex: "/earth-img_denali/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    boston: imageSharp(id: { regex: "/earth-img_boston/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    plumbisland: imageSharp(id: { regex: "/earth-img_plumbIsland/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    leondormido: imageSharp(id: { regex: "/earth-img_leonDormido/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default EarthImagesPage;
