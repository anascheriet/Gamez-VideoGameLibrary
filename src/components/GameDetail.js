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
import emptyStar from "../img/star-empty.svg";
import fullStar from "../img/star-full.svg";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

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
            case "macOS": return apple;
            case "PlayStation 2": return playstation;
            case "PlayStation 3": return playstation;
            case "PlayStation 4": return playstation;
            case "PlayStation 5": return playstation;
            case "Nintendo Switch": return nintendo;
            case "Xbox One": return xbox;
            case "Xbox 360": return xbox;
            case "Xbox": return xbox;
            case "Xbox Series S/X": return xbox;
            default: return gamepad;
        }
    }

    //get start icon from game rating
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} alt="star" src={fullStar}></img>)
            }
            else {
                stars.push(<motion.img key={i} alt="star" src={emptyStar}></motion.img>)
            }
        }
        return stars;
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
                                {getStars()}
                            </motion.div>
                            <motion.div className="info">
                                <h3>Platforms</h3>
                                <motion.div className="platforms">
                                    {game.platforms.map(data => (
                                        <img src={getPlatform(data.platform.name)} alt={data.platform.name} title={data.platform.name} />
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

                        <AliceCarousel autoPlay autoPlayInterval="3000">
                            {screenshots.map(screen => (
                                <img className="sliderimg" src={resizeImage(screen.image, 640)} key={screen.id} alt="screenshot" />
                            ))}
                        </AliceCarousel>

                    </motion.div>
                </motion.div>
            )}

        </>
    )
} 
