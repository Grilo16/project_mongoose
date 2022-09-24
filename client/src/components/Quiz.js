const Quiz = ({quizName, organId, showOrgan}) => {
    
    const handleClick = function(){
        showOrgan(organId)
    }
    
    return (
        <li onClick={handleClick}>Take the quiz for {quizName}</li>
    )
}
export default Quiz