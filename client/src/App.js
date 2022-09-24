import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import { useState } from 'react';
import QuizContainer from './containers/QuizContainer';

const Test = function(){
  return (
    <h1>Testing</h1>
  )
};
const Test1 = function(){
  return (
    <h3>Testing</h3>
  )
};

function App() {

let listOfOrgans = [{name: "brain", 
                        id : 1, //will be provided by database
                        quiz : 
                        [{id : 1, question : "Question 1 for brain", answer:"Answer 1 for brain"},
                        {id : 2, question : "Question 2 for brain", answer:"Answer 2 for brain"},
                        {id : 3, question : "Question 3 for brain", answer:"Answer 3 for brain"},
                        {id : 4, question : "Question 4 for brain", answer:"Answer 4 for brain"},
                        {id : 5, question : "Question 5 for brain", answer:"Answer 5 for brain"},]},
                        
                        {name: "heart", 
                        id : 2, //will be provided by database
                        "quiz" : 
                        [{id : 1, question : "Question 1 for heart", answer:"Answer 1 for heart"},
                        {id : 2, question : "Question 2 for heart", answer:"Answer 2 for heart"},
                        {id : 3, question : "Question 3 for heart", answer:"Answer 3 for heart"},
                        {id : 4, question : "Question 4 for heart", answer:"Answer 4 for heart"},
                        {id : 5, question : "Question 5 for heart", answer:"Answer 5 for heart"},]
                        } 
                        ]
                        
const [organs, setOrgans] = useState(listOfOrgans)
const [organToShow, setOrganToShow] = useState('')

const showOrgan = function(organID){
  const organ = organs.filter((organ) => organ.id === organID)
  setOrganToShow(organ)     
};

  return (

    <div className="App">
    {/* <NavBar/> */}
    <Router>
      <Routes>
        <Route element={<Test/>} path="/home"/>
        <Route element={<Test1/>} path="/home1"/>
        <Route element={<QuizContainer organs={organs} organToShow={organToShow} showOrgan={showOrgan}/>} path="/quizzes"/>
      </Routes>

    </Router>
    </div>
      
  );
}

export default App;
