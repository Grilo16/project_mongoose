import QuizQuestion from "./QuizQuestion"
import { useState } from "react"
const QuizDetails = ({organToShow}) => {

    const [correctAnswers, setCorrectAnswers] = useState([])

    const score = correctAnswers.length

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
        <>
        {organToShow ?
        <div>
        <h2>Take the {organToShow[0].name} quiz!</h2>
        <ol>{quizQuestionsToShow}</ol>
        <p>You have answered {correctAnswers.length} questions correctly!</p>
        </div>
        :
        <div>
        <h3>Select an organ to take the quiz!</h3>
        </div>
        }
        </>
    )
}

export default QuizDetails