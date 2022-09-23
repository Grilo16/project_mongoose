import Quiz from "./Quiz";

const QuizList = function({organs, showOrgan}){
  console.log(organs)
  console.log(typeof(organs))
    const quizList = organs.map((organ, index) => {
        return (
          <Quiz
            quiz={organ.quiz} //array of questions and answers
            key={organ.id}
            showOrgan={showOrgan}
            />
        );
      });
      
    return (
      <ul>{quizList}</ul>
    )
  };

export default QuizList