import { useState } from 'react'
import { postComment } from '../../Comment_services/Comment_services'

const CommentForm = ({ addComment }) => {
  const [guestName, setGuestName] = useState('')
  const [guestComment, setGuestComment] = useState('')


  const handleGuestNameChange = (event) => setGuestName(event.target.value)
  const handleGuestComment = (event) => setGuestComment(event.target.value)


  const handleSubmit = (e) => {
    e.preventDefault()
    const comment = {
      guestName,
      guestComment,

    }

    postComment(comment).then((result) => addComment(result))

    setGuestName('')
    setGuestComment('')

  }

  return (
    <form className='' onSubmit={handleSubmit} method='post'>
      <label htmlFor='guestName'>Guest Name:</label>
      <input
        onChange={handleGuestNameChange}
        value={guestName}
        type='text'
        id='guestName'
        required
      />

      <label htmlFor='guestComment'>Comment:</label>
      <input
        onChange={handleGuestComment}
        value={guestComment}
        type='text'
        id='guestComment'
        required
      />



      <input type='submit' value='Save' id='save' />
    </form>
  )
}

export default CommentForm
