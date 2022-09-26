import React from 'react'
import LeaderBoardItem from './LeaderBoardItem'

const LeaderBoard = ({users}) => {

    const leaderList = users.map((user) => {
        return <LeaderBoardItem key={user.guestName} user={user}/>
    })

    

        return (
                <>
                
                <table >
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                    <td>{leaderList}</td>
                    </tr>
                </table>
                </>

    )
}

export default LeaderBoard