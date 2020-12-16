import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../actions/gameActions'
import logo from "../img/gamepad.svg"
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
            <motion.div className="StyledNav">
                <motion.div onClick={clearSearched} className="Logo">
                    <img src={logo} alt="image" />
                    <h1>Gamez</h1>
                </motion.div>
                <form className="search">
                    <input type="text" onChange={inputChangeHandler} />
                    <button onClick={searchGameHandler} type="submit">Search</button>
                </form>

            </motion.div>
        </div>
    )
}
