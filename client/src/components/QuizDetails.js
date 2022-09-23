const QuizDetails = ({organToShow}) => {
    return (
        <>
        {organToShow.name ?
        <div>
        <h2>{organToShow.name}</h2>
        </div>
        :
        <div>
        <h3>Select an organ to take a quiz!</h3>
        </div>
        }
        </>
    )
}

export default QuizDetails