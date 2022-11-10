const router = require("express").Router();
const {addCoupon}=require("./coupon.controller")

router.post("/coupon/add",addCoupon);


module.exports = router;