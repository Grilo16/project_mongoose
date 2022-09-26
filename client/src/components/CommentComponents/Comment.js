const Comment = ({comment, deleteCommentByID}) => {

    return <>
    <li>{comment}</li>
    { <button /*onClick={() => deleteCommentByID(comment._id)}*/>Delete</button> }
    </>
}

export default Comment