import QuizList from "../components/QuizList"
import QuizDetails from "../components/QuizDetails"

const QuizContainer = ({organs, organToShow, showOrgan}) => {
 console.log(organs)
    return (
    <>
    <QuizList organs={organs} showOrgan={showOrgan}/>
    <QuizDetails organToShow={organToShow}/>
    </>
 )
 
}

export default QuizContainer