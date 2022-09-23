const express = require("express")

const createRouter = function(collection){

const router = express.Router()

router.get("/", (req, res) => {
    collection
    .find()
    .toArray()
    .then((result) => res.json(result))
    console.log("hello")
    })


router.post("/add", (req, res)=> {
    collection
    .insertOne(req.body)
    .then(()=> res.json(req.body))
})


    return router

};


module.exports = createRouter