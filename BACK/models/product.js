const mongoose= require("mongoose")

const productSchema=mongoose.Schema({
    name:{ type:String },
    brand:{ type:String },
    price:{type:String},
    category:{},
    stock:{type:Number},
    imagelink:{type:String},
    img:{type:String}
    

})

module.exports= mongoose.model("Product", productSchema)