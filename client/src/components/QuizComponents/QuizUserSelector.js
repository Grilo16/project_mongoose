const QuizUserSelector = ({users, onUserSelected}) => {
    if(!users) return null

    const handleChange = (e) => {
        const chosenuser = users[e.target.value]
        onUserSelected(chosenuser)
    }

    const userOptions = users.map((user, index) =>{
        return <option value = {index} key = {index}>{user.guestName}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value = "">Select your name or enter name below if you are a new user</option>
            {userOptions}
        </select>
    )
}

export default QuizUserSelector