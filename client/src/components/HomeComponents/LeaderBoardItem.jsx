import React from 'react'
import LeaderBoard from './LeaderBoard'

const LeaderBoardItem = ({user}) => {

    return (

            <>
                <td>
                    {user.guestName}
                </td>
                <td>
                    {user.quizScore}
                </td>
            </>

    )
}

export default LeaderBoardItem