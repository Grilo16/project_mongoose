import Comment from "./Comment"
const CommentCard = ({user, deleteCommentByID}) => {
    
    const listOfComments = (
        user.guestComments.map((comment) => { 
        return (
        <Comment comment={comment} deleteCommentByID={deleteCommentByID}/>)
        }))
    


    return(
        <>
            <h2>Comments</h2>
            <p>Name: {user.guestName}</p>
            <div>Comments: <ul>{listOfComments}</ul></div>
            



        </>
    )



}

export default CommentCard