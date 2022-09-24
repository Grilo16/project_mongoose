import './NavBar.css'

import React from 'react'

function NLink({route}) {

    return (

            <button><a className='nav-link' href={route.pageLink}>{route.pageName}</a></button>

    )
}

export default NLink