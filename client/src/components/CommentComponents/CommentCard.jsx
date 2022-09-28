import Comment from "./Comment"
const CommentCard = ({user, deleteCommentFromUserList}) => {
    

    const listOfComments = (
        
        user.guestComments.map((comment) => { 
        return (

        <Comment comment={comment} deleteCommentFromUserList={deleteCommentFromUserList}/>)
        }))
    
      

    return (
      <>
        {listOfComments.length ? (
          <>
            <p>Name:{user.guestName} </p>
            <div>
              Comments: <ul>{listOfComments}</ul>
            </div>
          </>
        ) : null}
      </>
    )



}

export default CommentCard