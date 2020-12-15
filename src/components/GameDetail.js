import { motion } from 'framer-motion';
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import "../styles/gameDetails.scss"

export const GameDetail = () => {

    //Data
    const { game, screenshots, isLoading } = useSelector(state => state.gameDetail);

    //Url redirector
    const history = useHistory();

    const exitCardHandlr = (e) => {
        const element = e.target;
        if (element.classList.contains("card-shadow")) {
            document.body.style.overflow = "auto";
            history.push('/');
        }
    }
    return (
        <>
            {!isLoading && (
                <motion.div className="card-shadow" onClick={exitCardHandlr}>
                    <motion.div className="detail">
                        <motion.div className="stats">
                            <motion.div className="rating">
                                <h3>{game.name}</h3>
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
                            <img src={game.background_image} alt="image" />
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
