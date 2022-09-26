import AddUser from "../components/CommentComponents/AddUser";
import CommentForm from "../components/CommentComponents/CommentForm";
import CommentGrid from "../components/CommentComponents/CommentGrid";

const CommentContainer = ({users, selectedUser, editUser, addNewUser }) => {

  return (
    <>
    <div>
      <h1>Comments here please!</h1>
      <AddUser addNewUser={addNewUser}/>
      <hr/>
      <CommentForm editUser={editUser} selectedUser={selectedUser}/>
      <hr/>
      <CommentGrid users={users} />
    </div>
    </>
  );
}

export default CommentContainer