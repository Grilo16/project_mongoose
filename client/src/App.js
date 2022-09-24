import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import { useState } from 'react';
import QuizContainer from './containers/QuizContainer';
import OrgansContainer from './containers/OrganContainer';

const Home = function(){
  return (
    <h1>Howdy Im a homepage for a science app </h1>
  )
}

const Feedback = function () {
  return <h3>And I am the feedback page</h3>
}

function App() {

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
                        
const [organs, setOrgans] = useState(listOfOrgans)
const [organToShow, setOrganToShow] = useState('')

const showOrgan = function(organID){
  const organ = organs.filter((organ) => organ.id === organID)
  setOrganToShow(organ)     
};

  return (
    <div className='App'>
      {/* <NavBar/> */}
      <Router>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route
            element={
              <OrgansContainer
                organs={organs}
                organToShow={organToShow}
                showOrgan={showOrgan}
              />
            }
            path='/organs'
          />

          {/* <Route element={<Feedback />} path='/Feedback' /> */}
          <Route
            element={
              <QuizContainer
                organs={organs}
                organToShow={organToShow}
                showOrgan={showOrgan}
              />
            }
            path='/quizzes'
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
