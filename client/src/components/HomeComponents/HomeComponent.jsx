import React from 'react'
import LeaderBoard from './LeaderBoard'
import UserSelector from './UserSelector'
import NewUser from './UserForm'
import RandomQuote from './RandomQuote'

const Home = ({users, onUserSelected, setSelectedUser, addNewUser , quote}) => {

    return (
      <>
        <h1>Home</h1>
        <RandomQuote quote={quote}/>
        <LeaderBoard users={users} />
        <div className='userselector'>
          <UserSelector users={users} onUserSelected={onUserSelected} />
          <NewUser addNewUser={addNewUser} />
        </div>
      </>
    )
}

export default Home