

import React from 'react'

function NLink({route}) {

    return (
        
            <a href={route.pageLink}>{route.pageName}</a>
        

    )
}

export default NLink