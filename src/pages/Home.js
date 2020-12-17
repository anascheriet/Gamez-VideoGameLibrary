import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { loadGames } from "../actions/gameActions";
import { fadeIn } from '../animations';
import { Game } from '../components/Game';
import { GameDetail } from '../components/GameDetail';
import "../styles/home.scss"



export const Home = () => {
    //Get current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, []);

    //Get State
    const { popular, newGames, upcoming, searched } = useSelector(state => state.games);
    return (
        <motion.div className="GameList" variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade">
                {/* wrap all the components that will be transitioning*/}
                <AnimatePresence>
                    {/* The component that will be animated should have a conditional toggle, pathId here */}
                    {pathId && <GameDetail pathId={pathId} />}
                </AnimatePresence>
                {searched.length ? (
                    <div className="searchedGames">
                        <h2>Searched Games</h2>
                        <div className="Games">
                            {searched.map(game => (
                                <Game key={game.id} name={game.name} released={game.released}
                                    id={game.id} image={game.background_image} />
                            ))}
                        </div>
                    </div>) : ''}
                <h2>Upcoming Games</h2>
                <div className="Games">
                    {upcoming.map(game => (
                        <Game key={game.id} name={game.name} released={game.released}
                            id={game.id} image={game.background_image} />
                    ))}

                </div>

                <h2>New Games</h2>
                <div className="Games">
                    {newGames.map(game => (
                        <Game key={game.id} name={game.name} released={game.released}
                            id={game.id} image={game.background_image} />
                    ))}
                </div>
                <h2>Popular Games</h2>
                <div className="Games">
                    {popular.map(game => (
                        <Game key={game.id} name={game.name} released={game.released}
                            id={game.id} image={game.background_image} />
                    ))}
                </div>
            </AnimateSharedLayout>
        </motion.div>
    )
}
