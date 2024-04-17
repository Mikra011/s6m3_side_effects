import React from "react"
import Figure from "./Figure"
import styled from "styled-components"

const StyledCard = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;

  h2, p {
    margin-bottom: 20px;
    text-align: center;
  }
`

export default function Card({ title, text, imgUrl, date }) {
    return (
      <StyledCard className='card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <Figure 
        imgUrl={imgUrl}
        figDate={date}
        />
      </StyledCard>
    )
  }
  