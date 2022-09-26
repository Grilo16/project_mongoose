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
        if (submittedAnswer.toLowerCase() === eachAnswer) {
            setIsAnswerCorrect("Well done - answer is correct!")
            const copyCorrectAnswers = [...correctAnswers]
            copyCorrectAnswers.push(submittedAnswer)
            setCorrectAnswers(copyCorrectAnswers)
            setAnswer('')
        } else {
            setIsAnswerCorrect("That answer is incorrect - please try again!")
            }
        
    }

    return (
    <>
    <li className='questionandanswer'>{eachQuestion}
    <form className="" onSubmit={checkAnswer}>
    <input className = 'inputanswer' type="text" id="answer" onChange={handleAnswerChange} placeholder="Your answer here..." required/>
    <div >
    <input className = 'submitbutton' type="submit" value="Submit Answer" id="answer"/>  
    </div>
    </form>
    {isAnswerCorrect 
    ? <p>{isAnswerCorrect}</p> 
    : null}
    </li>
    </>
    )
}

export default QuizQuestion