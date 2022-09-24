import QuizQuestion from "./QuizQuestion"
import { useState } from "react"
const QuizDetails = ({organToShow, savedScores, setSavedScores}) => {

    const [correctAnswers, setCorrectAnswers] = useState([])

    const score = correctAnswers.length
    setSavedScores(score)

    if(!organToShow) return "Select an organ to take the quiz!"

    const quizQuestionsToShow = organToShow[0].quiz.map((questions) => {
        return (
            <QuizQuestion
            eachQuestion = {questions.question}
            correctAnswers = {correctAnswers}
            setCorrectAnswers = {setCorrectAnswers}
            eachAnswer = {questions.answer}
            key = {questions.id}
            />
        )})

    return (
        <div className='quizdetail'>
        {organToShow ?
        <div>
        <h2>Take the {organToShow[0].name} quiz!</h2>
        <p>You have answered {score} questions correctly!</p>
        <ul className='quizdetail'>{quizQuestionsToShow}</ul>
        </div>
        :
        <div className='quizdetailheader'>
        <h2>Select an organ to take the quiz!</h2>
        </div>
        }
        </div>
    )
}

export default QuizDetails