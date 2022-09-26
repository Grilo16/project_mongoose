const CommentCard = ({user}) => {



    return(
        <>
            <h2>Comments</h2>
            <p>Name: {user.guestName}</p>
            <p>Comment: {user.guestComment}</p>
            <button >delete</button>



        </>
    )



}

export default CommentCard