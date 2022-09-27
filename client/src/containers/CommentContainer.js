import { useEffect, useState } from "react";
import AddUser from "../components/CommentComponents/AddUser";
import CommentForm from "../components/CommentComponents/CommentForm";
import CommentGrid from "../components/CommentComponents/CommentGrid";
import Filter from "../components/CommentComponents/Filter";

const CommentContainer = ({users, selectedUser, editUser, addNewUser, addCommentToCommentDb, deleteCommentByID }) => {

  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);

  useEffect(() => {
    fetch('localhost:27017')
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
      <h1>Comments here please!</h1>
      <AddUser addNewUser={addNewUser}/>
      <hr/>
      <CommentForm editUser={editUser} selectedUser={selectedUser} addCommentToCommentDb={addCommentToCommentDb} />
      <hr/>
      <CommentGrid users={users} deleteCommentByID={deleteCommentByID} />
      <hr/>
      <Filter handleChange={filter}/>
    </div>
    </>
  );
}

export default CommentContainer