import React from 'react'
import LeaderBoard from './LeaderBoard'

const LeaderBoardItem = ({user}) => {

    const prize = () => {
        if (user.score > 1) {
            return true
        }
        else return false
    }

    return (

            <tr>
                <td>&#129351;	</td>
                <td>
                    {user.guestName}
                </td>
                <td>
                    {user.quizScore}
                </td>
            </tr>

    )
}

export default LeaderBoardItem