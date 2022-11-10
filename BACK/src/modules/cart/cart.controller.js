const Product = require("../../../models/product")
const User=require("../../../models/user")
//create new fav

exports.newCartItem = (req, res,next) =>{
    console.log("adding product");
    const prodId=req.body.pid;
    const userId=req.body.uid
    const quantity=req.body.quantity
    updatedList=[]
    User.findOne({
        _id:userId
    }).then((user)=>{
    updatedList=[...user.cartlist]
    updatedList.push([prodId,quantity])
    console.log("updated adding",updatedList);
    User.findByIdAndUpdate(userId,{cartlist:updatedList},{ new: true },(err,doc)=>{
        if(err){
            res.status(404).json({
                message:"Book not Foun Check Your Book ID"
            })
        }
        console.log(doc);
        res.status(200).json({
            message:"Product has been added succesfully in CartList ",
            Product:prodId,
            quantity:quantity
                            })
                            })
    })
  
 }


//get logged in user's cart items


exports.myCart= async(req,res)=>{
    const item = await Cart.find({user:req.user._id});

    if(!item)
    {
        res.json({success:false,message:"no cart item"})
    }

    res.status(200).json({
        success:true,
        item    })
}

exports.emptyCart=(req,res,next)=>{
    const userId=req.body.uid
    updatedList=[]
    User.findOne({
        _id:userId
    }).then((user)=>{
    updatedList=[]
    console.log("updated adding",updatedList);
    User.findByIdAndUpdate(userId,{cartlist:updatedList},{ new: true },(err,doc)=>{
        if(err){
            res.status(404).json({
                message:"Book not Foun Check Your Book ID"
            })
        }
        console.log(doc);
        res.status(200).json({
            message:" CartList Empty",
                            })
                            })
    })
  
}

//delete cart 
exports.deleteCart =(req, res,next) =>{
    const productId=req.body.pid;
    const userId=req.body.uid
    const qty=req.body.qty
    updatedList=[]
    User.findOne({
        _id:userId
    }).then((user)=>{
    cartCopy=[...user.cartlist]
    templist=[]
    for (let idAmount of cartCopy){
        if ((idAmount[0]==productId )&& (idAmount[1]==qty)){

        }else{
            templist.push(idAmount)
        }
    }
    User.findByIdAndUpdate(userId,{cartlist:templist},{ new: true },(err,doc)=>{
        if (err){
            res.status(404).json({
                message:"No Product with this ID found !!! Check ID again"
            })
    }
        res.status(200).json({
            message:"Product has been deleted succesfully from Cart List ",
            product:productId,
            newList:updatedList
                            })
                            })
    })
    
 }