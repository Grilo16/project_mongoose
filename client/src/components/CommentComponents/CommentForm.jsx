import { useState } from 'react'

const CommentForm = ({ selectedUser, editUser}) => {
      
    const [guestComment, setGuestComment] = useState('')

    
    const handleUserInput = (e)=>{
        setGuestComment(e.target.value)
    };
      
      const handleSubmit = (e)=>{
        e.preventDefault()        
        const guestId = selectedUser._id
        const updatedCommentsList = [...selectedUser.guestComments, guestComment]
        const patchObject = {guestComments: updatedCommentsList}
        editUser(guestId, patchObject)
   
        setGuestComment("")
      };

  return (
    <>
    <form onSubmit={handleSubmit}>

      <h3>Welcome {selectedUser.guestName}!</h3>

      <label htmlFor='guestComment'></label>
      <input onChange={handleUserInput} type='text' id='guestComment' value={guestComment} placeholder="Tell us your thoughts..." required/>

      <input type='submit' value='Save' id='save' />
    </form>
    </>
  )
}

export default CommentForm
