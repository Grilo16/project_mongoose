import QuizList from "../components/QuizComponents/QuizList"
import QuizDetails from "../components/QuizComponents/QuizDetails"
import '../Quiz.css';
import { useState, useEffect } from "react";
import UserScoreDetails from "../components/QuizComponents/UserScoreDetails";

const QuizContainer = ({organs, organToShow, showOrgan, users, onUserSelected, selectedUser, setSelectedUser}) => {

    return (
        <>
        <div className='userdetails'>
        <UserScoreDetails selectedUser={selectedUser}/>
        </div>
    <div className="quizcontainer">
    <QuizList organs={organs} showOrgan={showOrgan}/>
    <QuizDetails organToShow={organToShow} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
    </div>
    </>
    
 )
}

export default QuizContainer