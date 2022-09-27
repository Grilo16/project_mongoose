import AddUser from "../components/CommentComponents/AddUser";
import CommentForm from "../components/CommentComponents/CommentForm";
import CommentGrid from "../components/CommentComponents/CommentGrid";

const CommentContainer = ({users, selectedUser, editUser, addNewUser, addCommentToCommentDb, deleteCommentFromUserList }) => {

  return (
    <>
    <div>
      <h1>Comments here please!</h1>
      <AddUser addNewUser={addNewUser}/>
      <hr/>
      <CommentForm editUser={editUser} selectedUser={selectedUser} addCommentToCommentDb={addCommentToCommentDb} />
      <hr/>
      <CommentGrid users={users} deleteCommentFromUserList={deleteCommentFromUserList} />
    </div>
    </>
  );
}

export default CommentContainer