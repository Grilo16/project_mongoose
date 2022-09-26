import React from 'react'
import UserSelector from './UserSelector'
import NewUser from './NewUser'
// import './HomeComponent.css'

const Home = ({users, onUserSelected}) => {

    return (
        <>
        <h1>Home</h1>
        <div className='userselector'>
        <UserSelector users = {users} onUserSelected={onUserSelected}/>
        <NewUser users = {users} /> 
        </div>
        </>
    )
}

export default Home