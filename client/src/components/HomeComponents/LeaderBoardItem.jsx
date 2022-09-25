import React from 'react'

const LeaderBoardItem = ({user}) => {

    return (

        <div>
            <li>
                <h4>{user.guestName}</h4>
                <h4>{user.quizScore}</h4>
            </li>
        </div>

    )
}

export default LeaderBoardItem