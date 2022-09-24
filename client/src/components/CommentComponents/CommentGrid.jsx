import CommentCard from "./CommentCard"

const CommentGrid = ({ comments, deleteComment }) => {
  if (!comments) return <h2>Loading, please hang around whilst we fetch all your amazing comments</h2>
  const CommentList = comments.map((comment) => {
    return (
      <CommentCard
        comment={comment}
        key={comment._id}
        deleteComment={deleteComment}
      />
    )
  })

  return <>{CommentList}</>
}

export default CommentGrid
