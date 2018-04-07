import React from "react";
import styled from "styled-components"
import tachyons from "tachyons"
import siteTheme from "./siteTheme"

const PageTitle = styled.h1.attrs({
    className: "pa2 f2 f1-ns ml6-ns",
})`
    font-family: ${props => props.theme.displayFont};
    font-weight: ${props => props.theme.displayFontWeight};
    text-align: ${props => props.alignRight ? 'right;' : 'left;'};
    margin: 1rem;
    margin-top: ${props => props.TopMargin ? '8rem' : '2rem'};
`

const Punctuation = styled.span`
    color: ${props => props.theme.accentColor};
`

const SectionHeader = styled.h3.attrs({
    className: "f3 f3-ns",
})`
    font-family: ${props => props.theme.displayFont};
    font-weight: ${props => props.theme.displayFontWeight};
`

module.exports = { PageTitle, Punctuation, SectionHeader }
