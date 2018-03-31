import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Paragraph from "./Paragraph"
import ParagraphLink from "./ParagraphLink"

const StyledThumb = styled.div.attrs({
    className: "pa1"
})``

class Thumb extends React.Component {
    render() {
        return (
            <StyledThumb>
                <ParagraphLink to={this.props.link}>
                    {this.props.name}
                </ParagraphLink>
            </StyledThumb>
        )
    }
}

export default Thumb