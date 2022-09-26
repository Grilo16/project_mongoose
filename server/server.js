const express = require("express")
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
const createRouter = require("./helpers/create_router.js")

    app.use(express.json())
    app.use(cors())

MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology: true})
.then((client) => {
    const db = client.db("projectdb")
    const organCollection = db.collection("organs")
    const userCollection= db.collection("users")
    const commentCollection = db.collection("comments")
    
    const organRoutes = createRouter(organCollection)
    const userRoutes = createRouter(userCollection)
    const commentRoutes = createRouter(commentCollection)
    
    app.use("/organ", organRoutes)
    app.use("/user", userRoutes)
    app.use("/comment", commentRoutes)
})





app.listen(9000, ()=>{
    console.log("listening on 9000 quack")
})

