const mongoose = require("mongoose")

const mongoConnection = () =>{
    mongoose.connect("mongodb+srv://saurav:saurav@cluster0.kynmfr3.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Mongodb connected")
    })
    .catch(() =>{
        console.log("error in connection" , error)
    });
}

module.exports = mongoConnection;