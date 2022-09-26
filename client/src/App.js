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
import commentRepo from "./repositories/comment_repository";


import './App.css';


function App() {


const seeder = ()=>{
let listOfOrgans = [
  {
    name: 'Brain',
    id: 1, //will be provided by database
    info: 'The brain controls complex behaviour. It is made of billions of interconnected neurones and has different regions that carry out different functions. There are four main areas in the brain: 1. The cerebrum (the outer layer is called the cerebral cortex), which is split into two hemispheres and is highly folded. It controls intelligence, personality, conscious thought and high-level functions, such as language and verbal memory. 2. The cerebellum, which controls balance, co-ordination of movement and muscular activity. 3. The medulla, which controls unconscious activities such as heart rate and breathing rate, 4. The hypothalamus, which is the regulating centre for temperature and water balance within the body.',
    url: 'https://cutewallpaper.org/21/brain-no-background/Managed-Futures-Brain-Brain-Icon-Transparent-Background-.png',
    quiz: [
      {id : 1, question : "How many areas does the brain have?", answer:"four"},
      {id : 2, question : "Which area controls intelligence, personality, conscious thought and high-level functions?", answer:"cerebrum"},
      {id : 3, question : "Which area controls body co-ordination?", answer:"cerebellum"},
      {id : 4, question : "Which area controls unconscious activities?", answer:"medulla"},
      {id : 5, question : "What does the hypothalamus regulate within the body?", answer:"temperature and water balance"}
    ],
  },

  {
    name: 'Heart',
    info: 'The heart is a muscular organ. Its function is to pump blood. The right side pumps blood through the pulmonary circuit, while the left side pumps blood through the systemic circuit. A septum separates the right and left sides. The left side has thicker walls because it needs to put the blood under higher pressure than the right side. In general, blood flows into the heart from a vein, goes into an atrium, then a ventricle, and out through an artery. The heart contains valves to prevent the blood flowing backwards: the right side has a tricuspid valve (a valve with three flaps), the left side has a bicuspid valve (a valve with two flaps). Both sides have semi-lunar valves (at the entrances to the pulmonary artery and aorta).',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/611px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    id: 2, //will be provided by database
    quiz: [
      {id : 6, question : "Which circuit does the right side of the heart pump blood through?", answer:"Pulmonary circuit"},
      {id : 7, question : "Which circuit does the left side of the heart pump blood through?", answer:"systemic circuit"},
      {id : 8, question : "Which valve is on the right hand side?", answer:"tricuspid"},
      {id : 9, question : "How many flaps does this valve have?", answer:"three"},
      {id : 10, question : "Which valve do both sides have in common?", answer:"semi lunar valve"}
    ],
  },

  {
    name: 'Liver',
    info: 'The liver does not secrete any enzymes, but it plays an important role in digestion, and then processing food molecules that have been absorbed.The liver produces bile. Bile emulsifies lipids, breaking them up physically into tiny droplets. Tiny droplets have a much larger surface area, over which lipases can work, than larger pieces, or drops of lipid. Contains sodium hydrogencarbonate, which is an alkali. It neutralises stomach acid and produces the optimum pH for pancreatic enzymes. Is produced in the liver, but stored and concentrated in the gall bladder.',
    url: 'https://media.istockphoto.com/vectors/human-liver-anatomy-vector-id479374171?k=20&m=479374171&s=612x612&w=0&h=ERpbOKjo4j_UG9_UoEZuBLuEU4uKBHF_24ui8WwX1jQ=',
    id: 3, //will be provided by database
    quiz: [
      {id : 11, question : "Does the liver secrete any enzymes?", answer:"no"},
      {id : 12, question : "What does the liver produce?", answer:"bile"},
      {id : 13, question : "What is the advantage of breaking lipids into tiny droplets?", answer:"larger surface area"},
      {id : 14, question : "Is sodium hydrogencardonate an acid or alkali?", answer:"alkali"},
      {id : 15, question : "What does sodium hydrogencardonate neutralise? ", answer:"stomach acid"}
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
  {pageName: "Quizzes", pageLink: "/quizzes"},
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

const addCommentToCommentDb = (commentObject)=>{
  commentRepo.addCommentToDb(commentObject)
}

const findUserByID = function(userID){
  const userByID = users.filter((user) => user._id == userID)
  return userByID
}


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
          <Route path='/quizzes' element={<QuizContainer organs={organs} organToShow={organToShow} showOrgan={showOrgan} users={users} setUsers={setUsers} onUserSelected={showUser} selectedUser={selectedUser} setSelectedUser={setSelectedUser} findUserByID={findUserByID} editUser={editUser}/>}/>

          <Route path="/comment" element={< CommentContainer users={users} selectedUser={selectedUser} editUser={editUser} addNewUser={addNewUser} addCommentToCommentDb={addCommentToCommentDb} />}/>


          <Route path="/about" element={< About />}/>
          
          {/* <Route element={<Feedback />} path='/Feedback' /> */}
          

        </Routes>
      </Router>
    </div>
  )
}

export default App;
