import QuizList from "../components/QuizComponents/QuizList"
import QuizDetails from "../components/QuizComponents/QuizDetails"
import '../Quiz.css';
import { useState, useEffect } from "react";
import QuizUserSelector from "../components/QuizComponents/QuizUserSelector";
import UserScoreDetails from "../components/QuizComponents/UserScoreDetails";

const QuizContainer = ({organs, organToShow, showOrgan, users, onUserSelected, selectedUser}) => {
    
    //local storage no longer needed now we have database

    // const [savedScores, setSavedScores] = useState(() => {
    //     const savedScoresJSON = localStorage.getItem('saved scores list')
    //     console.log(savedScoresJSON)
    //     if (savedScoresJSON == null) {
    //         return []}
    //     else {
    //         return JSON.parse(savedScoresJSON)
    //     }    
    //     }
    // )

    // useEffect(()=> {
    //     localStorage.setItem('saved scores list', JSON.stringify(savedScores))
    //     }, [savedScores])

    return (
        <>
        <div className='userselector'>
        <QuizUserSelector users = {users} onUserSelected={onUserSelected}/>
        </div>
        <div className='userdetails'>
        <UserScoreDetails selectedUser={selectedUser}/>
        </div>
    <div className="quizcontainer">
    <QuizList organs={organs} showOrgan={showOrgan}/>
    <QuizDetails organToShow={organToShow}/>
    </div>
    </>
    
 )
}

export default QuizContainer