import QuizList from "../components/QuizComponents/QuizList"
import QuizDetails from "../components/QuizComponents/QuizDetails"
import '../Quiz.css';

const QuizContainer = ({organs, organToShow, showOrgan}) => {

    return (
    <div className="quizcontainer">
    <QuizList organs={organs} showOrgan={showOrgan}/>
    <QuizDetails organToShow={organToShow}/>
    </div>
 )
 
}

export default QuizContainer