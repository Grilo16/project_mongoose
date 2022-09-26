const { useState } = require("react")

const UserForm = ({addNewUser}) => {

    const [userInput, setUserInput] = useState("")


    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const userObject = {
            guestName: userInput,
            guestComment: "",
            quizScore: 0,
        } 
        
        addNewUser(userObject)

    }

    return (
        <form className="" onSubmit={handleSubmit}>
        <label htmlFor="guestName">Name:</label>
        <input  onChange={handleUserInput} type="text" id="guestName" value={userInput} required />
        <input type="submit" value="Save New User" id="save"/>
        </form>

    )
}

export default UserForm