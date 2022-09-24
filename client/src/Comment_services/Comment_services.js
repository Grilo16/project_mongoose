const baseURL = 'http://localhost:9000/comment'

export const getComments = () => {
  return fetch(baseURL).then((res) => res.json())
}

export const postComment = (payload) => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())
}

export const deleteComments = (id) => {
  return fetch(baseURL + id, {
    method: 'DELETE',
  })
}
