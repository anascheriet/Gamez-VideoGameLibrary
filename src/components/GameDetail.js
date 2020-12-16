import { motion } from 'framer-motion';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import detailsActions from '../actions/detailsActions';
import "../styles/gameDetails.scss"

export const GameDetail = ({ pathId }) => {

    //Data
    const { game, screenshots, isLoading } = useSelector(state => state.gameDetail);

    //Url redirector
    const history = useHistory();

    //const dispatch = useDispatch();

    const exitCardHandlr = (e) => {
        const element = e.target;
        if (element.classList.contains('card-shadow')) {
            document.body.style.overflow = "auto";
            history.push('/');
            //dispatch(detailsActions.exitcard());
        }
    }

    const stopevent = (e) => {
        //make game detail unclickable
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    return (
        <>
            {!isLoading && (
                <motion.div
                    className="card-shadow" onClick={exitCardHandlr}>
                    <motion.div onClick={stopevent}
                        /* I added the layoutId because framer motion needs an id for each component it uses */
                        layoutId={pathId} className="detail">
                        <motion.div className="stats">
                            <motion.div className="rating">
                                <motion.h3 layoutId={`h3 ${pathId}`}>{game.name}</motion.h3>
                                <p>Rating: {game.rating}</p >
                            </motion.div>
                            <motion.div className="info">
                                <h3>Platforms</h3>
                                <motion.div className="platforms">
                                    {game.platforms.map(data => (
                                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div className="media">
                            <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt="image" />
                        </motion.div>
                        <div className="description">
                            <p>{game.description_raw}</p>
                        </div>
                        <div className="gallery">
                            {screenshots.map(screen => (
                                <img src={screen.image} key={screen.id} alt="image" />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}

        </>
    )
} 
