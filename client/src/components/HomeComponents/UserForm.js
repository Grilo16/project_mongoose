const { useState } = require('react')

const UserForm = ({ addNewUser }) => {
  const [userInput, setUserInput] = useState('')

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
      <h2>Please select a user</h2>
      <p>
        A user must be selected in order to record your quiz score and leave
        comments.
      </p>
      <p>
        <b>New users</b> please enter your name below and then select your name
        from the dropdown.{' '}
      </p>
      <form className='' onSubmit={handleSubmit}>
        <label htmlFor='guestName'>Name:</label>
        <input
          onChange={handleUserInput}
          type='text'
          id='guestName'
          value={userInput}
          required
        />
        <input type='submit' value='Save New User' id='save' />
      </form>
    </>
  )
}

export default UserForm
