import {useState} from 'react'
const QuizQuestion = ({eachQuestion, eachAnswer}) => {

    const [answer, setAnswer] = useState('')
    const [isAnswerCorrect, setIsAnswerCorrect] = useState('')
    const [answers, setAnswers] = useState([])

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value)
    }

    const checkAnswer = (e) => {
        e.preventDefault()
        const submittedAnswer = answer
        const copyAnswers = [...answers]
        copyAnswers.push(submittedAnswer)
        setAnswers(copyAnswers)
        if (submittedAnswer === eachAnswer) {
            setIsAnswerCorrect("Answer is correct")
        } else {
            setIsAnswerCorrect("Answer is incorrect")
            }
        // return displayAnswer()    
        
    }
    
//     const displayAnswer = () => {
//         if (inputAnswer.isCorrect !== 'unanswered') {
//         if (inputAnswer.isCorrect){
//             return <p>1</p>
//         } else {
//             return <p>2</p>
//         }
//     } else {
//         return null
//     }
// }




    // console.log(answer)
    // console.log(answers)

    // answers needs to loop all questions and make the array - this is a placeholder for now
    const score = answers.length

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
    <div>You scored {score} out of 5!</div>
    </>
    )
}

export default QuizQuestion