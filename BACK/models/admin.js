const mongoose= require("mongoose")

const adminSchema=mongoose.Schema({
    username:{ type:String},
    password:{ type:String },
    email:{type:String},

    
})

module.exports= mongoose.model("Admin",adminSchema)