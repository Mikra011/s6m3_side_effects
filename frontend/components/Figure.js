import React from "react"
import styled from "styled-components"

const StyledFig = styled.figure`
    max-width: 70%;
    text-align: center;
    margin: auto;
    img {
        border-radius: 10px;
    }
    
    figcaption {
        font-style: italic;
    }
`

export default function Figure({ imgUrl, figDate }) {
    return (
        <StyledFig>
            <img src={imgUrl} />
            <figcaption>Picture taken on {figDate}</figcaption>
        </StyledFig>
    )
}
