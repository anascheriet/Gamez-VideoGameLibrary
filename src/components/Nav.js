import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../actions/gameActions'
import { fadeIn } from '../animations'
import logo from "../img/joystick.svg"
import "../styles/Nav.scss"

export const Nav = () => {

    //dispatch the action
    const dispatch = useDispatch();

    //Inpout state
    const [textInput, setTextInput] = useState("");

    const inputChangeHandler = (e) => {
        setTextInput(e.target.value);
    }

    const clearSearched = () => {
        dispatch({ type: "Clear_Searched" });
    }

    //search function
    const searchGameHandler = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    }
    return (
        <div>
            <motion.div className="StyledNav" variants={fadeIn} initial="hidden" animate="show">
                <motion.div onClick={clearSearched} className="Logo">
                    <img src={logo} alt="image" />
                    <h1>Gamez</h1>
                </motion.div>
                <form className="search" onSubmit={(e) => searchGameHandler(e)}>
                    <input type="text" onChange={inputChangeHandler} />
                    <button type="submit">Search</button>
                </form>

            </motion.div>
        </div>
    )
}
