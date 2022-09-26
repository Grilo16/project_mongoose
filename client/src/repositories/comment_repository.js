const commentRepo = {

    async getCommentList(){
        const fetchUrl = await fetch("http://localhost:9000/comment/all")
        return await fetchUrl.json()
    },
    
    async addCommentToDb(commentObject){
        fetch("http://localhost:9000/comment/add", {
            method:"POST",
            body:JSON.stringify(commentObject),
            headers:{"Content-Type":"application/json"}
        })
    },

    async deleteCommentByID(id){
        fetch(`http://localhost:9000/comment/delete/${id}`, {
            method:"DELETE"
        })

    },

    async editCommentById(id, patchObject){
        fetch(`http://localhost:9000/comment/edit/${id}`, {
            method:"PATCH",
            body:JSON.stringify(patchObject),
            headers:{"Content-Type":"application/json"}
        })
    }


}

export default commentRepo
