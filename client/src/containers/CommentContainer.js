import AddUser from "../components/CommentComponents/AddUser";
import CommentForm from "../components/CommentComponents/CommentForm";
import CommentGrid from "../components/CommentComponents/CommentGrid";

const CommentContainer = ({users, selectedUser, editUser, addNewUser, addCommentToCommentDb, deleteCommentByID }) => {

  return (
    <>
    <div>
      <h1>Comments here please!</h1>
      <AddUser addNewUser={addNewUser}/>
      <hr/>
      <CommentForm editUser={editUser} selectedUser={selectedUser} addCommentToCommentDb={addCommentToCommentDb} />
      <hr/>
      <CommentGrid users={users} deleteCommentByID={deleteCommentByID} />
    </div>
    </>
  );
}

export default CommentContainer