import CommentCard from "./CommentCard"

const CommentGrid = ({users, deleteCommentFromUserList})=>{

  const comments = users.map((user)=>{
    return (
    <CommentCard user={user} key = {user._id} deleteCommentFromUserList={deleteCommentFromUserList}/>
    )
})


  return (
    <>
      {comments}
    </>

      )
}

export default CommentGrid
