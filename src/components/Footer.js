import React from "react"
import StyledContact from "./utils/StyledContact"

const Footer = (props, {children}) => {
    return(
        <div>
            <StyledContact>
                {children}
            </StyledContact>
        </div>
    )
}

export default Footer