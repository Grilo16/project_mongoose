const organRepo = {

    async getOrganList(){
        const fetchUrl = await fetch("http://localhost:9000/organ/all")
        return await fetchUrl.json()
    },
    
    async addOrganToDb(organObject){
        const fetchUrl = await fetch("http://localhost:9000/organ/add", {
            method:"POST",
            body:JSON.stringify(organObject),
            headers:{"Content-Type":"application/json"}
        })
        return await fetchUrl.json()
    },

    async deleteOrganByID(id){
        const fetchUrl = await fetch(`http://localhost:9000/organ/delete/${id}`, {
            method:"DELETE"
        })
        return await fetchUrl.json()
    },

    async editOrganById(id, patchObject){
        const fetchUrl = await fetch(`http://localhost:9000/organ/edit/${id}`, {
            method:"PATCH",
            body:JSON.stringify(patchObject),
            headers:{"Content-Type":"application/json"}
        })
        return await fetchUrl.json()
    }
}

export default organRepo
