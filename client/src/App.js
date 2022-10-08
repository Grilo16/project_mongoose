import NavBar from './components/NavBarComponents/NavBar'
import NLink from './components/NavBarComponents/NavLink'
import Home from './components/HomeComponents/HomeComponent'
import About from './components/AboutComponents/AboutComponent'
import Comment from './components/CommentComponents/CommentGrid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import QuizContainer from './containers/QuizContainer'
import OrgansContainer from './containers/OrganContainer'
import CommentContainer from './containers/CommentContainer'
import organRepo from './repositories/organ_repository'
import userRepo from './repositories/user_repository'
import commentRepo from './repositories/comment_repository'

function App() {




  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState({})

  const [organs, setOrgans] = useState([])
  const [organToShow, setOrganToShow] = useState('')

  useEffect(() => {
    organRepo.getOrganList().then(setOrgans)
    userRepo.getAllUsers().then(setUsers)
  }, [])

  const showUser = (user) => {
    setSelectedUser(user)
  }

  const showOrgan = function (organID) {
    const organ = organs.filter((organ) => organ.id === organID)
    setOrganToShow(organ)
  }

  const addNewUser = (userObject) => {
    userRepo.addUserToDb(userObject).then(setUsers)
  }

  const editUser = (id, patchObject) => {
    userRepo.editUserById(id, patchObject).then((users) => {
      setUsers(users)
      setSelectedUser({ ...selectedUser, ...patchObject })
    })
  }

  const deleteCommentFromUserList = (comment, user) => {
    if (JSON.stringify(user) === JSON.stringify(selectedUser)) {
      const commentIndex = user.guestComments.indexOf(comment)
      user.guestComments.splice(commentIndex, 1)
      editUser(user._id, { guestComments: user.guestComments })
    }
  }

  const findUserByID = function (userID) {
    const userByID = users.filter((user) => user._id == userID)
    return userByID
  }

  return (
    <div className='App' id='outer-container'>


      <Router>
        <NavBar
          
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                users={users}
                onUserSelected={showUser}
                setSelectedUser={setSelectedUser}
                addNewUser={addNewUser}
                selectedUser={selectedUser}
              />
            }
          />
          <Route
            path='/organs'
            element={
              <OrgansContainer
                organs={organs}
                organToShow={organToShow}
                showOrgan={showOrgan}
              />
            }
          />
          <Route path='/about' element={<About />} />
          <Route
            path='/quizzes'
            element={
              <QuizContainer
                organs={organs}
                organToShow={organToShow}
                showOrgan={showOrgan}
                users={users}
                setUsers={setUsers}
                onUserSelected={showUser}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                findUserByID={findUserByID}
                editUser={editUser}
              />
            }
          />

          <Route
            path='/comment'
            element={
              <CommentContainer
                users={users}
                selectedUser={selectedUser}
                editUser={editUser}
                addNewUser={addNewUser}
                deleteCommentFromUserList={deleteCommentFromUserList}
              />
            }
          />

          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
