import React from 'react'
import LeaderBoardItem from './LeaderBoardItem'

const LeaderBoard = ({users}) => {

    const leaderList = users.map((user) => {
        return <LeaderBoardItem key={user.guestName} user={user}/>
    })

    

        return (
                <>
                <div className='table-wrapper'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                    <td>{leaderList}</td>
                    </tr>
                </table>
                </div>
                </>

    )
}

export default LeaderBoard