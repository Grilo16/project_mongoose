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
                        [{id : 1, question : "This is question 1", answer:"This is answer 1"},
                        {id : 2, question : "This is question 2", answer:"This is answer 2"},
                        {id : 3, question : "This is question 3", answer:"This is answer 3"},
                        {id : 4, question : "This is question 4", answer:"This is answer 4"},
                        {id : 5, question : "This is question 5", answer:"This is answer 5"},]},
                        
                        {name: "heart", 
                        id : 2, //will be provided by database
                        "quiz" : 
                        [{id : 1, question : "This is question 1", answer:"This is answer 1"},
                        {id : 2, question : "This is question 2", answer:"This is answer 2"},
                        {id : 3, question : "This is question 3", answer:"This is answer 3"},
                        {id : 4, question : "This is question 4", answer:"This is answer 4"},
                        {id : 5, question : "This is question 5", answer:"This is answer 5"},]
                        } 
                        ]

                        // let listOfOrgans = 
                        // [{"id" : 1, "question" : "This is question 1", "answer":"This is answer 1"},
                        // {"id" : 2, "question" : "This is question 2", "answer":"This is answer 2"},
                        // {"id" : 3, "question" : "This is question 3", "answer":"This is answer 3"},
                        // {"id" : 4, "question" : "This is question 4", "answer":"This is answer 4"},
                        // {"id" : 5, "question" : "This is question 5", "answer":"This is answer 5"}]


                        // let listOfOrgans = 
                        // [1,2,3,4,5]
                        
 

const [organs, setOrgans] = useState(listOfOrgans)
console.log(organs)
console.log(typeof(organs))
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
