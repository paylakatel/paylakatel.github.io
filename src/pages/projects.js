import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import ParagraphLink from '../components/ParagraphLink';
import styled from 'styled-components';
import { PageTitle, Punctuation } from '../components/PageTitle';

const ProjectsWrapper = styled.div.attrs({
  className: 'flex flex-wrap',
})``;

const Project = styled.div.attrs({
  className: 'mr4 mb4',
})``;

const ProjectImg = styled(Img).attrs({
  className: 'ba b--black-10 br1',
})`
  max-width: 100%;
`;

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        <PageTitle>
          Projects<Punctuation>.</Punctuation>
        </PageTitle>

        <ProjectsWrapper>
          <Project>
            <Link to="projects/article">
              <ProjectImg
                resolutions={this.props.data.articleThumb.resolutions}
              />
            </Link>
            <ParagraphLink to="/projects/article">
              Extraction in Ghana
            </ParagraphLink>
          </Project>

          <Project>
            <Link to="projects/earth-images/">
              <ProjectImg
                resolutions={this.props.data.earthImgThumb.resolutions}
              />
            </Link>
            <ParagraphLink to="projects/earth-images/">
              Earth Images
            </ParagraphLink>
          </Project>
        </ProjectsWrapper>
      </div>
    );
  }
}

// eslint-disable-next-line
export const pageQuery = graphql`
  query ProjectsThumbsQuery {
    articleThumb: imageSharp(id: { regex: "/article.png/" }) {
      resolutions(width: 300) {
        ...GatsbyImageSharpResolutions
      }
    }
    earthImgThumb: imageSharp(id: { regex: "/earth_images.jpg/" }) {
      resolutions(width: 300) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;

export default ProjectList;
