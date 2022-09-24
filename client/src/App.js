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
      { id: 1, question: 'This is question 1', answer: 'This is answer 1' },
      { id: 2, question: 'This is question 2', answer: 'This is answer 2' },
      { id: 3, question: 'This is question 3', answer: 'This is answer 3' },
      { id: 4, question: 'This is question 4', answer: 'This is answer 4' },
      { id: 5, question: 'This is question 5', answer: 'This is answer 5' },
    ],
  },

  {
    name: 'Heart',
    info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/611px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    id: 2, //will be provided by database
    quiz: [
      { id: 1, question: 'This is question 1', answer: 'This is answer 1' },
      { id: 2, question: 'This is question 2', answer: 'This is answer 2' },
      { id: 3, question: 'This is question 3', answer: 'This is answer 3' },
      { id: 4, question: 'This is question 4', answer: 'This is answer 4' },
      { id: 5, question: 'This is question 5', answer: 'This is answer 5' },
    ],
  },

  {
    name: 'Liver',
    info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    url: 'https://spng.pngfind.com/pngs/s/311-3114925_image-showing-human-lungs-human-lung-hd-png.png',
    id: 2, //will be provided by database
    quiz: [
      { id: 1, question: 'This is question 1', answer: 'This is answer 1' },
      { id: 2, question: 'This is question 2', answer: 'This is answer 2' },
      { id: 3, question: 'This is question 3', answer: 'This is answer 3' },
      { id: 4, question: 'This is question 4', answer: 'This is answer 4' },
      { id: 5, question: 'This is question 5', answer: 'This is answer 5' },
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

          {/* <Route element={<Feedback />} path='/Feedback' />
          <Route
            element={
              <QuizContainer
                organs={organs}
                organToShow={organToShow}
                showOrgan={showOrgan}
              />
            }
            path='/quizzes' */}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
