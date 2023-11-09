const { default: mongoose } = require("mongoose")
const mongoode = require("mongoose")

const locationscema = new mongoose.Schema({
    from:{
        type:"string",
        required: true,
    },
    to: {
        type:"string",
        required: true,
    },
    coordinateFrom:{
        type: "float",
        required: true,
    },
    coordinateTo:{
        type:"float",
        required:true,
    }
})

const locationModel = mongoose.model("location" , locationscema)
module.exports = locationModel;