import React from "react"
import Figure from "./Figure"

export default function Card({ title, text, imgUrl, date }) {
    return (
      <div className='card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <Figure 
        imgUrl={imgUrl}
        figDate={date}
        />
      </div>
    )
  }
  