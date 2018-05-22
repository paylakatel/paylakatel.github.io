import styled from 'styled-components';

// create styled paragraph element with alignRight property
const Paragraph = styled.p.attrs({
  className: 'f3 lh-copy',
})`
  font-family: ${props => props.theme.paragraphFont};
  font-weight: ${props => props.theme.paragraphFontWeight};
  text-align: ${props => (props.alignRight ? 'right;' : 'left;')};
  max-width: ${props => (props.maxWidth ? '40rem' : 'none')};
`;

const Highlight = styled.span`
  color: ${props => props.theme.accentColorLight};
  margin: 0;
  padding: 0;
`;

module.exports = { Paragraph, Highlight };
