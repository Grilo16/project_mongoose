import { useState } from "react";

const AddUser = ({addNewUser})=>{

    const [userName, setUserName] = useState("")


    const handleAddUser = (e)=>{
        e.preventDefault()
        const user = {guestName: userName, guestComment: "", quizScore: 0}
        addNewUser(user)
    };

    const handleUserInput = (e)=>{
        setUserName(e.target.value)
    };

    return(
        <form onSubmit={handleAddUser}>
            <input onChange={handleUserInput} type="text" name="" id="user-name" value={userName}/>
            <br />
            <button type="submit">Create New User</button>
        </form>
    )
};

export default AddUser