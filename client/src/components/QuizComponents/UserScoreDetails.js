const UserScoreDetails = ({ selectedUser }) => {
  if (!selectedUser) return <></>

  return (
    <>
      <div className='userScoreInfo'>
        <h3>
          Total score for {selectedUser.guestName} : {selectedUser.quizScore}
        </h3>
      </div>
    </>
  )
}

export default UserScoreDetails
