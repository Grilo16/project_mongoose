import React from 'react'
import './NavBar.css'
import NLink from './NavLink'



const NavBar = ({ routes }) => {

    const navLinks = routes.map((route) => {
        return (
            <>
            <NLink route={route}/>
            <br/>
            <hr/>
            </>
        )
    })


    return (

    <nav className='nav-bar'>
    {navLinks}
    </nav>

    ) 
}

export default NavBar