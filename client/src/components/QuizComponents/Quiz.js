const Quiz = ({ quizName, organId, showOrgan }) => {
  const handleClick = function () {
    showOrgan(organId)
  }

  return (
    <button className='organquizclick' onClick={handleClick}>
      Take the quiz for {quizName}
    </button>
  )
}
export default Quiz
