const router = require("express").Router();

router.use("/",require("./modules/user"));

router.use("/",require("./modules/product"));

router.use("/",require("./modules/admin"));

router.use("/",require("./modules/wishList"));

router.use("/",require("./modules/cart"));

router.use("/",require("./modules/email"));

router.use("/",require("./modules/coupon"));

router.use("/",require("./modules/bulk"));

 router.use("/",require("./modules/sales"));
module.exports=router