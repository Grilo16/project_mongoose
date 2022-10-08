import Comment from './Comment'
const CommentCard = ({ user, deleteCommentFromUserList }) => {
  const listOfComments = user.guestComments.map((comment, indexOfComment) => {
    return (
      <Comment
        key={indexOfComment}
        user={user}
        comment={comment}
        deleteCommentFromUserList={deleteCommentFromUserList}
      />
    )
  })

  return (
    <>
      {listOfComments.length ? (
        <>
          <div>
            <ul>{listOfComments}</ul>
          </div>
        </>
      ) : null}
    </>
  )
}

export default CommentCard
