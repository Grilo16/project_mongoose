import QuizList from "../components/QuizComponents/QuizList"
import QuizDetails from "../components/QuizComponents/QuizDetails"
import '../Quiz.css';
import { useState, useEffect } from "react";

const QuizContainer = ({organs, organToShow, showOrgan}) => {
    
    const [savedScores, setSavedScores] = useState(() => {
        const savedScoresJSON = localStorage.getItem('saved scores list')
        console.log(savedScoresJSON)
        if (savedScoresJSON == null) {
            return []}
        else {
            return JSON.parse(savedScoresJSON)
        }    
        }
    )

    useEffect(()=> {
        localStorage.setItem('saved scores list', JSON.stringify(savedScores))
        }, [savedScores])

    return (
    <div className="quizcontainer">
    <QuizList organs={organs} showOrgan={showOrgan}/>
    <QuizDetails organToShow={organToShow} savedScores={savedScores} setSavedScores={setSavedScores}/>
    </div>
 )
}

export default QuizContainer