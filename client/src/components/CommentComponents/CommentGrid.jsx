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
    <h2>Comments:</h2>
    <div>{filteredComments}</div>
    {/* <div>All comments : {comments}</div> */}
      
      
    </>

      )
}

export default CommentGrid
