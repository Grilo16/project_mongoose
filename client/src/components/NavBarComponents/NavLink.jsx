import './NavBar.css'

import React from 'react'

function NLink({route}) {

    return (

            <a className='nav-link' href={route.pageLink}>{route.pageName}</a>

    )
}

export default NLink