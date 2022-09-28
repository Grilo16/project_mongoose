import QuizList from "../components/QuizComponents/QuizList"
import QuizDetails from "../components/QuizComponents/QuizDetails"
import '../components/QuizComponents/Quiz.css';
import { useState, useEffect } from "react";
import UserScoreDetails from "../components/QuizComponents/UserScoreDetails";

const QuizContainer = ({organs, organToShow, showOrgan, selectedUser, setSelectedUser, findUserByID, editUser}) => {

    return (
        <>
        <div className='userdetails'>
        <UserScoreDetails selectedUser={selectedUser}/>
        </div>
    <div className="quizcontainer">
    <QuizList organs={organs} showOrgan={showOrgan}/>
    <QuizDetails organToShow={organToShow} selectedUser={selectedUser} setSelectedUser={setSelectedUser} findUserByID={findUserByID} editUser={editUser}/>
    </div>
    </>
    
 )
}

export default QuizContainer