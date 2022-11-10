const router = require("express").Router();


const { newWishListItem, deleteWish} = require("./wishList.controller");


/////////////
router.post("/product/wishlist",newWishListItem)
router.post("/product/deletewishlist",deleteWish);


module.exports = router;