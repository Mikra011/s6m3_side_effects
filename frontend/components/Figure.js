import React from "react"

export default function Figure({ imgUrl, figDate }) {
    return (
        <figure>
            <img src={imgUrl} />
            <figcaption>Picture taken on {figDate}</figcaption>
        </figure>
    )
}
