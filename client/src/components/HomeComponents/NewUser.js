const { useState } = require("react")
const { postUser } = require("../repositores/user_repository")

const UserForm = ({addUserToState}) => {

    const [formData, setFormData] = useState({
        guestName : '',
        guestComments : '',
        quizScore: 0
    })

    const onChange = (e) =>{
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postUser(formData).then((data) => {addUserToState(data)})
    }

    return (
        <form className="" onSubmit={handleSubmit} method="post">
        <label htmlFor="guestName">Name:</label>
        <input  onChange={onChange} type="text" id="guestName" v-model="name" required/>
        <input type="submit" value="Save New User" id="save"/>
        </form>

    )
}

export default UserForm