import CommentCard from "./CommentCard"

const CommentGrid = ({users})=>{

  const comments = users.map((user)=>{
    return (
    <CommentCard user={user}/>
    )
})


  return (
    <>
      {comments}
    </>

      )
}

export default CommentGrid
