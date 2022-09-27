import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const UserSelector = ({users, onUserSelected, selectedUser}) => {
    if(!users) return null

    const handleChange = (e) => {
        const chosenuser = users[e.target.value]
        onUserSelected(chosenuser)
        document.getElementById('button').click()
    }

    const userOptions = users.map((user, index) =>{
        return <option value = {index} key = {user}>{user.guestName}</option>
    })

    return (
        <>
        <select defaultValue="" onChange={handleChange}>
            <option value = "">Please select your name</option>
            {userOptions}
        </select>

        <Popup trigger={<button  id='button'>Button to be styled</button>} position='right center'>
        <div>User has changed to {selectedUser.guestName}</div>
        </Popup>
        
        </>
    )
}

export default UserSelector