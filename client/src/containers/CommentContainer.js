import { useEffect, useState } from 'react'
import CommentForm from '../components/CommentComponents/CommentForm'
import CommentGrid from '../components/CommentComponents/CommentGrid'
import Filter from '../components/CommentComponents/Filter'

const CommentContainer = ({
  users,
  selectedUser,
  editUser,
  addNewUser,
  addCommentToCommentDb,
  deleteCommentFromUserList,
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = users.map((user) => {
    const nextUserComments = user.guestComments.filter((comment) =>
      comment.includes(searchTerm)
    )
    return {
      ...user,
      guestComments: nextUserComments,
    }
  })

  const updateSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase())
  }

  return (
    <>
      <div>
        <h2>Please leave your comments here!</h2>
        <hr />

        <CommentForm
          editUser={editUser}
          selectedUser={selectedUser}
          addCommentToCommentDb={addCommentToCommentDb}
        />
        <hr />
        <Filter handleChange={updateSearchTerm} />

        <CommentGrid
          users={users}
          deleteCommentFromUserList={deleteCommentFromUserList}
          nextFilteredUsers={filteredUsers}
        />
        <hr />
      </div>
    </>
  )
}

export default CommentContainer
