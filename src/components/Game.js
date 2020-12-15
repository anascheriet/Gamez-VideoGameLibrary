import { motion } from 'framer-motion';
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


        /* the id of the involved animated components should have the same type(here string) */
        <motion.div layoutId={id.toString()} onClick={loadDetailHandlr} className="styledGame">
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`h3 ${id.toString()}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${id.toString()}`} src={image} alt="img" />
            </Link>

        </motion.div>
    )
};
