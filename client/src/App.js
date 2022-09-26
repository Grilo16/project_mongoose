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
import userRepo from "./repositories/user_repository"


import './App.css';


function App() {

  const organFacts = [
    
    {
      id: "1",
      organName: "Brain",
      funFact: "The brain stem connects the brain to the spinal cord. It is also responsible for all of the things you don't normally think about (like your heart beating, breathing, and digesting food)"
    },
    {
      id: "2",
      organName: "Brain",
      funFact: "Most nerves in your body connect to the spinal cord, but there are 12 nerves that come from the brain itself. These control some of the most important functions in your body, including vision, smell, facial movement, and heart rate."
    },
    {
      id: "3",
      organName: "Brain",
      funFact: "The brain is split into two halves; each half controls the OPPOSITE side of the body."
    },
    {
      id: "4",
      organName: "Liver",
      funFact: "Sometimes people think of cholesterol as a bad thing, but cholesterol is important for building cells, and making certain chemicals called hormones. Hormones are like messengers in your body, and without them the different parts of your body wouldn't be able to talk to each other very well."
    },
    {
      id: "5",
      organName: "Liver",
      funFact: "Bilirubin, a chemical that our bodies make and our liver makes safe, is also filtered by our kidneys, which is what gives our urine the yellow color."
    },
    {
      id: "6",
      organName: "Liver",
      funFact: "The liver stores excess sugars that you eat, or that are in your blood, in the form of a chemical called glycogen. Glycogen absorbs nearly 6 times its weight in water, so your liver is also important for water storage. When your body needs more sugars (like between meals), your liver breaks down the glycogen into glucose, which the rest of your body uses for fuel. The liver does this for the rest of your body, as the liver itself can't use glucose for energy."
    },
    {
      id: "7",
      organName: "Heart",
      funFact: "There are four special valves in the human heart. These valves only allow blood to go one way, so when the heart squeezes the blood out, it goes in the right direction."
    },
    {
      id: "8",
      organName: "Heart",
      funFact: "Your heart beats 100,000 times a day, 36,500,000 times a year. That's over 1 billion heart beats if you live past the age of 30! Over the course of the expected lifetime, your heart will beat about 2.5 billion times!"
    },
    {
      id: "9",
      organName: "Heart",
      funFact: "The right side of your heart pumps blood up into your lungs and into the left side of the heart; the left side of the heart pumps blood out to your entire body."
    }
  ]

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




const navPages = [
  {pageName: "Home", pageLink: "/"},
  {pageName: "Organs", pageLink: "/organs"},
  {pageName: "Quizes", pageLink: "/quizzes"},
  {pageName: "Comment", pageLink: "/comment"},
  {pageName: "About", pageLink: "/about"},
]

const showUser = (user) => {
  setSelectedUser(user)
}

const showOrgan = function(organID){
  const organ = organs.filter((organ) => organ.id === organID)
  setOrganToShow(organ)     
};

const [users, setUsers] = useState([])
const [selectedUser, setSelectedUser] = useState({})

const [organs, setOrgans] = useState([])
const [organToShow, setOrganToShow] = useState("")

const addNewUser = (userObject)=>{
  userRepo.addUserToDb(userObject)
  .then(setUsers)
};

const editUser = (id, patchObject)=>{
  userRepo.editUserById(id, patchObject)
  .then(setUsers)
};


useEffect(()=>{
  organRepo.getOrganList()
  .then(setOrgans)
  userRepo.getAllUsers()
  .then(setUsers)
}, [])

  return (
    <div className="App" id="outer-container">
    <button onClick={seeder}>Seed db</button>
    <button onClick={clearDb}>Clear Db</button>
      <Router>
      <NavBar navPages={navPages} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <Routes>




          <Route path="/" element={< Home users={users} onUserSelected={showUser}  setSelectedUser={setSelectedUser} addNewUser={addNewUser}/>}/>
          <Route path="/organs" element={<OrgansContainer organs={organs} organToShow={organToShow} showOrgan={showOrgan}/>}/>
          <Route path="/about" element={< About />}/>
          <Route path='/quizzes' element={<QuizContainer organs={organs} organToShow={organToShow} showOrgan={showOrgan} users={users} setUsers={setUsers} onUserSelected={showUser} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>}/>

          <Route path="/comment" element={< CommentContainer users={users} selectedUser={selectedUser} editUser={editUser} addNewUser={addNewUser} />}/>


          <Route path="/about" element={< About />}/>
          
          {/* <Route element={<Feedback />} path='/Feedback' /> */}
          

        </Routes>
      </Router>
    </div>
  )
}

export default App;
