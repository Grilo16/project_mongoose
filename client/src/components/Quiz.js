
const Quiz = ({quiz, showOrgan}) => {

    // const quiztoShow = quiz.map((quizQuestions) => {
    //     return (
    //         <QuizQuestions
    //         quizQuestion = {quizQuestions.question}
    //         quizAnswer = {quizQuestions.answer}
    //         key = {quizQuestions.id}
    //         />

    // })
    console.log(quiz)

    const handleClick = function(){
            showOrgan(quiz.id)
    };

    return (
        //need to map through the quiz for the questions
        <>
        <li>{quiz.id}</li>
        </>      
         )

}

export default Quiz