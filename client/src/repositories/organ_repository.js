const organRepo = {

    async getOrganList(){
        const fetchUrl = await fetch("http://localhost:9000/")
        return await fetchUrl.json()
    },
    
    async addOrganToDb(organObject){
        fetch("http://localhost:9000/add", {
            method:"POST",
            body:JSON.stringify(organObject),
            headers:{"Content-Type":"application/json"}
        })
    },

    async deleteOrganByID(id){
        fetch(`http://localhost:9000/delete/${id}`, {
            method:"DELETE"
        })

    },

    async editOrganById(id, patchObject){
        fetch(`http://localhost:9000/edit/${id}`, {
            method:"PATCH",
            body:JSON.stringify(patchObject),
            headers:{"Content-Type":"application/json"}
        })
    }


}

export default organRepo