import React from 'react'
import LeaderBoard from './LeaderBoard'
import UserSelector from './UserSelector'
import NewUser from './UserForm'


const Home = ({users, onUserSelected, setSelectedUser, addNewUser}) => {

    return (
        <>
        <h1>Home</h1>
        <LeaderBoard users={users}/>
        <div className='userselector'>
        <UserSelector users = {users} onUserSelected={onUserSelected}/>
        <NewUser addNewUser={addNewUser} /> 
        </div>
        </>
    )
}

export default Home