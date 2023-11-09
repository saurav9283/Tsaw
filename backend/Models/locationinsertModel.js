const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    from: {
        type: String,  // Specify data type as String
        required: true,
    },
    to: {
        type: String,  // Specify data type as String
        required: true,
    },
    coordinateFrom1: {
        type: Number,
        required: true,
    },
    coordinateFrom2: {
        type: Number,
        required: true,
    },
    coordinateTo1: {
        type: Number, 
        required: true,
    },
    coordinateTo2: {
        type: Number, 
        required: true,
    }
});

const locationModel = mongoose.model("location", locationSchema);  

module.exports = locationModel;
