import { useState } from 'react'

const CommentForm = ({ selectedUser, editUser }) => {
      
    const [guestComment, setGuestComment] = useState('')

    
    const handleUserInput = (e)=>{
        setGuestComment(e.target.value)
    };
      
      const handleSubmit = (e)=>{
        e.preventDefault()        
        const guestId = selectedUser._id
        const patchObject = {guestComment: guestComment}
        editUser(guestId, patchObject)
      };

  return (
    <>
    <form onSubmit={handleSubmit}>

      <h3>Wellcome {selectedUser.guestName}</h3>
      <p>please leave a comment</p>

      <label htmlFor='guestComment'>Comment:</label>
      <input onChange={handleUserInput} type='text' id='guestComment' value={guestComment}  required/>

      <input type='submit' value='Save' id='save' />
    </form>
    </>
  )
}

export default CommentForm
