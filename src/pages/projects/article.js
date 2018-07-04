import React from 'react';
import { PageTitle, Punctuation } from '../../components/PageTitle';
import { Paragraph } from '../../components/Paragraph';
import ParagraphLink from '../../components/ParagraphLink';
import { ImgDiv, ImgWrapper } from '../../components/ImgWrapper';
import Img from 'gatsby-image';

class ArticlePage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>
          Extraction in Ghana<Punctuation>.</Punctuation>
        </PageTitle>
        <Paragraph style={{ fontWeight: '600' }}>
          Evaluating conflict surrounding mineral extraction in Ghana: Assessing
          the spatial interactions of large and small-scale mining. The
          Extractive Industries and Society, Volume 3, Issue 2, April 2016,
          Pages 450-463, ISSN 2214-790X
        </Paragraph>
        <Paragraph>
          In January of 2016, the journal{' '}
          <span style={{ fontStyle: 'italic' }}>
            Extractive Industries and Society
          </span>{' '}
          accepted my master s thesis as an original research article. The work
          examines the spatial interactions of small and large-scale miners in
          south-central Ghana. A random forest classifier was used to identify
          small-scale mining in Landsat imagery, and these areas were then
          compared to the locations of large-scale mining concessions. The
          abstract and figures from the paper are below, and the{' '}
          <ParagraphLink to="https://www.sciencedirect.com/science/article/pii/S2214790X16300065">
            full text
          </ParagraphLink>{' '}
          can be found online.
        </Paragraph>
        <hr />
        <Paragraph smallFont>
          Since implementation of its Economic Recovery Program in 1983, Ghana’s
          extractive industries have come to account for 40% of the total value
          of the country’s exports. An adverse impact of this increase, however,
          has been increased extraction-related conflict due to heightened
          competition between large and small-scale operators over mineral-rich
          ands. This paper characterizes these conflicts in the south-central
          section of the country by mapping the spatial overlaps between large
          and small-scale miners. Classification tree analysis of 2013 and 2015
          Landsat- 7 and -8 imagery was used to identify small-scale mine sites.
          The overlaps between these sites and large-scale concessions are
          examined in the context of reported mining conflicts. Results reveal
          that there is a large amount of resource competition between the two
          parties, specifically, more than half (i.e., 52%) of the identified
          small-scale mining activity occurs within the boundaries of
          large-scale concessions. The northwest corner of the study area
          contains 50% of the identified overlaps; the southwest corner contains
          40%; and the northeast corner contains 10%. In most cases, these
          overlaps take place on prospecting concessions. The work illustrates
          how mapping and quantifying areas of spatial overlap between large and
          small-scale miners can help stakeholders implement more effective
          policy solutions.
        </Paragraph>
        <hr />
        <ImgWrapper>
          <ImgDiv>
            <Img sizes={this.props.data.fig1.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Figure 1:</span> Study area is
              shown along with large-scale mines, regional borders, rivers, and
              the major geological formations running throughout the area.
            </Paragraph>
          </ImgDiv>
          <ImgDiv>
            <Img sizes={this.props.data.fig2.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Figure 2:</span> Locations of
              high spatial resolution imagery from GeoEye-1, WorldView-1, and
              WorldView-2 used to perform map accuracy assessment on the
              small-scale mining maps (Landsat-7 and -8 images).
            </Paragraph>
          </ImgDiv>
          <ImgDiv>
            <Img sizes={this.props.data.fig3.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Figure 3:</span> Map of
              small-scale mining (SSM) activity derived from the classification
              of the Landsat-7 and -8 2013 and 2015 imagery in the context of
              large-scale concessions, large-scale mines, unofficial small-scale
              mining concessions, and unsuitable small-scale mining areas.
            </Paragraph>
          </ImgDiv>
          <ImgDiv>
            <Img sizes={this.props.data.fig4.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Figure 4:</span> Northwest
              region of the study area shown with the small-scale mining (SSM)
              derived from the 2013 and 2015 Landsat-7 and –-8 imagery in the
              context of the surrounding cities, large-scale mines, large-scale
              mining concessions, unofficial small-scale mining concessions, and
              unsuitable small-scale mining areas.
            </Paragraph>
          </ImgDiv>
          <ImgDiv>
            <Img sizes={this.props.data.fig5.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Figure 5:</span> Southwest
              region of the study area shown with the small-scale mining (SSM)
              derived from the 2013 and 2015 Landsat-7 and -8 imagery in the
              context of the surrounding cities, large-scale mines, large-scale
              mining concessions, unofficial small-scale mining concessions, and
              unsuitable small-scale mining areas.
            </Paragraph>
          </ImgDiv>
          <ImgDiv>
            <Img sizes={this.props.data.fig6.sizes} />
            <Paragraph smallFont>
              <span style={{ fontWeight: '600' }}>Figure 6:</span> Northeast
              region of the study area shown with the small-scale mining (SSM)
              derived from the 2013 and 2015 Landsat-7 and -8 imagery in the
              context of the surrounding cities, large-scale mines, large-scale
              mining concessions, unofficial small-scale mining concessions, and
              unsuitable small-scale mining areas.
            </Paragraph>
          </ImgDiv>
        </ImgWrapper>
      </div>
    );
  }
}

// eslint-disable-next-line
export const pageQuery = graphql`
  query articleImgsQuery {
    fig1: imageSharp(id: { regex: "/figure_1/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    fig2: imageSharp(id: { regex: "/figure_2/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    fig3: imageSharp(id: { regex: "/figure_3/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    fig4: imageSharp(id: { regex: "/figure_4/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    fig5: imageSharp(id: { regex: "/figure_5/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
    fig6: imageSharp(id: { regex: "/figure_6/" }) {
      sizes(maxWidth: 900) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default ArticlePage;
