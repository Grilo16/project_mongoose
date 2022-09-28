import React from 'react'
import LeaderBoard from './LeaderBoard'
import UserSelector from './UserSelector'
import NewUser from './UserForm'
import RandomQuote from './RandomQuote'
import './homepage.css'

const Home = ({users, onUserSelected, setSelectedUser, addNewUser , quote, selectedUser}) => {

    return (
      <>
        <h1>The Ear-Replacable Biology App</h1>
        <div className='homecontainer'>
            <div className='welcomeblurb'>
        <p>You'll heartly believe how good it is!</p>
        <p>&#129504; You can learn about the organs of the body on the <b>organ</b> page. &#129504;<br></br> &#127942;	Take a <b>quiz</b> and record your score in the leaderboard! &#127942;	 <br></br>&#128172; And don't forget to leave us a <b>comment</b> with anything you found difficult to understand or suggestions for improvements of the site.&#128172; <br></br>Thanks!</p>
            </div>
            <RandomQuote />
        <div className='sidebyside'>
        <div className='userselector'>
            <NewUser addNewUser={addNewUser} />
            <UserSelector users={users} onUserSelected={onUserSelected} selectedUser={selectedUser} />
        </div>
        <LeaderBoard users={users} />
        </div>
        <div className='inspirationalquote'>
        
        </div>
        </div>
      </>
    )
}

export default Home