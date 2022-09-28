import './NavBar.css'
import { Link } from 'react-router-dom'
import React from 'react'


function NLink({route}) {

    return (

            <button>
                <Link className='burger-link' to={route.pageLink}> {route.pageName} </Link>
            </button>

    )
}

export default NLink