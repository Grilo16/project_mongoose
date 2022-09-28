import React from 'react'
import LeaderBoardItem from './LeaderBoardItem'

const LeaderBoard = ({users}) => {

    const leaderList = users.map((user) => {
        return <LeaderBoardItem key={user._id} user={user}/>
    })


        return (
                <>
                <div className='leaderboard'>
                <h2>Leaderboard</h2>
                <table >
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Score</th>
                            
                        </tr>
                    </tbody>
                    <tbody>
                            {leaderList}
                    </tbody>
                </table>
                </div>
                
                </>

    )
}

export default LeaderBoard