import NavBar from "./components/NavBarComponents/NavBar";
import NLink from "./components/NavBarComponents/NavLink";
import Home from "./components/HomeComponents/HomeComponent";
import About from "./components/AboutComponents/AboutComponent";
import Comment from "./components/CommentComponents/CommentGrid";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';
import QuizContainer from './containers/QuizContainer';
import OrgansContainer from './containers/OrganContainer';
import CommentContainer from "./containers/CommentContainer";
import organRepo from "./repositories/organ_repository"
import { getComments ,deleteComments } from "./Comment_services/Comment_services";

import './App.css';


function App() {



const seeder = ()=>{
let listOfOrgans = [
  {
    name: 'Brain',
    id: 1, //will be provided by database
    info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    url: 'https://cutewallpaper.org/21/brain-no-background/Managed-Futures-Brain-Brain-Icon-Transparent-Background-.png',
    quiz: [
      {id : 1, question : "Question 1 for brain", answer:"Answer 1 for brain"},
      {id : 2, question : "Question 2 for brain", answer:"Answer 2 for brain"},
      {id : 3, question : "Question 3 for brain", answer:"Answer 3 for brain"},
      {id : 4, question : "Question 4 for brain", answer:"Answer 4 for brain"},
      {id : 5, question : "Question 5 for brain", answer:"Answer 5 for brain"}
    ],
  },

  {
    name: 'Heart',
    info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/611px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    id: 2, //will be provided by database
    quiz: [
      {id : 1, question : "Question 1 for heart", answer:"Answer 1 for heart"},
      {id : 2, question : "Question 2 for heart", answer:"Answer 2 for heart"},
      {id : 3, question : "Question 3 for heart", answer:"Answer 3 for heart"},
      {id : 4, question : "Question 4 for heart", answer:"Answer 4 for heart"},
      {id : 5, question : "Question 5 for heart", answer:"Answer 5 for heart"}
    ],
  },

  {
    name: 'Liver',
    info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    url: 'https://spng.pngfind.com/pngs/s/311-3114925_image-showing-human-lungs-human-lung-hd-png.png',
    id: 3, //will be provided by database
    quiz: [
      {id : 1, question : "Question 1 for liver", answer:"Answer 1 for liver"},
      {id : 2, question : "Question 2 for liver", answer:"Answer 2 for liver"},
      {id : 3, question : "Question 3 for liver", answer:"Answer 3 for liver"},
      {id : 4, question : "Question 4 for liver", answer:"Answer 4 for liver"},
      {id : 5, question : "Question 5 for liver", answer:"Answer 5 for liver"}
    ],
  },
]
listOfOrgans.map(organRepo.addOrganToDb)
} 

const clearDb = ()=>{
  organs.map(organ => organRepo.deleteOrganByID(organ._id))
}

const initialUsers = [{guestName: "Katie", guestComment: "", quizScore : 0}, {guestName : "Mike", guestComment: "", quizScore : 0}]

const [users, setUsers] = useState(initialUsers)
const [selectedUser, setSelectedUser] = useState('')

const [organs, setOrgans] = useState([])
const [organToShow, setOrganToShow] = useState('')

useEffect(()=>{
  organRepo.getOrganList()
  .then(setOrgans)
}, [])

const onUserSelected = (user) => {
  setSelectedUser(user)
}

const showOrgan = function(organID){
  const organ = organs.filter((organ) => organ.id === organID)
  setOrganToShow(organ)     
};

const navPages = [
  {pageName: "Home", pageLink: "/"},
  {pageName: "Organs", pageLink: "/organs"},
  {pageName: "Quizes", pageLink: "/quizzes"},
  {pageName: "Comment", pageLink: "/comment"},
  {pageName: "About", pageLink: "/about"},
]


const [comments, setComments] = useState([]);
useEffect(() =>{
  getComments()
  .then((data) =>{
    setComments(data)
  })
}, [])


const addComments = (comment) => {
  let temp = comments.map(comment => comment);
  temp.push(comment);
  setComments(temp)
}

const deleteComment = (id) => {
  deleteComment(id).then(() => {
    let temp = comments.map((g) => g)
    const toDel = comments.map((g) => g._id).indexOf(id)
    temp.splice(toDel, 1)
    setComments(temp)
  })
}

const addUserToState = (user) => {
  let temp = users.map((u) => u);
  temp.push(user);
  setUsers(temp);
};

  return (
    <div className="App" id="outer-container">
    <NavBar navPages={navPages} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
    <button onClick={seeder}>Seed db</button>
    <button onClick={clearDb}>Clear Db</button>
      <Router>
        <Routes>
          <Route path="/" element={< Home users ={users} onUserSelected ={onUserSelected}/>} />
          <Route path="/organs" element={<OrgansContainer organs={organs} organToShow={organToShow} showOrgan={showOrgan}/>}/>
          <Route path="/about" element={< About />}/>
          <Route path='/quizzes' element={<QuizContainer organs={organs} organToShow={organToShow} showOrgan={showOrgan} users={users} setUsers={setUsers} onUserSelected={onUserSelected} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>}/>

          <Route path="/comment" element={< CommentContainer comment={comments} deleteComment={deleteComment} addComment={addComments}  />}/>


          {/* <Route element={<Feedback />} path='/Feedback' /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;
