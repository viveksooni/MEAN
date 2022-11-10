const User=require("../../../models/user")

exports.addCoupon=(req,res,next)=>{
    const couponcode=req.body.couponcode;
    const discountpercent=req.body.discountpercent
    const userId=req.body.uid
    console.log("coupon running",couponcode,discountpercent,userId)
    updatedList=[]
    User.findOne({
        _id:userId
    }).then((user)=>{
    updatedList=[...user.couponlist]
    updatedList.push([couponcode,discountpercent])
    console.log("updated",updatedList);
    User.findByIdAndUpdate(userId,{couponlist:updatedList},{ new: true },(err,doc)=>{
        if (err){
            res.status(404).json({
                message:" no coupon with this ID found !!! Check ID again"
            })
    }
        res.status(200).json({
            message:"Coupon has been added succesfully in Wishlist ",
            newList:updatedList
                            })
                            })
    })
}