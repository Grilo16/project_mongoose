const UserSelector = ({users, onUserSelected}) => {
    if(!users) return null

    const handleChange = (e) => {
        const chosenuser = users[e.target.value]
        onUserSelected(chosenuser)
    }

    const userOptions = users.map((user, index) =>{
        return <option value = {index} key = {user}>{user.guestName}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange} >
            <option  value = "">Please select your name</option>
            {userOptions}
        </select>
    )
}

export default UserSelector