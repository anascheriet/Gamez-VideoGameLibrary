import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetail } from '../actions/detailsActions';
import "../styles/game.scss"

export const Game = ({ name, released, image, id }) => {

    //Load game details
    const dispatch = useDispatch();
    const loadDetailHandlr = () => {
        //Hide home scroll bar
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }
    return (
        <div onClick={loadDetailHandlr} className="styledGame">
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image} alt="img" />
            </Link>

        </div>
    )
};
