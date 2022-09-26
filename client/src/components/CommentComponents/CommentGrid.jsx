import CommentCard from "./CommentCard"

const CommentGrid = ({users, deleteCommentByID})=>{

  const comments = users.map((user)=>{
    return (
    <CommentCard user={user} key = {user._id} deleteCommentByID={deleteCommentByID}/>
    )
})


  return (
    <>
      {comments}
    </>

      )
}

export default CommentGrid
