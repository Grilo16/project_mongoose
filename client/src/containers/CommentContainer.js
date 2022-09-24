import CommentCard from "../components/CommentComponents/CommentCard";
import CommentForm from "../components/CommentComponents/CommentForm";
import CommentGrid from "../components/CommentComponents/CommentGrid";

const CommentContainer = ({comments, deleteComment , addComment }) => {
  return (
    <>
    <div className="App">
      <h1>Comments here please!</h1>
      <CommentForm addComment={addComment}/>
      <CommentGrid comments={comments}  deleteComment={deleteComment}/>
    </div>
    </>
  );
}

export default CommentContainer