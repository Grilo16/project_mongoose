const ObjectId = require("mongodb").ObjectId


const data_repository = { 

    getAll(collection){
        return collection
                .find() 
                .toArray()
    },

    addToDb(collection, object){
        return collection
                .insertOne(object)
    },

    
    deleteById(collection, id){
        return collection
                .deleteOne({_id: ObjectId(id)})
    },

    editById(collection, id, patchObject){
        return collection
                .updateOne({_id:ObjectId(id)}, {$set: patchObject})
    }

}


module.exports = data_repository