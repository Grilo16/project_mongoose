const QuizQuestion = ({eachQuestion, eachAnswer}) => {
    
    const checkAnswer = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        console.log(eachAnswer)
        if (e.target.value == eachAnswer) {
            return console.log("Answer is correct!")
        }
        else return console.log("Answer is wrong")
    }

    return (
    <>
    <li>{eachQuestion}
    
    <form className="" onSubmit={checkAnswer}>
    <input type="text" id="answer" required/>
    <input type="submit" value="Submit Answer" id="answer"/>
    </form>


    </li>
    </>
    )
}

export default QuizQuestion