var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Dino = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },                   
    password: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    famille:{
        type: String,
        required: true,
    },
    race: {
        type:String,
        required: true
    },
    nourriture:{
        type: String,
        required: ture
    }
},{timestamps: true})



module.exports = mongoose.model("Dino",Dino);