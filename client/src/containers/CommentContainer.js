import { useEffect, useState } from "react";
import CommentForm from "../components/CommentComponents/CommentForm";
import CommentGrid from "../components/CommentComponents/CommentGrid";
import Filter from "../components/CommentComponents/Filter";

const CommentContainer = ({users, selectedUser, editUser, addNewUser, addCommentToCommentDb, deleteCommentFromUserList }) => {

  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/comment/all')
    .then(res => res.json())
    .then((comments) => {
      setComments(comments)
      setFilteredComments(comments)
    })
  }, []);

  const filter = (searchTerm) => {
    const lowerSearch = searchTerm.toLowerCase()
    const filteredComments = comments.filter((comment) => {
      return comment.guestComment.toLowerCase().indexOf(lowerSearch) > -1;
    })
    setFilteredComments(filteredComments)
  }

  return (
    <>
    <div>
      <h2>Please leave your comments here!</h2>
      <hr/>
      
      <CommentForm editUser={editUser} selectedUser={selectedUser} addCommentToCommentDb={addCommentToCommentDb} />
      <hr/>
      <Filter handleChange={filter}/>

      <CommentGrid users={users} deleteCommentFromUserList={deleteCommentFromUserList} comments={filteredComments} />
      <hr/>
      

    </div>
    </>
  );
}

export default CommentContainer