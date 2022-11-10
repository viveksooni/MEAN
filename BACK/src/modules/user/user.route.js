const router = require("express").Router();

const { registerUser, loginUser,logout, getUserById, getAllUsers} = require("./user.controller");


router.post("/user/signup",registerUser);

router.post("/login",loginUser);

router.get("/logout",logout);

router.get("/user/all",getAllUsers);

router.get("/user/:id",getUserById);



module.exports = router