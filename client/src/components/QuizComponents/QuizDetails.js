import QuizQuestion from './QuizQuestion'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
const QuizDetails = ({
  organToShow,
  selectedUser,
  setSelectedUser,
  findUserByID,
  editUser,
}) => {
  const [correctAnswers, setCorrectAnswers] = useState([])

  const score = correctAnswers.length

  const saveScore = () => {
    const copyUserToUpdateScore = { ...selectedUser }

    copyUserToUpdateScore.quizScore = score

    setSelectedUser(copyUserToUpdateScore)

    const userByID = findUserByID(copyUserToUpdateScore._id)

    editUser(userByID[0]._id, { quizScore: score })
  }

  if (!organToShow) return 'Select an organ to take the quiz!'

  const quizQuestionsToShow = organToShow[0].quiz.map((questions) => {
    return (
      <QuizQuestion
        eachQuestion={questions.question}
        correctAnswers={correctAnswers}
        setCorrectAnswers={setCorrectAnswers}
        eachAnswer={questions.answer}
        key={questions.id}
      />
    )
  })

  return (
    <div className='quizdetail'>
      {organToShow ? (
        <div>
          <h2>Take the {organToShow[0].name} quiz!</h2>
          <p>You have answered {score} questions correctly over all quizzes!</p>
          <ul className='quizdetail'>{quizQuestionsToShow}</ul>

          {<button onClick={saveScore}>Save score</button>}
        </div>
      ) : (
        <div className='quizdetailheader'>
          <h2>Select an organ to take the quiz!</h2>

          <br></br>
        </div>
      )}
    </div>
  )
}

export default QuizDetails
