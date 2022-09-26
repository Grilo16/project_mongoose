import React from 'react'
import LeaderBoardItem from './LeaderBoardItem'

const LeaderBoard = ({users}) => {

    const leaderList = users.map((user) => {
        return <LeaderBoardItem key={user.guestName} user={user}/>
    })

    

        return (
                <>
                
                <table className='leaderboard'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            {leaderList}
                        </tr>
                    </tbody>
                </table>
                
                </>

    )
}

export default LeaderBoard