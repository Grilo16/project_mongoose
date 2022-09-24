import {useState} from 'react'
const QuizQuestion = ({eachQuestion, eachAnswer, correctAnswers, setCorrectAnswers}) => {

    const [answer, setAnswer] = useState('')
    const [isAnswerCorrect, setIsAnswerCorrect] = useState('')
 

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value)
    }

    const checkAnswer = (e) => {
        e.preventDefault()
        const submittedAnswer = answer
        if (submittedAnswer === eachAnswer) {
            setIsAnswerCorrect("Well done - answer is correct!")
            const copyCorrectAnswers = [...correctAnswers]
            copyCorrectAnswers.push(submittedAnswer)
            setCorrectAnswers(copyCorrectAnswers)
        } else {
            setIsAnswerCorrect("That answer is incorrect - please try again!")
            }
        
    }

    return (
    <>
    <li>{eachQuestion}
    
    <form className="" onSubmit={checkAnswer}>
    <input type="text" id="answer" onChange={handleAnswerChange} required/>
    <input type="submit" value="Submit Answer" id="answer"/>   
    </form>
    {isAnswerCorrect 
    ? <p>{isAnswerCorrect}</p> 
    : null}
     
    </li>
    {/* <div>You scored {score} out of 5!</div> */}
    </>
    )
}

export default QuizQuestion