import QuizList from "../components/QuizList"
import QuizDetails from "../components/QuizDetails"

const QuizContainer = ({organs, organToShow, showOrgan}) => {

    return (
    <>
    <QuizList organs={organs} showOrgan={showOrgan}/>
    <QuizDetails organToShow={organToShow}/>
    </>
 )
 
}

export default QuizContainer