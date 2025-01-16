let mongoose = require("mongoose")

let Messages=new mongoose.Schema({
    Sname :{
        type : String
    },
    Semail :{
        type : String
    },
    Smessage :{
        type : String
    }
});

let model = mongoose.model("Message",Messages);
module.exports=model;