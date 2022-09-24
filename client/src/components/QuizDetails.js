import QuizQuestion from "./QuizQuestion"
const QuizDetails = ({organToShow}) => {

    if(!organToShow) return "Select an organ to take the quiz!"

    const quizQuestionsToShow = organToShow[0].quiz.map((questions) => {
        return (
            <QuizQuestion
            eachQuestion = {questions.question}
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