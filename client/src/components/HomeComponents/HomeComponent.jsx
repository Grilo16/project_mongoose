import React from 'react'
import LeaderBoard from './LeaderBoard'


const Home = ({users}) => {

    return (
        <>
        <h1>Home</h1>
        <LeaderBoard users={users}/>
        </>
    )
}

export default Home