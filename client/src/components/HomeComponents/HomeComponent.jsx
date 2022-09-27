import React from 'react'
import LeaderBoard from './LeaderBoard'
import UserSelector from './UserSelector'
import NewUser from './UserForm'
import RandomQuote from './RandomQuote'

const Home = ({users, onUserSelected, setSelectedUser, addNewUser , quote}) => {

    return (
      <>
        <h1>Home</h1>
        <RandomQuote />
        <LeaderBoard users={users} />
        <div className='userselector'>
            <NewUser addNewUser={addNewUser} />
            <UserSelector users={users} onUserSelected={onUserSelected} />
        </div>
      </>
    )
}

export default Home