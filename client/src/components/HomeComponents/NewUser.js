const { useState } = require("react")
const { postUser } = require("../repositories/user_repository")

const UserForm = ({addUserToState}) => {

    const [formData, setFormData] = useState({guestComments : '', quizScore: 0})

    const onChange = (e) => {
        formData[e.target.id] = e.target.value
        setFormData(formData)
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