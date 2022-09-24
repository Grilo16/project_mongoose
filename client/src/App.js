import NavBar from "./components/NavBarComponents/NavBar";
import Home from "./components/HomeComponents/HomeComponent";
import About from "./components/AboutComponents/AboutComponent";
import Comment from "./components/CommentComponents/CommentComponent";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';
import QuizContainer from './containers/QuizContainer';
import OrgansContainer from './containers/OrganContainer';
import organRepo from "./repositories/organ_repository"
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

const [organs, setOrgans] = useState([])
const [organToShow, setOrganToShow] = useState('')

useEffect(()=>{
  organRepo.getOrganList()
  .then(setOrgans)
}, [])


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




  return (
    <>
    <NavBar navPages={navPages}/>
    <button onClick={seeder}>Seed db</button>
    <button onClick={clearDb}>Clear Db</button>
      <Router>
        <Routes>
         <Route path="/" element={< Home/>} />
         <Route path="/organs" element={<OrgansContainer organs={organs} organToShow={organToShow} showOrgan={showOrgan}/>}/>
          <Route path="/about" element={< About />}/>
          <Route path="/comment" element={< Comment />}/>
          <Route path='/quizzes' element={<QuizContainer organs={organs} organToShow={organToShow} showOrgan={showOrgan} />}/>
          {/* <Route element={<Feedback />} path='/Feedback' /> */}
        </Routes>
      </Router>
</>
  )
}

export default App;
