const commentRepo = {
  async getCommentList() {
    const fetchUrl = await fetch('http://localhost:9000/comment/all')
    return await fetchUrl.json()
  },

  async addCommentToDb(commentObject) {
    const fetchUrl = await fetch('http://localhost:9000/comment/add', {
      method: 'POST',
      body: JSON.stringify(commentObject),
      headers: { 'Content-Type': 'application/json' },
    })
    return await fetchUrl.json()
  },

  async deleteCommentByID(id) {
    const fetchUrl = await fetch(`http://localhost:9000/comment/delete/${id}`, {
      method: 'DELETE',
    })
    return await fetchUrl.json()
  },

  async editCommentById(id, patchObject) {
    const fetchUrl = await fetch(`http://localhost:9000/comment/edit/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(patchObject),
      headers: { 'Content-Type': 'application/json' },
    })
    return await fetchUrl.json()
  },
}

export default commentRepo
