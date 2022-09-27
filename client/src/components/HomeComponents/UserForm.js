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
            guestComments: [],
            quizScore: 0,
        } 
        
        addNewUser(userObject)

    }

    return (
        <>
        <div>Welcome to Project Mongoose! If you are a new user please enter your name below and then select from the dropdown. Existing users please select from the dropdown</div>
        <form className="" onSubmit={handleSubmit}>
        <label htmlFor="guestName">Name:</label>
        <input  onChange={handleUserInput} type="text" id="guestName" value={userInput} required />
        <input type="submit" value="Save New User" id="save"/>
        </form>
        
        </>

    )
}

export default UserForm