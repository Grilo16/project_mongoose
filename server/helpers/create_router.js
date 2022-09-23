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

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(result => {
    res.json(result)
    })
    return router

};


module.exports = createRouter