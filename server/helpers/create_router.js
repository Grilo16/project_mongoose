const express = require("express")
const data_repository = require("./data_repository") 


const createRouter = function(collection){
const router = express.Router()

router.get("/all", (req, res) => {
    data_repository.getAll(collection)
                    .then((result) => res.json(result))
    })


router.post("/add", (req, res)=> {
    data_repository.addToDb(collection, req.body)
                    .then(()=>{
                        data_repository.getAll(collection)
                                        .then(result => res.json(result))
                    })
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    data_repository.deleteById(collection, id)
                    .then(()=>{
                        data_repository.getAll(collection)
                                        .then(result => res.json(result))
                    })
});
   
router.patch("/edit/:id", (req, res)=>{
    const id = req.params.id
    data_repository.editById(collection, id, req.body)
                    .then(()=>{
                        data_repository.getAll(collection)
                                        .then(result => res.json(result))
                    })
})

    return router
}

module.exports = createRouter


