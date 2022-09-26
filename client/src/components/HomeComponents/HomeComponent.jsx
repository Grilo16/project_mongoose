import React from 'react'
import UserSelector from './UserSelector'
import NewUser from './UserForm'

const Home = ({users, onUserSelected, setSelectedUser, addNewUser}) => {

    return (
        <>
        <h1>Home</h1>
        <div className='userselector'>
        <UserSelector users = {users} onUserSelected={onUserSelected}/>
        <NewUser addNewUser={addNewUser} /> 
        </div>
        </>
    )
}

export default Home