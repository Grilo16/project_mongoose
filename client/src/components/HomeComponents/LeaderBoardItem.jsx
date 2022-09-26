import React from 'react'
import LeaderBoard from './LeaderBoard'

const LeaderBoardItem = ({user}) => {

    return (

        <div>
            <tr>
                <td>{user.guestName}</td>
                <td>{user.quizScore}</td>
            </tr>
        </div>

    )
}

export default LeaderBoardItem