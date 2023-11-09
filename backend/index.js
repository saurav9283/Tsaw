const express = require("express")
const cors = require("cors")
const mongoose  = require("mongoose")
const routers = require("./Route/location.js")
const mongoConnection = require("./Config/mongo.js")
const app = express()

app.use(express())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res) =>{
    res.send("Api working")
})

app.listen(8000 , () =>{
    mongoConnection();
    console.log("port connected")
})