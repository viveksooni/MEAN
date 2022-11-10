const Sales = require("../../../models/sales")

exports.newSaleItem = (req,res,next) =>{
     const newSaleItem= new Sales({
    pname:req.body.pname,
    pquant:req.body.pquant,
    odate:req.body.odate ,
    username:req.body.username     
     })
     newSaleItem.save()
     res.status(200).json({
        message:"Sale item succesfully added",
        Item:newSaleItem
     })
 }

 exports.salesReport=(req,res,next)=>{
        console.log(req.session);
        sales=Sales.find()
        .then((sales)=>{
            res.json(sales)
        })
 }