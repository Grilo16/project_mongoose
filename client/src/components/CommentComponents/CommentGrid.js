import CommentCard from './CommentCard'

const CommentGrid = ({ deleteCommentFromUserList, nextFilteredUsers }) => {
  const filteredComments = nextFilteredUsers.map((user) => {
    return (
      <CommentCard
        user={user}
        key={user._id}
        deleteCommentFromUserList={deleteCommentFromUserList}
      />
    )
  })

  return (
    <>
      <h2>Comments:</h2>
      <div>{filteredComments}</div>
    </>
  )
}

export default CommentGrid
