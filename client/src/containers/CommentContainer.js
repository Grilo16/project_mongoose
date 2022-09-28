import { useEffect, useState } from "react";
import CommentForm from "../components/CommentComponents/CommentForm";
import CommentGrid from "../components/CommentComponents/CommentGrid";
import Filter from "../components/CommentComponents/Filter";

const CommentContainer = ({users, selectedUser, editUser, addNewUser, addCommentToCommentDb, deleteCommentFromUserList }) => {

  const [usersWithMatchingComments, setUsersWithMatchingComments] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/user/all')
    .then(res => res.json())
    .then((searchedUsers) => {
      setSearchedUsers(searchedUsers)
      setUsersWithMatchingComments(searchedUsers)
    })
    // .then((users) => {
    //   setComments(comments)
    //   setFilteredComments(comments)
    // })
  }, []);

  const filter = (searchTerm) => {
    const lowerSearch = searchTerm.toLowerCase()
    console.log(lowerSearch);
    console.log(searchedUsers);
    // const newFilteredComments = []
    const nextFilteredUsers = searchedUsers.map(user => {
      const nextUserComments = user.guestComments.filter((comment) => comment.includes(lowerSearch)
        )
        return {
          ...user,
          guestComments: nextUserComments
        }
      })
      console.log(nextFilteredUsers);
      setUsersWithMatchingComments(nextFilteredUsers)
  }

  return (
    <>
    <div>
      <h1>Comments here please!</h1>
      <hr/>
      
      <CommentForm editUser={editUser} selectedUser={selectedUser} addCommentToCommentDb={addCommentToCommentDb} />
      <hr/>
      <Filter handleChange={filter}/>

      <CommentGrid users={users} deleteCommentFromUserList={deleteCommentFromUserList} nextFilteredUsers={usersWithMatchingComments} />
      <hr/>
      

    </div>
    </>
  );
}

export default CommentContainer