import CommentCard from "./CommentCard"

const CommentGrid = ({users, deleteCommentFromUserList, filteredComments})=>{

  const comments = users.map((user)=>{
    return (
    <CommentCard user={user} key = {user._id} deleteCommentFromUserList={deleteCommentFromUserList}/>
    )
})


  return (
    <>
    <div>Filtered comments : {filteredComments}</div>
    <div>All comments : {comments}</div>
      
      
    </>

      )
}

export default CommentGrid
