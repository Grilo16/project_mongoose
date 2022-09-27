const Comment = ({comment, deleteCommentFromUserList}) => {

    return <>
    <li>{comment}</li>
    { <button onClick={() => deleteCommentFromUserList(comment)}>Delete</button> }
    </>
}

export default Comment