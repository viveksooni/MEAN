const mongoose= require("mongoose")

const userSchema=mongoose.Schema({
    username:{ type:String },
    password:{ type:String },
    wishlist:{type:Array},
    cartlist:{type:Array},
    email:{type:String},
    phoneno:{type:Number},
    type:{type:String},
    couponlist:{type:Array},
    token:{String}
    
})

module.exports= mongoose.model("User",userSchema)