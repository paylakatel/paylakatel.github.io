import styled from "styled-components"

const ImgWrapper = styled.div.attrs({
    className: "flex flex-wrap"
  })``
  
const ImgDiv = styled.div.attrs({
    className: "mr4 mb4 w-100 w-40-l"
    })``

const ImgTitle = styled.span.attrs({
    className: ""
})`
    font-family: ${props => props.theme.displayFont};
    font-weight: ${props => props.theme.displayFontWeight};
`

const ImgCaption = styled.span`
    font-size: 1.1rem;
`

module.exports = { ImgWrapper, ImgDiv }