import styled from 'styled-components';

const ImgWrapper = styled.div.attrs({
  className: 'flex flex-wrap justify-between f5',
})``;

const ImgDiv = styled.div.attrs({
  className: 'pa1 w-100 w-50-l',
})``;

// const ImgTitle = styled.span.attrs({
//   className: '',
// })`
//   font-family: ${props => props.theme.displayFont};
//   font-weight: ${props => props.theme.displayFontWeight};
// `;

// const ImgCaption = styled.span`
//   font-size: 1.1rem;
// `;

// const StyledImage = styled(Img).attrs({
//   className: 'ba b--black-10 br1',
// })`
//   max-width: 100%;
// `;

module.exports = { ImgWrapper, ImgDiv };
