import React from 'react'
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailsActions';
import "../styles/game.scss"

export const Game = ({ name, released, image, id }) => {

    //Load game details
    const dispatch = useDispatch();
    const loadDetailHandlr = () => {
        dispatch(loadDetail(id));
    }
    return (
        <div onClick={loadDetailHandlr} className="styledGame">
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt="img" />
        </div>
    )
};
