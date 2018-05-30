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
          Not only does the data captured by NASA s earth observing satellites
          offer great opportunities for analysis, it also makes for some
          beautiful images.
        </Paragraph>
        <Paragraph>
          I used Landsat-8 data and GIMP, an open source image editing software,
          to create the statellite images seen below.
        </Paragraph>

        <hr />

        <ImgWrapper>
          <ImgDiv>
            <Img sizes={this.props.data.venice.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Venice, Italy</span> Left:
              Landsat-8 564 false color image captured 4/19/2015; Right: Photo
              taken in August 2008.
            </Paragraph>
          </ImgDiv>

          <ImgDiv>
            <Img sizes={this.props.data.denali.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Denali, AK</span> True color
              composite (432). Landsat 8 OLI; July 22, 2017. Denali from the
              Southern view point on July 23, 2017.
            </Paragraph>
          </ImgDiv>

          <ImgDiv>
            <Img sizes={this.props.data.boston.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Boston, MA</span> True color
              composite (432). Landsat 8 OLI; August 30, 2016. Boston from a
              statellite and a plane - the top shows the city from Landsat-8's
              point of view, and the bottom image was taken from a plane.
            </Paragraph>
          </ImgDiv>

          <ImgDiv>
            <Img sizes={this.props.data.provincetown.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Provincetown, MA</span> True
              color composite (432). Landsat 8 OLI; October 8, 2015. The very
              tip of Cape Cod, MA can be seen in this image in true color.
            </Paragraph>
          </ImgDiv>

          <ImgDiv>
            <Img sizes={this.props.data.athens.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Athens, Greece</span> Left:
              Landsat 8 natural color image (753) captured 9.11.2015; Right -
              view of Lykavittos Hill from the Acropolis captured late August
              2015. The image on right shows a burn scar (red patch) in the
              lower right portion of the image due to July 2015 fires throughout
              southern Mount Ymittos.
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
    provincetown: imageSharp(id: { regex: "/earth-img_provincetown/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    athens: imageSharp(id: { regex: "/earth-img_athens/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default EarthImagesPage;
