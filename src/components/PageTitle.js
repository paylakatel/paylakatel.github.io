import styled from 'styled-components';

const PageTitle = styled.h1.attrs({
  className: 'f1 f-subheadline-l',
})`
  font-family: ${props => props.theme.displayFont};
  font-weight: ${props => props.theme.displayFontWeight};
  text-align: ${props => (props.alignRight ? 'right;' : 'left;')};
  margin-top: 1rem;
`;

const Punctuation = styled.span`
  color: ${props => props.theme.accentColor};
`;

const SectionHeader = styled.h3.attrs({
  className: 'f3 f3-ns',
})`
  font-family: ${props => props.theme.displayFont};
  font-weight: ${props => props.theme.displayFontWeight};
`;

module.exports = { PageTitle, Punctuation, SectionHeader };

//f1-ns ml6-ns
//${props => (props.LargeTopMargin ? '2rem' : '2rem')};
