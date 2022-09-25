import React from 'react'
import LeaderBoardItem from './LeaderBoardItem'

const LeaderBoard = ({initialUsers}) => {

    const leaderList = initialUsers.map((user) => {
        return <LeaderBoardItem key={user.guestName} user={user}/>
    })

    

        return (
                <>
                <div>LeaderBoard</div>
                <ul>
                    {leaderList}
                </ul>
                </>

    )
}

export default LeaderBoard