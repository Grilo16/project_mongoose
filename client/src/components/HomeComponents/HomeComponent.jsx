import React from 'react'
import UserSelector from './UserSelector'
import NewUser from './NewUser'

const Home = ({users, onUserSelected, addUserToState}) => {

    return (
        <>
        <h1>Home</h1>
        <div className='userselector'>
        <UserSelector users = {users} onUserSelected={onUserSelected}/>
        <NewUser addUserToState = {addUserToState} /> 
        </div>
        </>
    )
}

export default Home