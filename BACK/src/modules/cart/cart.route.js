const router = require("express").Router();
const { newCartItem,myCart, deleteCart,emptyCart} = require("./cart.controller");



router.post("/product/deletecartlist",deleteCart);
router.post("/product/cart",newCartItem)
router.post("/cart/empty",emptyCart)

module.exports = router;