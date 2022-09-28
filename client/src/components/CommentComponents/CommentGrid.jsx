import CommentCard from "./CommentCard"

const CommentGrid = ({users, deleteCommentFromUserList, nextFilteredUsers})=>{
  const filteredComments =  nextFilteredUsers.map((user)=>{
    return (
    <CommentCard user={user} key = {user._id} deleteCommentFromUserList={deleteCommentFromUserList}/>
    )
})

  //   const comments = users.map((user)=>{
  //     return (
  //     <CommentCard user={user} key = {user._id} deleteCommentFromUserList={deleteCommentFromUserList}/>
  //     )
  // })
  

  return (
    <>
    <div>Comments : {filteredComments}</div>
    {/* <div>All comments : {comments}</div> */}
      
      
    </>

      )
}

export default CommentGrid
