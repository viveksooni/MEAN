const mongoose= require("mongoose")

const salesSchema=mongoose.Schema({
    pname:{ type:String},
    pquant:{ type:String },
    odate:{type:String}, 
    username:{type:String}
})

module.exports= mongoose.model("Sales",salesSchema)