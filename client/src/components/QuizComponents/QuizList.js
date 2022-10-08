import Quiz from './Quiz'

const QuizList = function ({ organs, showOrgan }) {
  const quizList = organs.map((organ) => {
    return (
      <Quiz
        quizName={organ.name}
        organId={organ.id}
        key={organ.id}
        showOrgan={showOrgan}
      />
    )
  })

  return <ul className='quizlistcontainer'>{quizList}</ul>
}

export default QuizList
