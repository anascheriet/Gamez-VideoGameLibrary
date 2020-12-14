import React from 'react'
import "../styles/game.scss"

export const Game = ({ name, released, image, id }) => {
    return (
        <div className="styledGame">
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt="img" />
        </div>
    )
};
