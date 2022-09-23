import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {



    return (

    <ul className='navbar'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/body-stuff">Body Stuff</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>

    ) 
}

export default NavBar