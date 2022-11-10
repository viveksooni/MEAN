const Product = require("../../../models/product")
const csv = require("csvtojson")


exports.bulkUpload = (req,res)=>{
    
    csv()
        .fromFile(req.file.path)//taking path of the file
        .then(jsonObj=>{
            // console.log(jsonObj);
            Product.insertMany(jsonObj,(err,data)=>{//inserting data in db
                if(err){
                    console.log(err);
        
                }
            })
        })
        console.log("uploaded..")
    
}