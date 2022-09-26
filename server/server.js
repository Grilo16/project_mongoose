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
    const organRoutes = createRouter(organCollection)
    const userRoutes = createRouter(userCollection)
    app.use("/organ", organRoutes)
    app.use("/user", userRoutes)
})





app.listen(9000, ()=>{
    console.log("listening on 9000 quack")
})

