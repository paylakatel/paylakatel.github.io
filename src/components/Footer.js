import Link from 'gatsby-link';
import styled from 'styled-components';

const IconLink = styled(Link).attrs({
  className: 'pr3',
})`
  color: black;

  &:hover {
    color: black;
  }
`;

const Footer = styled.div.attrs({
  className: 'mt4',
})`
  text-align: ${props => (props.alignRight ? 'right' : 'left')};
`;
module.exports = { Footer, IconLink };
