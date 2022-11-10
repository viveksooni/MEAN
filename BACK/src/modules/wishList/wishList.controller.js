
const Product = require("../../../models/product")
const User=require("../../../models/user")
//create new fav
exports.newWishListItem = (req, res,next) =>{
    const productId=req.body.pid;
    const userId=req.body.uid
    updatedList=[]
    User.findOne({
        _id:userId
    }).then((user)=>{
    updatedList=[...user.wishlist]
    updatedList.push(productId)
    console.log("updated",updatedList);
    User.findByIdAndUpdate(userId,{wishlist:updatedList},{ new: true },(err,doc)=>{
        if (err){
            res.status(404).json({
                message:"No BOOK with this ID found !!! Check ID again"
            })
    }
        res.status(200).json({
            message:"Product has been added succesfully in Wishlist  ",
            product:productId,
            newList:updatedList
                            })
                            })
    })
    
 }



//get logged in user's wishlist

// exports.myWishList= async(req,res)=>{
//     const item = await WishList.find({user:req.user._id});

//     if(!item)
//     {
//         res.json({success:false,message:"no wish list item"})
//     }

//     res.status(200).json({
//         success:true,
//         item    })
// }

//delete wishlist item
exports.deleteWish =(req, res,next) =>{
    const productId=req.body.pid;
    const userId=req.body.uid
    updatedList=[]
    User.findOne({
        _id:userId
    }).then((user)=>{
    wishListCopy=[...user.wishlist]
   
    wishListCopy.splice(wishListCopy.indexOf(productId), 1);
    User.findByIdAndUpdate(userId,{wishlist:wishListCopy},{ new: true },(err,doc)=>{
        if (err){
            res.status(404).json({
                message:"No Product with this ID found !! Check ID again"
            })
    }
        res.status(200).json({
            message:"Product has been deleted succesfully from Wishlist  ",
            product:productId,
            newList:updatedList
                            })
                            })
    })
    
 }