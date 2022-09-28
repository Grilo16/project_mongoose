import { useState } from 'react'

const CommentForm = ({ selectedUser, editUser, addCommentToCommentDb}) => {
      
    const [guestComment, setGuestComment] = useState('')

    
    const handleUserInput = (e)=>{
        setGuestComment(e.target.value)
    };
      
      const handleSubmit = (e)=>{
        e.preventDefault()        
        const guestId = selectedUser._id
        // addCommentToCommentDb(guestComment)
        selectedUser.guestComments.push(guestComment)
        const updatedCommentsList = selectedUser.guestComments
        const patchObject = {guestComments: updatedCommentsList}
        editUser(guestId, patchObject)
        addCommentToCommentDb({guestComments: guestComment})
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
