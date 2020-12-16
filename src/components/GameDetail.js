import { motion } from 'framer-motion';
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import "../styles/gameDetails.scss"
import { resizeImage } from '../util';
import playstation from "../img/playstation.svg"
import xbox from "../img/xbox.svg";
import apple from "../img/apple.svg";
import nintendo from "../img/nintendo.svg";
import gamepad from "../img/gamepad.svg";
import steam from "../img/steam.svg";

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

    //get platform icon 
    const getPlatform = (platform) => {
        switch (platform) {
            case "PC": return steam;
            case "iOS": return apple;
            case "PlayStation 4": return playstation;
            case "PlayStation 5": return playstation;
            case "Nintendo Switch": return nintendo;
            case "Xbox One": return xbox;
            case "Xbox Series S/X": return xbox;
            default: return gamepad;
        }
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
                                            <img src={getPlatform(data.platform.name)} alt={data.platform.name} title={data.platform.name}/>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div className="media">
                            <motion.img layoutId={`image ${pathId}`} src={resizeImage(game.background_image, 640)} alt="image" />
                        </motion.div>
                        <div className="description">
                            <p>{game.description_raw}</p>
                        </div>
                        <div className="gallery">
                            {screenshots.map(screen => (
                                <img src={resizeImage(screen.image, 640)} key={screen.id} alt="image" />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}

        </>
    )
} 
