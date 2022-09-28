import './Comment.css'

const Comment = ({comment, deleteCommentFromUserList, user}) => {

    return <>
    <li className="comment-item">
     <b>{user.guestName}</b> : {comment}
    </li>
    <span>
    { <button className="del-button" onClick={() => deleteCommentFromUserList(comment)}>Delete</button> }
    </span>
    </>
}

export default Comment