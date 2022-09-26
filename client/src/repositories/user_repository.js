const userRepo = {
    
    async getAllUsers(){
        const response = await fetch("http://localhost:9000/user/all")
        return await response.json()
    },
     
    async addUserToDb(UserObject){
        const response = await fetch("http://localhost:9000/user/add", {
            method:"POST",
            body:JSON.stringify(UserObject),
            headers:{"Content-Type":"application/json"}
        })
        return await response.json()
    },

    async deleteUserByID(id){
        fetch(`http://localhost:9000/user/delete/${id}`, {
            method:"DELETE"
        })

    },

    async editUserById(id, patchObject){
        const response = await fetch(`http://localhost:9000/user/edit/${id}`, {
            method:"PATCH",
            body:JSON.stringify(patchObject),
            headers:{"Content-Type":"application/json"}
        })
        return await response.json()
        
    }
}

export default userRepo