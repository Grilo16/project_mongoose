import React from 'react'
import './NavBar.css'
import NLink from './NavLink'



const NavBar = ({ navPages }) => {

    const navLinks = navPages.map((route) => {
        return (
            <>
            <NLink route={route}/>
            <hr/>
            </>
        )
    })


    return (

        <>
        <nav className='nav-bar'>
        {navLinks}
        </nav>
        </>
    ) 
}

export default NavBar