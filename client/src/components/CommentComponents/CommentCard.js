const CommentCard = ({comment, deleteComment}) => {


    return(
        <>
            <h2>Comments{comment.guestName}</h2>
            <p>Name:</p>{comment.guestComment}
            <p>Comment:</p>
            <button onClick={()=>deleteComment(comment._id)}>delete</button>



        </>
    )



}

export default CommentCard