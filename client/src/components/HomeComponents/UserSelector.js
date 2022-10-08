import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const UserSelector = ({ users, onUserSelected, selectedUser }) => {
  if (!users) return null

  const handleChange = (e) => {
    const chosenuser = users[e.target.value]
    onUserSelected(chosenuser)
    document.getElementById('hidden-button').click()
  }

  const userOptions = users.map((user, index) => {
    return (
      <option value={index} key={user}>
        {user.guestName}
      </option>
    )
  })

  return (
    <>
      <p>
        <b>Existing users</b> please select from the dropdown :{' '}
      </p>
      <select defaultValue='' onChange={handleChange}>
        <option value=''>Please select your name</option>
        {userOptions}
      </select>

      <Popup
        trigger={
          <button id='hidden-button'>
            <img src='https://previews.123rf.com/images/larryrains/larryrains1606/larryrains160600079/57535604-heart-talking.jpg' />
          </button>
        }
        position='right center'
      >
        <div>Hello {selectedUser.guestName}, you handsome devil!</div>
      </Popup>
    </>
  )
}

export default UserSelector
