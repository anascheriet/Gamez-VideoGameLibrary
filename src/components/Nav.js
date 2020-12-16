import { motion } from 'framer-motion'
import React from 'react'
import logo from "../img/gamepad.svg"
import "../styles/Nav.scss"

export const Nav = () => {
    return (
        <div>
            <motion.div className="StyledNav">
                <motion.div className="Logo">
                    <img src={logo} alt="image" />
                    <h1>Gamez</h1>
                </motion.div>
                <div className="search"></div>
                <input type="text" />
                <button>Search</button>
            </motion.div>
        </div>
    )
}
